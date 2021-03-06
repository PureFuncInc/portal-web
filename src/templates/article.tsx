import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'
import type { ArticleQuery } from '@graphqlTypes'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { styled } from '@/utilities/stitches'

export interface ArticlePageTemplateProps {
  data: ArticleQuery
}

const ArticlePageTemplate: React.FC<ArticlePageTemplateProps> = ({ data }) => {
  const mdx = data.article.nodes[0]
  const mdxTitle = mdx.childMdx?.frontmatter?.title
  const mdxBody = mdx.childMdx?.body

  return (
    <>
      <Helmet>
        <meta
          property='author'
          content={mdx.childMdx?.frontmatter?.author} />
      </Helmet>

      <SimpleLayout title={mdxTitle ?? mdx.name}>
        {mdxBody && (
          <Article>
            <MDXRenderer>
              {mdxBody}
            </MDXRenderer>
          </Article>
        )}
      </SimpleLayout>
    </>
  )
}

export default ArticlePageTemplate

const Article = styled('article')

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
            embeddedImagesLocal {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          body
        }
      }
    }
  }
`
