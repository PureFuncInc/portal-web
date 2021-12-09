import type { Theme } from '@emotion/react'
import { common } from '@/utilities/themes/common'

export const defaultTheme: Theme = {
  ...common,
  color: {
    primary: 'rgb(232,150,25)',
    secondary: 'rgb(0,56,107)',
    text: '#2B2B2B',
    border: '#666',
    shadow: 'rgba(0, 0, 0, 0.15)',
    background: 'rgba(0,56,107, 0.35)',
  },
  gradient: {
    background: 'linear-gradient(to bottom, #EEE, #FFF)',
  },
  image: {
    logo: 'light',
  },
}
