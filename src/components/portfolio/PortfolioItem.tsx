import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { PortfolioFileNodeFragment } from '@graphqlTypes'
import { Link } from '@/components/common/Link'

export interface PortfolioItemProps {
  item: PortfolioFileNodeFragment['nodes'][number]
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  item,
}) => {
  const image = getImage(item.childMdx?.frontmatter?.embeddedImagesLocal?.[0]?.childImageSharp?.gatsbyImageData)

  return (
    <Container to={`/${item.childMdx?.slug ?? 'portfolio'}`}>
      {image && (
        <GatsbyImage
          alt={item.name}
          image={image} />
      )}

      <Name>
        {item.childMdx?.frontmatter?.title ?? item.name}
      </Name>
    </Container>
  )
}

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`

const Name = styled.h4`
  font-size: ${({ theme }) => theme.size.great};
  margin: 15px 0 25px;
`
