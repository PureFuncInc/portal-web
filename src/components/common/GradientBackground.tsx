import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { generateRandomColor } from '@/utilities/generateRandomColor'

export interface GradientBackgroundProps {
  opacity?: number

  className?: string
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className,
  opacity = 0.45,
}) => {
  const gradientColorVars = useMemo(
    () => {
      const colors = Array(4)
        .fill('')
        .map(() => generateRandomColor())

      return css`
        --left-top-corner: ${colors[0]};
        --right-top-corner: ${colors[1]};
        --right-bottom-corner: ${colors[2]};
        --left-bottom-corner: ${colors[3]};
      `
    },
    [],
  )

  return (
    <Background
      className={className}
      style={{ opacity }}
      css={gradientColorVars}>
      {children}
    </Background>
  )
}

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(45deg, var(--right-top-corner), var(--left-bottom-corner));

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    mask-image: linear-gradient(to bottom, transparent, black);
    background-image: linear-gradient(135deg, var(--right-bottom-corner), var(--left-top-corner));
  }
`
