import { observer } from 'mobx-react-lite'
import { FC } from 'react'
// import { useStore } from '../components/prividers/StoreProvider'

const AccountFC: FC = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const { store } = useStore()

  return (
    <div>
      <h1>Account</h1>
    </div>
  )
}

export const Account = observer(AccountFC)
