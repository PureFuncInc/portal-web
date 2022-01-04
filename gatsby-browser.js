/* eslint-disable @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-var-requires */
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { globalCss } from '@stitches/react'
import { reset } from 'stitches-reset'
import MDXRenderComponents from './src/components/common/mdx/MDXRenderComponents'
import { theme } from './src/utilities/stitches'

const { version } = require('./package.json')

export const wrapRootElement = ({ element }) => {
  globalStyles()

  return (
    <MDXProvider components={MDXRenderComponents}>
      {element}
    </MDXProvider>
  )
}

export const onClientEntry = async () => {
  console.info(`[App Version] v${version}`)
}

const globalStyles = globalCss({
  ...reset,
  html: {
    minHeight: '100vh',
  },
  body: {
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif, 'Noto Serif', serif",
    color: '$text',
    backgroundColor: theme.background.body,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-x',
    backgroundImage: theme.background.gradient,
  },
})
