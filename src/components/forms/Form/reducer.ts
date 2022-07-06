import { ValidationError } from '@src/models/ValidationError'

type ActionSetField = {
  type: 'SET_FIELD',
  payload: { name: string, value: string }
}

type ActionSetErrors = {
  type: 'SET_ERRORS',
  payload: ValidationError[]
}

type Actions = ActionSetField | ActionSetErrors

export const formField = {
  label: '',
  value: '',
  type: 'text' as React.HTMLInputTypeAttribute
}

export type State = {
  fields: Record<string, typeof formField>
  errors?: Record<string, string>
}

export const setField = (name: string, value: string): ActionSetField => ({ type: 'SET_FIELD', payload: { name, value }})
export const setErrors = (errors: ValidationError[] = []): ActionSetErrors => ({ type: 'SET_ERRORS', payload: errors })

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'SET_FIELD':
      const { name, value } = action.payload
      state.fields[name].value = value
      return { ...state }
    case 'SET_ERRORS':
      return { ...state, errors: action.payload.reduce<Record<string, string>>((r, v) => {
        r[v.param] = v.msg
        return r
      }, {})
      }
    default:
      return state
  }
}
