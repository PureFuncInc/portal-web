import type { Theme } from '@emotion/react'
import { common } from '@/utilities/themes/common'

export const lightTheme: Theme = {
  ...common,
  color: {
    primary: '#00386B',
    secondary: '#E89619',
    text: '#2B2B2B',
    border: '#101010',
    shadow: 'rgba(0, 0, 0, 0.55)',
    background: 'rgba(255, 255, 255, 0.65)',
  },
  gradient: {
    background: 'linear-gradient(to bottom, #FFF, #EEE)',
  },
  image: {
    logo: '../../images/$_purefunc_black.svg',
  },
}
