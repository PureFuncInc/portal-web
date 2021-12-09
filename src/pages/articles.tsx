import React from 'react'
import { graphql } from 'gatsby'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import type { ArticlesQuery } from '@/../graphql-types'
import { Link } from '@/components/common/Link'

export interface ArticlesPageProps {
  data: ArticlesQuery
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({
  data,
}) => {
  return (
    <SimpleLayout title='Articles'>

      <h1>
        Articles
      </h1>

      <nav>
        {data.articles.nodes.map(article => (
          <li key={article.id}>
            <Link to={`/${article.childMdx?.slug}`}>
              {article.childMdx?.frontmatter?.title || article.name}
            </Link>
          </li>
        ))}
      </nav>

    </SimpleLayout>
  )
}

export default ArticlesPage

export const query = graphql`
  query Articles {
    articles: allFile(
      filter: {
        sourceInstanceName: {eq: "contents"},
        relativeDirectory: {eq: "articles"},
        extension: {eq: "md"}
      },
      sort: {fields: name, order: DESC}
    ) {
      nodes {
        id
        childMdx {
          slug
          frontmatter {
            title
          }
        }
        name
      }
    }
  }
`
