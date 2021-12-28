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
        <DeclarationLink
          to='/agreement'
          color='light'>
          資料使用同意聲明
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
    boxShadow: '0 3px 1px $shadow inset',
  },
)

const Copyright = styled(
  'div',
  {
    color: '$lightText',
  },
)

const Declarations = styled('div')

const DeclarationLink = styled(
  Link,
  {
    marginRight: 15,
  },
)
