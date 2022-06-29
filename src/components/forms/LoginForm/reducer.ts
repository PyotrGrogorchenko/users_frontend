import { UserLogin } from '../../../models/User'

type ActionSetField = {
  type: 'SET_FIELD',
  payload: { name: string, value: string }
}

type Actions = ActionSetField

export const getInitialState = (): UserLogin => {
  return {
    email: '',
    password: ''
  }
}
export type State = ReturnType<typeof getInitialState>

export const setField = (name: keyof State, value: string): ActionSetField => ({ type: 'SET_FIELD', payload: { name, value }})

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'SET_FIELD':
      const { name, value } = action.payload
      return { ...state, [name]: value }
    default:
      return state
  }
}
