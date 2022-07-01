import { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

type Props = NavLinkProps & React.RefAttributes<HTMLAnchorElement>

const StyledLink = styled(NavLink)((props) => `
  // padding: ${props.theme.sizing.indent.l} ${props.theme.sizing.indent.xxxl};
  // font-size: ${props.theme.sizing.text.m};
  background-color: transparent;
  color: ${props.theme.palette.secondary};
  // border-radius: ${props.theme.sizing.indent.m};
  // border: none;
  // text-align: center;
  text-decoration: none;
  // display: inline-block;

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

// export { Button }
