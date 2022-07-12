import { AxiosResponse } from 'axios'
import React, {
  FC, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState
} from 'react'
import buffer from 'buffer'
import styled from 'styled-components'
import { ImageResponse } from '@src/models/responses/ImageResponse'
import { imageService } from '@src/services/imageServiсe'
import { Button } from './Button'
import { Image } from '@src/models/Image'

const Buf = buffer.Buffer

export const Container = styled.div(() => `
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
`)

export const AvatarImg = styled.img(() => {
  return `
    height: 200px;
    width: 150px;
    border-radius: 20px; 
    margin: 10px auto;
    object-fit: cover;
  `
})

export const AvatarPlug = styled.div((props) => {
  return `
    height: 200px;
    width: 150px;
    border-radius: 20px; 
    background-color: ${props.theme.palette.shadow};
    color: ${props.theme.palette.dark};
    margin: 10px auto;
    text-align: center;
    :after {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
  `
})

export type AvatarMethods = {
  save: () => Promise<AxiosResponse<ImageResponse> | undefined>
}

type Props = {
  ref: React.ForwardedRef<AvatarMethods>
  image?: Image
}

const makeSrcFromBuffer = (image?: Image) => {
  if (!image) return ''
  return `data:${image.contentType};base64,${Buf.from(image.data).toString('base64')}`
}

export const Avatar: FC<Props> = forwardRef(({ image }, ref) => {
  const refAvatar = useRef(null)
  const [srcAvatar, setSrcAvatar] = useState('')

  useEffect(() => {
    setSrcAvatar(makeSrcFromBuffer(image))
  }, [image])

  const onClick = useCallback((e: OnClick) => {
    e.preventDefault()
    const input = refAvatar.current as unknown as HTMLInputElement
    input.click()
  }, [])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.target.files?.length) return
    const file = e.target.files[0]
    if (!file.type.match('image')) return
    const reader = new FileReader()
    reader.onload = (e) => {
      setSrcAvatar(String(e.target?.result))
    }
    reader.readAsDataURL(file)
  }, [])

  const save = useCallback(async () => {
    const input = refAvatar.current as unknown as HTMLInputElement
    if (!input.files || !input.files.length) return
    const file = input.files[0]
    const res = await imageService.upload(file, 'avatar')
    return res
  }, [])

  useImperativeHandle(ref, () => ({
    save
  }), [save])

  console.log('image', image)

  return (
    <Container>
      {srcAvatar && <AvatarImg src={srcAvatar} alt='Аватар'/>}
      {!srcAvatar && <AvatarPlug>Изображение</AvatarPlug>}
      <Button onClick={onClick} >Выбрать изображение</Button>
      <input
        type='file'
        accept='.png, .jpg, .jpeg, .gif'
        style={{ display: 'none' }}
        onChange={onChange}
        ref={refAvatar}
      />
    </Container>
  )
})

Avatar.displayName = 'Avatar'
