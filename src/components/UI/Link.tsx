import { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

type Props = NavLinkProps & React.RefAttributes<HTMLAnchorElement>

const StyledLink = styled(NavLink)((props) => `
  background-color: transparent;
  color: ${props.theme.palette.secondary};
  text-decoration: none;

  &:hover {
    color: ${props.theme.palette.common};
  };  
  &.active {
    color: ${props.theme.palette.primary};
  }; 
`)

export const Link: FC<Props> = (props) => {
  return (
    <StyledLink {...props}/>
  )
}
