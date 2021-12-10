import { css, Global, ThemeProvider } from '@emotion/react'
import emotionReset from 'emotion-reset'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { GApiProvider } from 'react-gapi-auth2'
import { defaultTheme } from './src/utilities/themes/default'
import MDXRenderComponents from './src/components/common/mdx/MDXRenderComponents'

const gapiClientConfig = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  scope: 'openid profile email',
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <Global styles={theme => getGlobalStyles(theme)} />
    <GApiProvider clientConfig={gapiClientConfig}>
      <MDXProvider components={MDXRenderComponents}>
        {element}
      </MDXProvider>
    </GApiProvider>
  </ThemeProvider>
)

const getGlobalStyles = theme => css`
  ${emotionReset}

  html {
    min-height: 100vh;
  }

  body {
    font-family: 'Fira Mono', 'Noto Sans TC', sans-serif;
    background-size: cover;
    background-repeat: repeat-x;
    background-image: ${theme.gradient.background};
  }
`
