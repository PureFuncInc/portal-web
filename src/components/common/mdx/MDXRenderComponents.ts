import styled from '@emotion/styled'
import type { MDXProviderComponentsProp } from '@mdx-js/react'

export const H1 = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.size.greatest};
  margin-bottom: 25px;
`

export const H2 = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.size.greater};
  margin-bottom: 25px;
`

export const H3 = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.size.great};
  margin-bottom: 25px;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.text};
`

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
} as MDXProviderComponentsProp
