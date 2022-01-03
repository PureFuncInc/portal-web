import React from 'react'
import { styled } from '@/utilities/stitches'
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

const Container = styled(
  'div',
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
  },
)

const LayoutContainer = styled(
  'div',
  {
    margin: '0 10vw 120px',
    minHeight: '60vh',
    '@notDesktop': {
      margin: '0 0 120px',
    },
  },
)

const MainContainer = styled(
  'main',
  {
    marginTop: '25px',
  },
)
