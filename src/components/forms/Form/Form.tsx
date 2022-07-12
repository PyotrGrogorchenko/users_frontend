import { observer } from 'mobx-react-lite'
import { FC, ReactNode, useCallback, useReducer } from 'react'
import { Button } from '@src/components/UI/Button'
import { Input } from '@src/components/UI/Input'
import { reducer, setField, State } from './reducer'
import { Buttons, Data, Container } from './styles'
import { Select } from '@src/components/UI/Select'

type Props = {
  initialState: State
  submit: {
    label: string
    cb?: (data: Record<string, string>) => void
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
    if (submit.cb) return submit.cb(getQueryData(state))
  }, [state, submit])

  return (
    <>
      <Container>
        <Data>
          {Object.entries(state.fields).map(([k, v]) => {
            switch (k) {
              case 'gender':
                return <Select
                  key={k}
                  options={[{ value: 'male' }, { value: 'female' }]}
                  value={v.value}
                  onChange={(e) => dispatch(setField(k, e.target.value))} />
              default:
                return <Input
                  key={k}
                  onChange={(e) => dispatch(setField(k, e.target.value))}
                  value={v.value}
                  error={state.errors && state.errors[k]}
                  placeholder={v.label || k}
                  type={v.type} />
            }
          })}
        </Data>
        <Buttons>
          <Button onClick={onSubmit}>{submit?.label || 'Отправить'}</Button>
          {actions}
        </Buttons>
      </Container>
    </>
  )
}

export const Form = observer(FormFC)
