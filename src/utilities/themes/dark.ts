import type { Theme } from '@emotion/react'
import { common } from '@/utilities/themes/common'

export const darkTheme: Theme = {
  ...common,
  color: {
    primary: '#E89619',
    secondary: '#00386B',
    text: '#EEE',
    border: '#DDD',
    shadow: 'rgba(255, 255, 255, 0.55)',
    background: '#000',
  },
  gradient: {
    background: 'linear-gradient(to bottom, #000, #252525)',
  },
  image: {
    logo: '../../images/$_purefunc_white.svg',
  },
}
