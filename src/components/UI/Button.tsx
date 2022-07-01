import { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<Props>((props) => `
  cursor:pointer;
  padding: ${props.theme.sizing.indent.l} ${props.theme.sizing.indent.xxxl};
  font-size: ${props.theme.sizing.text.m};
  background-color: ${props.theme.palette.success};
  color: ${props.theme.palette.light};
  border-radius: ${props.theme.sizing.indent.m};
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: ${props.theme.palette.common};
  }  
`)

export const Button: FC<Props> = (props) => {
  return (
    <StyledButton {...props}/>
  )
}

// export { Button }
