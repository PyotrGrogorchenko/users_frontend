import { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = {
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const transTime = '.3s'

export const Container = styled.div(() => `
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`)

const StyledInput = styled.input<Props>((props) => `
    ${props.theme.mixins.fontFamily}
    width: 100%;
    font-size: ${props.theme.sizing.text.m};
    outline: none;
    background: none;
    padding: ${props.theme.sizing.indent.m} ${props.theme.sizing.indent.s};
    border: none;
    border-bottom: 1px solid ${props.theme.palette.tertiary};
    transition: border-bottom ${transTime} ease-out;
    :focus, :hover {
      border-bottom: 1px solid ${props.theme.palette.common};
    };
    ::placeholder {
      color: ${props.theme.palette.primary};
    };    
    ::-webkit-datetime-edit {
      color: ${props.theme.palette.primary};
    };
    :before {
      content: attr(placeholder)
    };
  `
)

export const StyledSpan = styled.span((props) => `
  width: 100%;
  ${props.theme.mixins.fontFamily}
  color: ${props.theme.palette.error};
  font-size: ${props.theme.sizing.text.s};
  margin-top: 3px;
`)


export const Input: FC<Props> = (props) => {
  return (
    <Container>
      <StyledInput {...props} />
      {props.error && <StyledSpan>{props.error}</StyledSpan>}
    </Container>
  )
}
