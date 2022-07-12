import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Link } from './UI/Link'

export type Props = {
  children: ReactNode
}

export const Container = styled.div((props) => `
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: ${props.theme.palette.secondary};
`)

export const Grid = styled.div((props) => `
  display: grid;
  box-shadow: inset 0 -1px 0 ${props.theme.palette.shadow};
  background-color: ${props.theme.palette.tertiary};
  grid-template-columns: 40% 20% 40%;
  position: sticky;
  padding: 15px;
  top: 0;
`)

export const Cell = styled.div<{ justifyContent?: 'flex-start' | 'flex-end' | 'center'}>((props) => `
  display: flex;
  flex-direction: row;
  justify-content: ${props.justifyContent || 'center'};
  align-items: center;
  grid-gap: 10px;
`)

const LayoutFC: FC<Props> = ({ children }) => {
  return (
    <>
      <Container/>
      <Grid>
        <Cell justifyContent='flex-start'>
          <Link to='/'>Главная</Link>
          <Link to='account'>Аккаунт</Link>
          <Link to='people'>Пользователи</Link>
        </Cell>
        <Cell justifyContent='center'>
        </Cell>
        <Cell justifyContent='flex-end'>
        </Cell>

      </Grid>
      {children}
    </>
  )
}
export const Layout = LayoutFC
