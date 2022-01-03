import type { GatsbyLinkProps } from 'gatsby'
import { Link as GatsbyLink } from 'gatsby'
import React, { forwardRef } from 'react'
import type { VariantProps } from '@stitches/react'
import { styled } from '@/utilities/stitches'

export type LinkProps = Omit<GatsbyLinkProps<never>, 'ref'> & AnchorProps

export const Link = forwardRef<never, LinkProps>(({
  children,
  to,
  color,
  activeClassName,
  partiallyActive,
  ...other
}, ref) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyAnchor
        to={to}
        color={color}
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
      color={color}
      target='_blank'
      {...other}>
      {children}
    </Anchor>
  )
})

Link.displayName = 'Link'

const Anchor = styled(
  'a',
  {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    variants: {
      color: {
        normal: {
          '&, &:visited, &:active': {
            color: '$text',
          },
        },
        light: {
          '&, &:visited, &:active': {
            color: '$lightText',
          },
        },
      },
    },
    defaultVariants: {
      color: 'normal',
    },
  },
)

type AnchorProps = VariantProps<typeof Anchor>

const GatsbyAnchor = styled(
  GatsbyLink,
  {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    variants: {
      color: {
        normal: {
          '&, &:visited, &:active': {
            color: '$text',
          },
        },
        light: {
          '&, &:visited, &:active': {
            color: '$lightText',
          },
        },
      },
    },
    defaultVariants: {
      color: 'normal',
    },
  },
)
