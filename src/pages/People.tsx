import { observer } from 'mobx-react-lite'
import { FC, useEffect, useState } from 'react'
import { useStore } from '@src/components/prividers/StoreProvider'
import { User } from '@src/models/User'
import { userService } from '@src/services/userService'

const PeopleFC: FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const { store } = useStore()

  useEffect(() => {
    userService.fetchUsers()
        .then((res) => {
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
