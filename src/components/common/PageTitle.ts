import { styled, theme } from '@/utilities/stitches'

export const PageTitle = styled(
  'h1',
  {
    display: 'inline-block',
    padding: '15px 35px',
    margin: '15px 0 12vh 60px',
    fontSize: '4em',
    fontWeight: 'bold',
    color: '$text',
    backgroundColor: theme.background.plain,
    boxShadow: '5px 5px $shadow',
  },
)
