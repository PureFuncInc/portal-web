import React from 'react'
import { styled, theme } from '@/utilities/stitches'
import { Logo } from '@/components/common/Logo'
import { GradientBackground } from '@/components/common/GradientBackground'
import { NavMenu } from '@/components/common/NavMenu'
import { Link } from '@/components/common/Link'

export const FloatingHeader: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to='/'>
          <StyledLogo />
        </Link>
      </LogoContainer>

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

const LogoContainer = styled(
  'div',
  {
    flexGrow: 1,
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
    flexGrow: 2,
    marginLeft: 15,
    zIndex: 2,
    '@notDesktop': {
      flexGrow: 3,
    },
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
