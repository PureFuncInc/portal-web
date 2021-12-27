import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import type { ArticleQuery } from '@graphqlTypes'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'

export interface ArticlePageTemplateProps {
  data: ArticleQuery
}

const ArticlePageTemplate: React.FC<ArticlePageTemplateProps> = ({ data }) => {
  const mdx = data.article.nodes[0]
  const mdxTitle = mdx.childMdx?.frontmatter?.title
  const mdxBody = mdx.childMdx?.body

  return (
    <SimpleLayout title={mdxTitle ?? mdx.name}>
      {mdxBody && (
        <MDXRenderer>
          {mdxBody}
        </MDXRenderer>
      )}
    </SimpleLayout>
  )
}

export default ArticlePageTemplate

export const query = graphql`
  query Article($name: String!) {
    article: allFile(filter: {name: {eq: $name}}, limit: 1) {
      nodes {
        name
        changeTime(fromNow: true)
        birthTime
        childMdx {
          frontmatter {
            title
            publishTime
            author
          }
          body
        }
      }
    }
  }
`
