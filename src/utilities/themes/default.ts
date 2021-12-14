import type { Theme } from '@emotion/react'
import { common } from '@/utilities/themes/common'

export const defaultTheme: Theme = {
  ...common,
  color: {
    primary: 'rgb(232,150,25)',
    secondary: 'rgb(0,56,107)',
    text: '#2B2B2B',
    lightText: '#EFEFEF',
    border: '#666',
    shadow: 'rgba(0, 0, 0, 0.15)',
    background: 'rgb(0,56,107)',
  },
  gradient: {
    background: 'linear-gradient(to bottom, #EEE, #FFF)',
  },
  image: {
    logo: 'light',
  },
}
