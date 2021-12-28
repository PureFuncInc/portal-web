import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { styled } from '@/utilities/stitches'
import type { EveryoneQuery } from '@graphqlTypes'
import { GatsbyImage } from '@/components/common/Image'

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
        <GatsbyImage
          shape='rounded'
          alt={person.name?.english ?? 'person image'}
          image={image} />
      )}

      <Name>
        {person.name?.mandarin}
      </Name>
    </Container>
  )
}

const Container = styled(
  'div',
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
)

const Name = styled(
  'h5',
  {
    fontSize: '$great',
    textAlign: 'center',
    margin: '15px auto 25px',
  },
)
