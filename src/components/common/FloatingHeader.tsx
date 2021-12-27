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
  background-color: ${({ theme }) => theme.background.plain};
  border-radius: 0 0 10px 10px;
  box-shadow: 0 1px 3px ${({ theme }) => theme.color.shadow};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.breakpoint.phone} {
    border-radius: 0;
  }
`

const StyledLogo = styled(Logo)`
  z-index: 2;
  width: 160px;
`

const Nav = styled(NavMenu)`
  flex: 1;
  margin-left: 15px;
  z-index: 2;
`

const Background = styled(GradientBackground)`
  z-index: 1;
  border-radius: 0 0 10px 10px;

  &:before {
    border-radius: 0 0 10px 10px;
  }

  ${({ theme }) => theme.breakpoint.phone} {
    border-radius: 0;

    &:before {
      border-radius: 0;
    }
  }
`
