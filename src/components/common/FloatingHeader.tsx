import React from 'react'
import styled from '@emotion/styled'
import { Link } from './Link'
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

const Container = styled.div`
  position: relative;
  padding: 0 25px;
  max-height: 80px;
  background-color: white;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled(Logo)`
  z-index: 2;
  width: 160px;
`

const Nav = styled(NavMenu)`
  z-index: 2;
`

const Background = styled(GradientBackground)`
  z-index: 1;
  border-radius: 0 0 10px 10px;

  &:before {
    border-radius: 0 0 10px 10px;
  }
`
