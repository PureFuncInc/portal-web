import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: '#e89619',
      secondary: '#00386b',
      text: '#FFFFFF',
      lightText: '#CFCFCF',
      border: '#666',
      background: '#00386b',
    },
    background: {
      body: '#111',
      plain: '#2C2C2C',
      gradient: 'linear-gradient(to bottom, #111, #000)',
      primary: '#00386b',
    },
    image: {
      logo: 'dark',
    },
    space: {
      great: '1.5rem',
      greater: '2rem',
      greatest: '2.4rem',
      little: '0.9rem',
      littler: '0.75rem',
      littlest: '0.5rem',
    },
    sizes: {
      great: '1.5em',
      greater: '2em',
      greatest: '2.4em',
      little: '0.9em',
      littler: '0.75em',
      littlest: '0.5em',
    },
    fontSizes: {
      great: '1.5em',
      greater: '2em',
      greatest: '2.4em',
      little: '0.9em',
      littler: '0.75em',
      littlest: '0.5em',
    },
    shadows: {
      label: 'rgba(255, 255, 255, 0.65)',
      footer: 'rgba(155, 155, 155, 0.05)',
    },
    radii: {
      rounded: '50%',
      roundCornered: '6px',
    },
  },
  media: {
    phone: '(max-width: 599px)',
    largePhone: '(min-width: 500px) AND (max-width: 899px)',
    tablet: '(min-width: 900px)',
    desktop: '(min-width: 1200px)',
    notDesktop: '(max-width: 1199px)',
    notPhone: '(min-width: 600px)',
  },
  utils: {
    absoluteFilled: (value: string | number) => ({
      top: value,
      left: value,
      right: value,
      bottom: value,
      position: 'absolute',
    }),
    fixedFilled: (value: string | number) => ({
      top: value,
      left: value,
      right: value,
      bottom: value,
      position: 'fixed',
    }),
    borderBottomRadius: (value: string | number) => ({
      borderBottomRightRadius: value,
      borderBottomLeftRadius: value,
    }),
  },
})
