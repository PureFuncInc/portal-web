import React from 'react'
import { styled, theme } from '@/utilities/stitches'
import { Link } from '@/components/common/Link'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright>
        Copyright &copy; PureFunc Inc. circa 2021.
      </Copyright>

      <Declarations>
        <DeclarationLink
          to='/privacy'
          color='light'>
          隱私權政策
        </DeclarationLink>
      </Declarations>
    </Container>
  )
}

const Container = styled(
  'div',
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.background.primary,
    padding: '35px 15vw',
    boxShadow: '0 3px 3px $footer inset',
    '@notDesktop': {
      flexWrap: 'wrap',
      padding: '35px 5vw',
    },
  },
)

const Copyright = styled(
  'div',
  {
    color: '$lightText',
  },
)

const Declarations = styled(
  'div',
  {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    '@notDesktop': {
      flexBasis: '100%',
    },
  },
)

const DeclarationLink = styled(
  Link,
  {
    marginRight: 15,
  },
)
