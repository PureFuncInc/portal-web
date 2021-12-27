import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { generateRandomColor } from '@/utilities/generateColor'

export interface GradientBackgroundProps {
  rotate?: boolean

  className?: string
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className,
  rotate = true,
}) => {
  const gradientColorVars = useMemo(
    () => {
      const colors = Array(4)
        .fill('')
        .map(() => generateRandomColor())

      return css`
        --rotate-animation-play-state: ${rotate ? 'running' : 'paused'};
        --left-top-corner: ${colors[0]};
        --right-top-corner: ${colors[1]};
        --right-bottom-corner: ${colors[2]};
        --left-bottom-corner: ${colors[3]};
      `
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

const RotateAnimation = keyframes`
  from {
    transform: rotateZ(0turn);
  }
  to {
    transform: rotateZ(1turn);
  }
`

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.background.gradient};


  &:before {
    animation-name: ${RotateAnimation};
    animation-play-state: var(--rotate-animation-play-state);
    animation-duration: 60s;
    animation-iteration-count: infinite;
    position: absolute;
    content: '';
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background-image: radial-gradient(at right top, var(--right-top-corner), transparent 50%),
                      radial-gradient(at right bottom, var(--right-bottom-corner), transparent 50%),
                      radial-gradient(at left bottom, var(--left-bottom-corner), transparent 50%),
                      radial-gradient(at left top, var(--left-top-corner), transparent 50%);
  }
`
