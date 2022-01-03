import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { styled } from '@/utilities/stitches'
import type { EveryoneQuery } from '@graphqlTypes'
import { Link } from '@/components/common/Link'
import { PersonDisplay } from '@/components/about-us/PersonDisplay'

export const EveryoneDisplay: React.FC = () => {
  const everyone = useStaticQuery<EveryoneQuery>(graphql`
    query Everyone {
      people: allPeopleYaml {
        nodes {
          id
          slug
          name {
            mandarin
            english
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 150
                transformOptions: {cropFocus: CENTER}
                aspectRatio: 1
              )
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      {everyone.people.nodes.map(person => (
        <Link
          key={person.id}
          to={`/people/${person.slug}`}>
          <PersonDisplay person={person} />
        </Link>
      ))}
    </Container>
  )
}

const Container = styled(
  'div',
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridColumnGap: '15px',
    gridRowGap: '15px',
    '@phone': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
)
