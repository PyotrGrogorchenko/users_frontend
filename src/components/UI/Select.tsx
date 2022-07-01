import { FC, SelectHTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = {
  options: {
    value: string,
    label?: string
  }[]
} & SelectHTMLAttributes<HTMLSelectElement>

const transTime = '.3s'

const StyledSelect = styled.select<Props>((props) => `
  cursor:pointer;
  padding: ${props.theme.sizing.indent.m} ${props.theme.sizing.indent.s};
  font-size: ${props.theme.sizing.text.m};
  background-color: transparent;
  color: ${props.theme.palette.primary};
  outline: none;
  border: none;
  border-bottom: 1px solid ${props.theme.palette.tertiary};
  text-align: left;
  text-decoration: none;
  display: inline-block;
  transition: border-bottom ${transTime} ease-out;
  :focus, :hover {
    border-bottom: 1px solid ${props.theme.palette.common};
  };
`)

const Select: FC<Props> = (props) => {
  return (
    <StyledSelect {...props}>
      {props.options.map((o) =>
        <option
          key={o.value}
          value={o.value}
        >{o.label || o.value}</option>)}
    </StyledSelect>
  )
}

export { Select }
