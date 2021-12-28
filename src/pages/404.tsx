import React from 'react'
import { styled } from '@/utilities/stitches'

const PageNotFoundPage: React.FC = () => (
  <Container>
    <Giant404>
      404
    </Giant404>
  </Container>
)

export default PageNotFoundPage

const Container = styled(
  'div',
  {
    margin: '10vh auto',
    width: 360,
  },
)

const Giant404 = styled(
  'h1',
  {
    textAlign: 'center',
    fontSize: '8em',
  },
)
