import { css, Global, ThemeProvider } from '@emotion/react'
import emotionReset from 'emotion-reset'
import React from 'react'
import { lightTheme } from './src/utilities/themes/light'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={lightTheme}>
    <Global styles={theme => getGlobalStyles(theme)} />
    {element}
  </ThemeProvider>
)

const getGlobalStyles = theme => css`
  ${emotionReset}

  html {
    min-height: 100vh;
  }

  body {
    font-family: 'Noto Sans', 'Noto Sans TC', sans-serif, 'Noto Serif',  serif;
    background-size: cover;
    background-repeat: repeat-x;
    background-image: ${theme.gradient.background};
  }
`
