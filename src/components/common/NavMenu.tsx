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
          關於 PureFunc
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/articles'>
          部落格
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/portfolio'>
          服務項目
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/contact-us'>
          聯絡我們
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
  font-weight: bold;
`
