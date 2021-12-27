import type { Theme } from '@emotion/react'
import { common } from '@/utilities/themes/common'

export const defaultTheme: Theme = {
  ...common,
  color: {
    primary: 'rgb(232,150,25)',
    secondary: 'rgb(0,56,107)',
    text: '#FFFFFF',
    lightText: '#CFCFCF',
    border: '#666',
    shadow: 'rgba(255, 255, 255, 0.65)',
    background: 'rgb(0,56,107)',
  },
  background: {
    body: '#111',
    plain: '#333',
    gradient: 'linear-gradient(to bottom, #111, #2C2C2C)',
    primary: 'rgb(0,56,107)',
  },
  image: {
    logo: 'dark',
  },
}
