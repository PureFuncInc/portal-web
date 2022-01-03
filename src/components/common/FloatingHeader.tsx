import React from 'react'
import { styled, theme } from '@/utilities/stitches'
import { Logo } from '@/components/common/Logo'
import { GradientBackground } from '@/components/common/GradientBackground'
import { NavMenu } from '@/components/common/NavMenu'
import { Link } from '@/components/common/Link'
import { DrawerNavMenu } from '@/components/common/DrawerNavMenu'

export const FloatingHeader: React.FC = () => (
  <Container>
    <Background rotate={false} />

    <LogoContainer>
      <Link to="/">
        <StyledLogo />
      </Link>
    </LogoContainer>

    <Nav />

    <DrawerNav />
  </Container>
)

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
      padding: 25,
      borderRadius: 'none',
    },
  },
)

const LogoContainer = styled(
  'div',
  {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
)

const StyledLogo = styled(
  Logo,
  {
    zIndex: 2,
    width: '10vw',
    '@notDesktop': {
      width: '30vw',
    },
  },
)

const Nav = styled(
  NavMenu,
  {
    flexGrow: 2,
    marginLeft: 15,
    zIndex: 2,
    '@notDesktop': {
      display: 'none',
    },
  },
)

const DrawerNav = styled(
  DrawerNavMenu,
  {
    zIndex: 3,
    '@desktop': {
      display: 'none',
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
