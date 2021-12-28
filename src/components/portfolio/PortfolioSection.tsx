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
          <ItemContainer key={project.id}>
            <PortfolioItem item={project} />
          </ItemContainer>
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
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 25,
  },
)

const ItemContainer = styled(
  'div',
  {
    flex: '0 0 25%',
    marginRight: 15,
  },
)
