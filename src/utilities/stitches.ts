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
      shadow: 'rgba(255, 255, 255, 0.65)',
      background: '#00386b',
    },
    background: {
      body: '#111',
      plain: '#333',
      gradient: 'linear-gradient(to bottom, #111, #2C2C2C)',
      primary: '#00386b',
    },
    image: {
      logo: 'dark',
    },
    sizes: {
      great: '1.5em',
      greater: '2em',
      greatest: '2.4em',
      little: '0.9em',
      littler: '0.75em',
      littlest: '0.5em',
    },
  },
  media: {
    phone: '(max-width: 600px)',
    tablet: '(min-width: 900px)',
    desktop: '(min-width: 1200px)',
    notDesktop: '(max-width: 1199px)',
  },
  utils: {
    absoluteFilled: (value: string | number) => ({
      top: value,
      left: value,
      right: value,
      bottom: value,
      position: 'absolute',
    }),
    borderBottomRadius: (value: string | number) => ({
      borderBottomRightRadius: value,
      borderBottomLeftRadius: value,
    }),
  },
})
