import React from 'react'
import { styled, theme } from '@/utilities/stitches'
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
      <Container>
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
            <FooterItem>
              {article.childMdx.frontmatter.author}
            </FooterItem>
          )}

          {article.childMdx?.wordCount?.words && (
            <FooterItem>
              {`${article.childMdx.wordCount.words}字`}
            </FooterItem>
          )}
        </Footer>
      </Container>
    </Link>
  )
}

const Container = styled(
  'li',
  {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: theme.background.plain,
    counterIncrement: 'item-counter 1',

    '&::after': {
      position: 'absolute',
      content: 'counter(item-counter)',
      fontSize: '$greatest',
      fontWeight: 'bold',
      color: '$text',
      opacity: 0.15,
      top: 25,
      right: 25,
    },
  },
)

const Title = styled(
  'h5',
  {
    flex: 1,
    margin: '25px 0',
    fontWeight: 'bold',
    fontSize: '$great',
  },
)

const Footer = styled(
  'div',
  {
    display: 'flex',
  },
)

const StyledDateTime = styled(
  DateTimeDisplay,
  {
    flex: 0,
    color: '$lightText',
  },
)

const FooterItem = styled(
  'span',
  {
    marginRight: 25,
    color: '$lightText',
  },
)
