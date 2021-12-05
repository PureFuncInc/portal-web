import React from 'react'
import styled from '@emotion/styled'

const PageNotFoundPage: React.FC = () => (
  <Container>
    <Giant404>
      404
    </Giant404>
  </Container>
)

export default PageNotFoundPage

const Container = styled.div`
  margin: 10vh auto;
  width: 360px;
`

const Giant404 = styled.h1`
  text-align: center;
  font-size: 8em;
`
