import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from './Link'
import { styled } from '@/utilities/stitches'
import type { NavMenuQuery } from '@graphqlTypes'
import type { PropsWithClassname } from '@/utilities/PropsWithClassname'

export const NavMenu: React.FC<PropsWithClassname> = ({
  className,
}) => {
  const { site } = useStaticQuery<NavMenuQuery>(graphql`
    query NavMenu {
      site {
        siteMetadata {
          navs {
            label
            pathname
          }
        }
      }
    }
  `)

  return (
    <Nav className={className}>
      {site?.siteMetadata?.navs?.map((nav, index) => nav
        ? (
          <NavItem key={index}>
            <NavLink to={nav.pathname ?? ''}>
              {nav.label}
            </NavLink>
          </NavItem>
        )
        : null)}
    </Nav>
  )
}

const Nav = styled(
  'nav',
  {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@phone': {
      flexDirection: 'column',
    },
  },
)

const NavItem = styled(
  'li',
  {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
)

const NavLink = styled(
  Link,
  {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 25,
  },
)
