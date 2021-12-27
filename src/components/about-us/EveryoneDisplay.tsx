import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import type { EveryoneQuery } from '@/generated/graphql-types'
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
        <PersonContainer key={person.id}>
          <Link to={`/people/${person.slug}`}>
            <PersonDisplay person={person} />
          </Link>
        </PersonContainer>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const PersonContainer = styled.div`
  flex-grow: 1;
`
