import type { GatsbyLinkProps } from 'gatsby'
import { Link as GatsbyLink } from 'gatsby'
import React, { forwardRef } from 'react'
import styled from '@emotion/styled'

export type LinkProps = Omit<GatsbyLinkProps<never>, 'ref'>

export const Link = forwardRef<never, LinkProps>(({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}, ref) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyAnchor
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}>
        {children}
      </GatsbyAnchor>
    )
  }

  return (
    <Anchor
      href={to}
      ref={ref}
      {...other}>
      {children}
    </Anchor>
  )
})

Link.displayName = 'Link'

const Anchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &, &:visited, &:active {
    color: ${({ theme }) => theme.color.text};
  }
`

const GatsbyAnchor = styled(GatsbyLink)`
  text-decoration: none;
  &, &:visited, &:active {
    color: ${({ theme }) => theme.color.text};
  }
`
