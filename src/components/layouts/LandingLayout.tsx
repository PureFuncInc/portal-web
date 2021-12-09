import React from 'react'
import type { LayoutProps } from '@/components/layouts/LayoutProps'
import { SEO } from '@/components/common/SEO'
import { GradientBackground } from '@/components/common/GradientBackground'

export const LandingLayout: React.FC<LayoutProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <SEO title={title} />

      <GradientBackground />

      {children}
    </>
  )
}
