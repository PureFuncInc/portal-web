import React from 'react'
import styled from '@emotion/styled'
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

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const LogoContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const NavMenuContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.6);
`
