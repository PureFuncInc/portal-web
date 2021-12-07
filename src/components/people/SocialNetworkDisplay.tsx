import React from 'react'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  faFacebook,
  faGithub,
  faLine,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'

export interface SocialNetworkDisplayProps {
  socialNetworks?: Record<string, string>
}

export const SocialNetworkDisplay: React.FC<SocialNetworkDisplayProps> = ({
  socialNetworks = {},
}) => {
  return (
    <>
      {
        Object.entries(socialNetworks)
          .filter(([ , url ]) => url)
          .map(([ name, url ]) => (
            <Link
              key={name}
              target='_blank'
              href={url}
              rel="noreferrer">
              <Icon icon={iconMap[name]} />
            </Link>
          ))
      }
    </>
  )
}

const Link = styled.a(({ theme }) => `
  &, &:visited, &:active {
    color: ${theme.color.text};
  }
`)

const Icon = styled(FontAwesomeIcon)`
  font-size: 60px;
`

const iconMap: Record<string, IconDefinition> = {
  facebook: faFacebook,
  github: faGithub,
  line: faLine,
  linkedin: faLinkedin,
  telegram: faTelegram,
}
