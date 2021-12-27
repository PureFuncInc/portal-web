import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import type { PortfolioQuery } from '@graphqlTypes'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { PageTitle } from '@/components/common/PageTitle'
import { PortfolioSection } from '@/components/portfolio/PortfolioSection'

export interface PortfolioPageProps {
  data: PortfolioQuery
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({
  data,
}) => {
  const sections = useMemo(
    () =>
      [ ...data.projects.nodes,
        ...data.expertise.nodes ]
        .reduce<Record<string, PortfolioQuery['projects']['nodes']>>(
          (accu, curr) => {
            const category = curr.childMdx?.frontmatter?.category

            if (category) {
              if (category in accu) {
                accu[category].push(curr)
              } else {
                accu[category] = [ curr ]
              }
            }

            return accu
          },
          {},
        ),
    [ data.expertise.nodes, data.projects.nodes ],
  )

  return (
    <SimpleLayout title='服務項目'>
      <PageTitle>
        服務項目
      </PageTitle>

      <Sections>
        {Object.entries(sections)
          .map(([ name, projects ]) => (
            <PortfolioSection
              key={name}
              name={name}
              items={projects} />
          ))}
      </Sections>
    </SimpleLayout>
  )
}

export const query = graphql`
  query Portfolio {
    projects: allFile(
      filter: {sourceInstanceName: {eq: "pages"}, relativeDirectory: {eq: "projects"}}
    ) {
      ...PortfolioFileNode
    }
    expertise: allFile(
      filter: {sourceInstanceName: {eq: "pages"}, relativeDirectory: {eq: "expertise"}}
    ) {
      ...PortfolioFileNode
    }
  }

  fragment PortfolioFileNode on FileConnection {
    nodes {
      id
      name
      childMdx {
        slug
        frontmatter {
          category
          title
          embeddedImagesLocal {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage

const Sections = styled.div()
