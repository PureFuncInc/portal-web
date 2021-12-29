import { styled } from '@/utilities/stitches'

export const MDXHorizontalAlign = styled(
  'div',
  {
    display: 'flex',
    flexWrap: 'nowrap',
    variants: {
      align: {
        start: {
          justifyContent: 'flex-start',
        },
        center: {
          justifyContent: 'center',
        },
        end: {
          justifyContent: 'flex-end',
        },
      },
    },
    defaultVariants: {
      align: 'center',
    },
  },
)
