import { FC, SelectHTMLAttributes } from 'react'

type Props = {
  options: {
    value: string,
    label?: string
  }[]
} & SelectHTMLAttributes<HTMLSelectElement>

const Select: FC<Props> = ({ options, ...rest }) => {
  return (
    <select {...rest}>
      {options.map((o) =>
        <option
          key={o.value}
          value={o.value}
        >{o.label || o.value}</option>)}
    </select>
  )
}

export { Select }
