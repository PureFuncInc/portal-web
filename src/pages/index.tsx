import React from 'react'
import { styled, theme } from '@/utilities/stitches'
import { LandingLayout } from '@/components/layouts/LandingLayout'
import { Logo } from '@/components/common/Logo'
import { NavMenu } from '@/components/common/NavMenu'

const IndexPage: React.FC = () => (
  <LandingLayout title=''>
    <Container>
      <StyledLogo />

      <StyledNavMenu />
    </Container>
  </LandingLayout>
)

export default IndexPage

const Container = styled(
  'div',
  {
    height: '100vh',
    width: '100vw',
  },
)

const StyledLogo = styled(
  Logo,
  {
    position: 'absolute',
    top: '35%',
    left: '50%',
    width: '80vw',
    maxWidth: 800,
    transform: 'translate(-50%, -50%)',
  },
)

const StyledNavMenu = styled(
  NavMenu,
  {
    position: 'absolute',
    width: '50vw',
    bottom: '15vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.background.plain,
    '@notDesktop': {
      bottom: '5vh',
      width: '60vw',
      transform: 'translate(-50%, 0)',
    },
  },
)
