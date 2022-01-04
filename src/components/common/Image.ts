import { GatsbyImage as OriginalGatsbyImage } from 'gatsby-plugin-image'
import { styled } from '@/utilities/stitches'

export const RegularImage = styled(
  'img',
  {
    width: '100%',
    objectFit: 'cover',
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
  },
)

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
