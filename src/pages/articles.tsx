import React from 'react'
import { graphql } from 'gatsby'
import type { ArticlesQuery } from '@graphqlTypes'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { Link } from '@/components/common/Link'
import { PageTitle } from '@/components/common/PageTitle'

export interface ArticlesPageProps {
  data: ArticlesQuery
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({
  data,
}) => {
  return (
    <SimpleLayout title='部落格'>

      <PageTitle>
        部落格
      </PageTitle>

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
