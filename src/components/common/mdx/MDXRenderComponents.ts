import type { MDXProviderComponentsProp } from '@mdx-js/react'
import { styled } from '@/utilities/stitches'
import { RegularImage } from '@/components/common/Image'

export const H1 = styled(
  'h1',
  {
    marginBottom: 25,
    fontSize: '$greatest',
    marginTop: '$greatest',
  },
)

export const H2 = styled(
  'h2',
  {
    marginBottom: 25,
    fontSize: '$greater',
    marginTop: '$greater',
  },
)

export const H3 = styled(
  'h3',
  {
    marginBottom: 25,
    fontSize: '$great',
    marginTop: '$great',
  },
)

export const Paragraph = styled(
  'p',
  {
    marginBottom: 10,
    lineHeight: '1.25em',
  },
)

export const Ul = styled(
  'ul',
  {
    marginBottom: '$great',
  },
)

export const A = styled(
  'a',
  {
    color: '$text',
  },
)

export const Img = styled(
  RegularImage,
  {
    marginTop: 10,
    marginBottom: 15,
  },
)

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  ul: Ul,
  a: A,
  img: Img,
} as MDXProviderComponentsProp
