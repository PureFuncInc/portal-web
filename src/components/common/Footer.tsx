import styled from '@emotion/styled'
import React from 'react'
import { Link } from '@/components/common/Link'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright>
        Copyright &copy; PureFunc Inc. circa 2021.
      </Copyright>

      <Declarations>
        <DeclarationLink to='/privacy'>
          隱私權政策
        </DeclarationLink>
        <DeclarationLink to='/agreement'>
          資料使用同意聲明
        </DeclarationLink>
      </Declarations>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  padding: 35px 15vw;
  box-shadow: 0 3px 1px ${({ theme }) => theme.color.shadow} inset;
`

const Copyright = styled.div`
  color: ${({ theme }) => theme.color.lightText};
`

const Declarations = styled.div``

const DeclarationLink = styled(Link)`
  margin-right: 15px;
  &, &:visited, &:active {
    color: ${({ theme }) => theme.color.lightText};
  }
`
