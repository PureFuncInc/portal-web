import React from 'react'
import styled from '@emotion/styled'
import type { ArticlesQuery } from '@graphqlTypes'
import { Link } from '@/components/common/Link'
import { DateTimeDisplay } from '@/components/common/DateTimeDisplay'

export interface ArticleItemProps {
  article: ArticlesQuery['articles']['nodes'][number]
}

export const ArticleItem: React.FC<ArticleItemProps> = ({
  article,
}) => {
  return (
    <Link to={`/articles/${article.childMdx?.frontmatter?.slug}`}>
      <Item>
        {article.childMdx?.frontmatter?.publishTime && (
          <StyledDateTime
            dateTime={article.childMdx.frontmatter.publishTime}
            form={{ parse: 'yyyyMMddHHmm', format: 'yyyy-MM-dd' }} />
        )}

        <Title>
          {article.childMdx?.frontmatter?.title ?? article.name}
        </Title>

        <Footer>
          {article.childMdx?.frontmatter?.author && (
            <Author>
              {article.childMdx.frontmatter.author}
            </Author>
          )}

          {article.childMdx?.wordCount?.words && (
            <WordCount>
              {`${article.childMdx.wordCount.words}字`}
            </WordCount>
          )}
        </Footer>
      </Item>
    </Link>
  )
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  background-color: #FFF;
  counter-increment: item-counter 1;

  &:after {
    position: absolute;
    content: counter(item-counter);
    font-size: ${({ theme }) => theme.size.greatest};
    font-weight: bold;
    color: rgba(0, 0, 0, 0.15);
    top: 25px;
    right: 25px;
  }
`

const Title = styled.h5`
  flex: 1;
  margin: 25px 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.size.great};
`

const Footer = styled.div`
  display: flex;
`

const StyledDateTime = styled(DateTimeDisplay)`
  flex: 0;
  color: rgba(0, 0, 0, 0.65);
`

const Author = styled.span`
  margin-right: 25px;
  color: rgba(0, 0, 0, 0.65);
`

const WordCount = styled.span`
  margin-right: 25px;
  color: rgba(0, 0, 0, 0.65);
`
