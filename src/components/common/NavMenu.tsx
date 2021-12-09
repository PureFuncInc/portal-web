import React from 'react'
import styled from '@emotion/styled'
import { Link } from './Link'

export interface NavMenuProps {
  className?: string
}

export const NavMenu: React.FC<NavMenuProps> = ({
  className,
}) => {
  return (
    <Nav className={className}>
      <NavItem>
        <NavLink to='/about-us'>
          About PureFunc
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/articles'>
          Blog
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/portfolio'>
          Portfolio
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/contact-us'>
          Contact
        </NavLink>
      </NavItem>
    </Nav>
  )
}

const Nav = styled.nav`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const NavItem = styled.li`
  flex-grow: 1;
  padding: 25px 35px;
`

const NavLink = styled(Link)`
  text-decoration: none;
`
