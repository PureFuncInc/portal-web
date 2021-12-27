import React from 'react'
import styled from '@emotion/styled'
import type { ArticlesQuery } from '@graphqlTypes'
import { ArticleItem } from '@/components/articles/ArticlesList/ArticleItem'

export interface ArticlesListProps {
  articles: ArticlesQuery['articles']['nodes']
}

export const ArticlesList: React.FC<ArticlesListProps> = ({
  articles,
}) => {
  return (
    <Container>
      {articles.map(article => (
        <ArticleItem
          key={article.id}
          article={article} />
      ))}
    </Container>
  )
}

const Container = styled.ul`
  list-style: none;
`
