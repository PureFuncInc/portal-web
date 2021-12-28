import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { theme } from '@/utilities/stitches'

export interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({
  className,
}) => {
  return theme.image.logo.value === 'dark'
    ? (
      <StaticImage
        className={className}
        placeholder='blurred'
        src='../../images/$_purefunc_white.svg'
        alt='PureFunc logo' />
    )
    : (
      <StaticImage
        className={className}
        placeholder='blurred'
        src='../../images/$_purefunc_black.svg'
        alt='PureFunc logo' />
    )
}
