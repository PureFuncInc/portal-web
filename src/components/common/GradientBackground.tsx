import React, { useMemo } from 'react'
import { keyframes, styled } from '@/utilities/stitches'
import { generateRandomColor } from '@/utilities/generateColor'
import type { PropsWithClassname } from '@/utilities/PropsWithClassname'

export interface GradientBackgroundProps {
  rotate?: boolean
}

export const GradientBackground: React.FC<PropsWithClassname<GradientBackgroundProps>> = ({
  children,
  className,
  rotate = true,
}) => {
  const gradientColorVars = useMemo(
    () => {
      const colors = Array(4)
        .fill('')
        .map(() => generateRandomColor())

      return {
        '--rotate-animation-play-state': rotate ? 'running' : 'paused',
        '--left-top-corner': colors[0],
        '--right-top-corner': colors[1],
        '--right-bottom-corner': colors[2],
        '--left-bottom-corner': colors[3],
      }
    },
    [ rotate ],
  )

  return (
    <Background
      className={className}
      css={gradientColorVars}>
      {children}
    </Background>
  )
}

const RotateAnimation = keyframes({
  from: {
    transform: 'rotateZ(0turn)',
  },
  to: {
    transform: 'rotateZ(1turn)',
  },
})

const Background = styled(
  'div',
  {
    zIndex: -1,
    overflow: 'hidden',
    absoluteFilled: 0,
    '&::before': {
      animationName: RotateAnimation,
      animationPlayState: 'var(--rotate-animation-play-state)',
      animationDuration: '60s',
      animationIterationCount: 'infinite',
      content: '',
      absoluteFilled: '-100%',
      backgroundImage: 'radial-gradient(at right top, var(--right-top-corner), transparent 50%), ' +
                      'radial-gradient(at right bottom, var(--right-bottom-corner), transparent 50%), ' +
                      'radial-gradient(at left bottom, var(--left-bottom-corner), transparent 50%), ' +
                      'radial-gradient(at left top, var(--left-top-corner), transparent 50%)',
    },
  },
)
