import React from 'react'
import styled from '@emotion/styled'
import { Label } from '../common/Label'
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
      <ContainerLabel>
        {name}
      </ContainerLabel>

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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ContainerLabel = styled(Label)`
  font-size: ${({ theme }) => theme.size.great};
`

const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`

const ItemContainer = styled.div`
  flex: 0 0 25%;
  margin-right: 15px;
`
