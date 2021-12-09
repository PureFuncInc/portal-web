import styled from '@emotion/styled'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright>
        Copyright &copy; PureFunc Inc. circa 2021.
      </Copyright>
    </Container>
  )
}

const Container = styled.div(({ theme }) => `
  background-color: ${theme.color.background};
  color: ${theme.color.text};
  padding: 35px 10vw;
  box-shadow: 0 3px 1px ${theme.color.shadow} inset;
`)

const Copyright = styled.div(({ theme }) => `
  color: ${theme.color.text};
`)
