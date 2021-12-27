import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import type { EveryoneQuery } from '@graphqlTypes'

export interface PersonDisplayProps {
  person: EveryoneQuery['people']['nodes'][number]
}

export const PersonDisplay: React.FC<PersonDisplayProps> = ({
  person,
}) => {
  const image = getImage(person.image?.childImageSharp?.gatsbyImageData)

  return (
    <Container>

      {image && (
        <Image
          alt={person.name?.english ?? 'person image'}
          image={image} />
      )}

      <Name>
        {person.name?.mandarin}
      </Name>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled(GatsbyImage)`
  border-radius: 50%;
`

const Name = styled.h5`
  font-size: ${({ theme }) => theme.size.great};
  text-align: center;
  margin: 15px auto 25px;
`
