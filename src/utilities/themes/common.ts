import type { Theme } from '@emotion/react'

export const common: Pick<Theme, 'size' | 'breakpoint'> = {
  size: {
    great: '1.5em',
    greater: '2em',
    greatest: '2.4em',
    little: '0.9em',
    littler: '0.75em',
    littlest: '0.5em',
  },
  breakpoint: {
    phone: '@media (max-width: 600px)',
    tablet: '@media (min-width: 900px)',
    desktop: '@media (min-width: 1200px)',
  },
}
