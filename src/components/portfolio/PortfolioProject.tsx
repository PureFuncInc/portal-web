import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { PortfolioQuery } from '@/generated/graphql-types'
import { Link } from '@/components/common/Link'

export interface PortfolioProjectProps {
  project: PortfolioQuery['projects']['nodes'][number]
}

export const PortfolioProject: React.FC<PortfolioProjectProps> = ({
  project,
}) => {
  const image = getImage(project.childMdx?.frontmatter?.embeddedImagesLocal?.[0]?.childImageSharp?.gatsbyImageData)

  return (
    <Container to={project.childMdx?.slug ?? '/projects'}>
      {image && (
        <GatsbyImage
          alt={project.name}
          image={image} />
      )}

      <Name>
        {project.childMdx?.frontmatter?.title ?? project.name}
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
