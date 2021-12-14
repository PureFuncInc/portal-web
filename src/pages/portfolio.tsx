import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { PageTitle } from '@/components/common/PageTitle'
import type { PortfolioQuery } from '@/generated/graphql-types'
import { PortfolioSection } from '@/components/portfolio/PortfolioSection'

export interface PortfolioPageProps {
  data: PortfolioQuery
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({
  data,
}) => {
  const sections = useMemo(
    () =>
      data.projects.nodes.reduce<Record<string, PortfolioQuery['projects']['nodes']>>(
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
    [ data.projects.nodes ],
  )

  return (
    <SimpleLayout title='代表作'>
      <PageTitle>
        代表作
      </PageTitle>

      <Sections>
        {Object.entries(sections)
          .map(([ name, projects ]) => (
            <PortfolioSection
              key={name}
              name={name}
              projects={projects} />
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
  }
`

export default PortfolioPage

const Sections = styled.div()
