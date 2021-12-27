import React from 'react'
import styled from '@emotion/styled'
import { SEO } from '@/components/common/SEO'
import type { LayoutProps } from '@/components/layouts/LayoutProps'
import { FloatingHeader } from '@/components/common/FloatingHeader'
import { Footer } from '@/components/common/Footer'

export const SimpleLayout: React.FC<LayoutProps> = ({
  children,
  ...seoProps
}) => (
  <Container>
    <SEO {...seoProps} />

    <LayoutContainer>
      <FloatingHeader />

      <MainContainer>
        {children}
      </MainContainer>
    </LayoutContainer>

    <Footer />
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const LayoutContainer = styled.div`
  margin: 0 15vw 120px;
  min-height: 60vh;

  ${({ theme }) => theme.breakpoint.phone} {
    margin: 0 0 120px;
  }
`

const MainContainer = styled.main`
  margin-top: 25px;
`
