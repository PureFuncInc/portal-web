import * as React from 'react'
import { getCssText } from './src/utilities/stitches'

export { wrapRootElement } from './gatsby-browser'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      key="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }} />,
  ])
}
