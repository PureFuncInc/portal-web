import { GatsbyImage as OriginalGatsbyImage } from 'gatsby-plugin-image'
import { styled } from '@/utilities/stitches'

export const GatsbyImage = styled(
  OriginalGatsbyImage,
  {
    variants: {
      shape: {
        rounded: {
          borderRadius: '$rounded',
        },
        roundCornered: {
          borderRadius: '$roundCornered',
        },
      },
    },
    defaultVariants: {
      shape: 'rounded',
    },
  },
)
