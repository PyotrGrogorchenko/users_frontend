import { ButtonHTMLAttributes, FC } from 'react'

type Props = {
  label: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ label, ...rest }) => {
  return (
    <button {...rest}>{label}</button>
  )
}

export { Button }
