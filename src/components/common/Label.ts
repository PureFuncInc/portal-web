import { styled, theme } from '@/utilities/stitches'

export const Label = styled(
  'h4',
  {
    padding: '25px 15px',
    marginRight: 15,
    color: '$text',
    backgroundColor: theme.background.plain,
    boxShadow: '5px 5px $label',
    variants: {
      size: {
        great: {
          fontSize: '$great',
        },
        greater: {
          fontSize: '$greater',
        },
        greatest: {
          fontSize: '$greatest',
        },
      },
    },
  },
)
