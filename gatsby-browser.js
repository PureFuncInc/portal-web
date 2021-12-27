import { css, Global, ThemeProvider } from '@emotion/react'
import emotionReset from 'emotion-reset'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { defaultTheme } from './src/utilities/themes/default'
import MDXRenderComponents from './src/components/common/mdx/MDXRenderComponents'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <Global styles={theme => getGlobalStyles(theme)} />
    <MDXProvider components={MDXRenderComponents}>
      {element}
    </MDXProvider>
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
    background-image: ${theme.background.gradient};
  }
`
