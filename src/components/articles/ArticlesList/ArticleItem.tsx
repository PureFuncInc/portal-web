import React from 'react'
import { styled, theme } from '@/utilities/stitches'
import type { ArticlesQuery } from '@graphqlTypes'
import { Link } from '@/components/common/Link'

export interface ArticleItemProps {
  article: ArticlesQuery['articles']['nodes'][number]
}

export const ArticleItem: React.FC<ArticleItemProps> = ({
  article,
}) => {
  return (
    <Container>
      <Link to={`/articles/${article.childMdx?.frontmatter?.slug}`}>
        <Title>
          {article.childMdx?.frontmatter?.title ?? article.name}
        </Title>

        <Footer>
          {article.childMdx?.frontmatter?.author && (
            <FooterItem>
              {article.childMdx.frontmatter.author}
            </FooterItem>
          )}
        </Footer>
      </Link>
    </Container>
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
  },
)

const Title = styled(
  'h5',
  {
    flex: 1,
    margin: '10px 0 25px',
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

const FooterItem = styled(
  'span',
  {
    marginRight: 25,
    color: '$lightText',
  },
)
