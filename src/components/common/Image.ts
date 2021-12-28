import { GatsbyImage as OriginalGatsbyImage } from 'gatsby-plugin-image'
import { styled } from '@/utilities/stitches'

export const GatsbyImage = styled(
  OriginalGatsbyImage,
  {
    variants: {
      shape: {
        rounded: {
          borderRadius: '50%',
        },
        roundCornered: {
          borderRadius: 10,
        },
      },
    },
    defaultVariant: {
      shape: 'rounded',
    },
  },
)
