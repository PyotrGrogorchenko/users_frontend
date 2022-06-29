import { observer } from 'mobx-react-lite'
import { FC, useEffect, useState } from 'react'
import { useStore } from '../components/prividers/StoreProvider'
import { User } from '../models/User'
import { userService } from '../services/userService'

const PeopleFC: FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const { store } = useStore()

  useEffect(() => {
    userService.fetchUsers()
        .then((res) => {
          console.log(res.data)
          setUsers(res.data)
        })
        .catch((e) => store.setError(e as Error, 'error'))
  }, [])

  return (
    <div>
      {users.map((user) =>
        <div key={user._id}>{user._id}&nbsp;{user.email}&nbsp;{user.username}&nbsp;{user.gender}</div>)}
    </div>
  )
}

export const People = observer(PeopleFC)
