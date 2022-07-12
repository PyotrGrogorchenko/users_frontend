import { observer } from 'mobx-react-lite'
import { FC, useEffect, useState } from 'react'
import { useStore } from '@src/components/prividers/StoreProvider'
import { User } from '@src/models/User'
import { userService } from '@src/services/userService'
import styled from 'styled-components'

const Table = styled.table(() => `
  margin: 20px auto;
  border: none;
`)

const Thead = styled.thead((props) => `
  color: ${props.theme.palette.light}; 
  background-color: ${props.theme.palette.tertiary}; 
`)

const Th = styled.th(() => `
  padding: 20px;
`)

const Tbody = styled.tbody(() => `
`)

const Tr = styled.tr(() => `
`)

const Td = styled.td(() => `
  padding: 10px;
`)

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
    <Table>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>email</Th>
          <Th>username</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) =>
          <Tr key={user._id}>
            <Td>{user._id}</Td>
            <Td>{user.email}</Td>
            <Td>{user.username}</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  )
}

export const People = observer(PeopleFC)
