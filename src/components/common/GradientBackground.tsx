import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { generateRandomColor } from '@/utilities/generateColor'

export interface GradientBackgroundProps {
  opacity?: number

  className?: string
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className,
  opacity = 0.4,
}) => {
  const currentHour = new Date()
    .getHours()

  const gradientColorVars = useMemo(
    () => {
      const colors = Array(4)
        .fill('')
        .map(() => generateRandomColor(opacity))

      const degreeByHour = (180 * (currentHour / 24)) - 90

      return css`
        --sundial-degree: ${degreeByHour}deg;
        --left-top-corner: ${colors[0]};
        --right-top-corner: ${colors[1]};
        --right-bottom-corner: ${colors[2]};
        --left-bottom-corner: ${colors[3]};
      `
    },
    [ currentHour, opacity ],
  )

  return (
    <Background
      className={className}
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
  background-image: linear-gradient(45deg, var(--right-top-corner), var(--left-bottom-corner)),
                    linear-gradient(135deg, var(--right-bottom-corner), var(--left-top-corner)),
                    linear-gradient(var(--sundial-degree), rgba(255, 255, 255, 0.6), transparent);
`
