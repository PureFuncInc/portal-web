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
        <Link to='/about-us'>
          關於 PureFunc
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/articles'>
          部落格
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/portfolio'>
          代表作
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/contact-us'>
          聯絡我們
        </Link>
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
