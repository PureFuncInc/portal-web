import React from 'react'
import { styled, theme } from '@/utilities/stitches'
import { LandingLayout } from '@/components/layouts/LandingLayout'
import { Logo } from '@/components/common/Logo'
import { NavMenu } from '@/components/common/NavMenu'

const IndexPage: React.FC = () => (
  <LandingLayout title=''>
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <NavMenuContainer>
        <NavMenu />
      </NavMenuContainer>
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

const LogoContainer = styled(
  'div',
  {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
)

const NavMenuContainer = styled(
  'div',
  {
    position: 'absolute',
    bottom: '15vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.background.plain,
    '@notDesktop': {
      bottom: '5vh',
      transform: 'translate(-50%, 0)',
    },
  },
)
