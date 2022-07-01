import { observer } from 'mobx-react-lite'
import { FC, ReactNode, useCallback, useReducer } from 'react'
import { Button } from '@src/components/UI/Button'
import { Input } from '@src/components/UI/Input'
import { reducer, setErrors, setField, State } from './reducer'
import { Buttons, Data, Container } from './styles'
import { Select } from '@src/components/UI/Select'

type Props = {
  initialState: State
  submit: {
    view: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: any
    cb?: (ok: boolean) => void
  }
  actions?: ReactNode
}

const getQueryData = (state: State) =>
  Object.entries(state.fields).reduce<Record<string, string>>((r, [k, v]) => {
    r[k] = v.value
    return r
  }, {})

const FormFC: FC<Props> = ({ initialState, submit, actions }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onSubmit = useCallback(async () => {
    const res = await submit.action(getQueryData(state))
    if (submit.cb) submit.cb(res.status >= 200 && res.status < 300)
    if (res.status < 400) return
    console.log('res.status', res)
    if (!res.response.data.errors) return
    dispatch(setErrors(res.response.data.errors))
  }, [state, submit])

  return (
    <Container>
      <Data>
        {Object.entries(state.fields).map(([k, v]) => {
          console.log(k, v)
          switch (k) {
            case 'gender':
              return <Select
                key={k}
                options={[{ value: 'male' }, { value: 'female' }]}
                defaultValue={v.value}
              />
            default:
              return <Input
                key={k}
                onChange={(e) => dispatch(setField(k, e.target.value))}
                value={v.value}
                error={state.errors && state.errors[k]}
                placeholder={v.view || k}
                type={v.type}
              />
          }
        })}
      </Data>
      <Buttons>
        <Button onClick={onSubmit}>{submit?.view || 'Отправить'}</Button>
        {actions}
      </Buttons>
    </Container>
  )
}

export const Form = observer(FormFC)
