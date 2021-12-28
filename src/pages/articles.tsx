import React from 'react'
import { graphql } from 'gatsby'
import type { ArticlesQuery } from '@graphqlTypes'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { PageTitle } from '@/components/common/PageTitle'
import { ArticlesList } from '@/components/articles/ArticlesList/ArticlesList'

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

      <ArticlesList articles={data.articles.nodes} />

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
        name
        childMdx {
          frontmatter {
            title
            slug
            publishTime
            author
          }
        }
      }
    }
  }
`
