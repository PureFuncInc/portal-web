import React from 'react'
import { Label } from '../common/Label'
import { styled } from '@/utilities/stitches'
import type { PortfolioFileNodeFragment } from '@graphqlTypes'
import { PortfolioItem } from '@/components/portfolio/PortfolioItem'

export interface PortfolioSectionProps {
  name: string
  items: PortfolioFileNodeFragment['nodes']
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  name,
  items,
}) => {
  return (
    <Container>
      <Label size='great'>
        {name}
      </Label>

      <Items>
        {items.map(project => (
          <PortfolioItem
            key={project.id}
            item={project} />
        ))}
      </Items>
    </Container>
  )
}

const Container = styled(
  'section',
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
)

const Items = styled(
  'div',
  {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridColumnGap: '15px',
    gridRowGap: '15px',
    marginTop: 25,
    '@phone': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
)
