import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { SEO } from '@/components/common/SEO'
import type { LayoutProps } from '@/components/layouts/LayoutProps'
import { Logo } from '@/components/common/Logo'
import { Container } from '@/components/common/Container'

export const SimpleLayout: React.FC<LayoutProps> = ({
  children,
  title,
}) => (
  <>
    <SEO title={title} />

    <LayoutContainer>
      <Header>
        <LogoContainer>
          <Link to='/'>
            <Logo />
          </Link>
        </LogoContainer>
      </Header>

      <main>
        {children}
      </main>
    </LayoutContainer>
  </>
)

const LayoutContainer = styled.div`
  margin: 20px 10vw;
`

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const LogoContainer = styled(Container)`
  width: 160px;
`
