import React from 'react'
import styled from '@emotion/styled'
import { Label } from '../common/Label'
import type { PortfolioQuery } from '@/generated/graphql-types'
import { PortfolioProject } from '@/components/portfolio/PortfolioProject'

export interface PortfolioSectionProps {
  name: string
  projects: PortfolioQuery['projects']['nodes']
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  name,
  projects,
}) => {
  return (
    <Container>
      <ContainerLabel>
        {name}
      </ContainerLabel>

      <Projects>
        {projects.map(project => (
          <ProjectContainer key={project.id}>
            <PortfolioProject project={project} />
          </ProjectContainer>
        ))}
      </Projects>
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

const Projects = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`

const ProjectContainer = styled.div`
  flex: 0 0 25%;
  margin-right: 15px;
`
