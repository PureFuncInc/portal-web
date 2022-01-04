import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { styled } from '@/utilities/stitches'
import type { PortfolioFileNodeFragment } from '@graphqlTypes'
import { Link } from '@/components/common/Link'
import { GatsbyImage } from '@/components/common/Image'

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

const Container = styled(
  Link,
  {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '$roundCornered',
  },
)

const Name = styled(
  'h4',
  {
    fontSize: '$great',
    margin: '15px 0 25px',
  },
)
