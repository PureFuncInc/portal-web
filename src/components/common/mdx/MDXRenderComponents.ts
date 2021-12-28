import type { MDXProviderComponentsProp } from '@mdx-js/react'
import { css, styled } from '@/utilities/stitches'

export const Header = css({
  color: '$text',
  marginBottom: 25,
})

export const H1 = styled(
  'h1',
  {
    ...Header,
    fontSize: '$greatest',
    marginTop: '$greatest',
  },
)

export const H2 = styled(
  'h2',
  {
    ...Header,
    fontSize: '$greater',
    marginTop: '$greater',
  },
)

export const H3 = styled(
  'h3',
  {
    ...Header,
    fontSize: '$great',
    marginTop: '$great',
  },
)

export const Paragraph = styled(
  'p',
  {
    color: '$text',
    marginBottom: 10,
    lineHeight: '1.25em',
  },
)

export const Ul = styled(
  'ul',
  {
    color: '$text',
  },
)

export const Li = styled(
  'li',
  {
    color: '$text',
  },
)

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  ul: Ul,
  li: Li,
} as MDXProviderComponentsProp
