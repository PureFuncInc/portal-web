import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useTheme } from '@emotion/react'

export interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({
  className,
}) => {
  const { image: { logo } } = useTheme()

  return logo === 'dark'
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
