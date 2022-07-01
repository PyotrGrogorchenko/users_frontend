import { imageService } from '@src/services/imageServiсe'
import React, {
  FC, forwardRef, useCallback, useImperativeHandle, useRef, useState
} from 'react'
import styled from 'styled-components'
import { Button } from './Button'

export const Container = styled.div(() => `
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
`)

export type AvatarMethods = {
  seveAvatar: () => void
}
export type Props = {
  ref: React.ForwardedRef<AvatarMethods>
}

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

export const Avatar: FC<Props> = forwardRef((_, ref) => {
  const refAvatar = useRef(null)
  const [srcAvatar, setSrcAvatar] = useState('')

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

  const seveAvatar = useCallback(() => {
    const input = refAvatar.current as unknown as HTMLInputElement
    if (!input.files || !input.files.length) return
    imageService.save(input.files[0])
    // console.log('seveAvatar', input.files[0])
  }, [])

  useImperativeHandle(ref, () => ({
    seveAvatar
  }), [seveAvatar])

  return (
    <Container>
      {srcAvatar && <AvatarImg src={srcAvatar} alt='Аватар'/>}
      {!srcAvatar && <AvatarPlug>Фото</AvatarPlug>}
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
