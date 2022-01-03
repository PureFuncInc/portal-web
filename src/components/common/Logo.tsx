import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { theme } from '@/utilities/stitches'
import type { PropsWithClassname } from '@/utilities/PropsWithClassname'

export const Logo: React.FC<PropsWithClassname> = props => {
  return (
    <FullLogo {...props} />
  )
}

export const FullLogo: React.FC<PropsWithClassname> = ({
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

export const SimpleLogo: React.FC<PropsWithClassname> = ({
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
