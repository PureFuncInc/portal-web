import React from 'react'
import { Link } from './Link'
import { styled, theme } from '@/utilities/stitches'
import { Logo } from '@/components/common/Logo'
import { GradientBackground } from '@/components/common/GradientBackground'
import { NavMenu } from '@/components/common/NavMenu'

export const FloatingHeader: React.FC = () => {
  return (
    <Container>
      <Link to='/'>
        <StyledLogo />
      </Link>

      <Nav />

      <Background rotate={false} />
    </Container>
  )
}

const Container = styled(
  'div',
  {
    position: 'relative',
    padding: '0 25px',
    maxHeight: 80,
    backgroundColor: theme.background.plain,
    borderBottomRadius: '$roundCornered',
    boxShadow: '0 1px 3px $label',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@notDesktop': {
      borderRadius: 'none',
    },
  },
)

const StyledLogo = styled(
  Logo,
  {
    zIndex: 2,
    width: 160,
  },
)

const Nav = styled(
  NavMenu,
  {
    flex: 1,
    marginLeft: 15,
    zIndex: 2,
  },
)

const Background = styled(
  GradientBackground,
  {
    zIndex: 1,
    borderBottomRadius: '$roundCornered',
    '&::before': {
      borderBottomRadius: '$roundCornered',
    },
    '@notDesktop': {
      borderRadius: 'none',
      '&::before': {
        borderRadius: 'none',
      },
    },
  },
)
