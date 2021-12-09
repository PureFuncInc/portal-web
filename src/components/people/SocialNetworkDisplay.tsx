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
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@/components/common/Link'

export interface SocialNetworkDisplayProps {
  socialNetworks?: Record<string, string>
  className?: string
}

export const SocialNetworkDisplay: React.FC<SocialNetworkDisplayProps> = ({
  socialNetworks = {},
  className,
}) => {
  return (
    <Container className={className}>
      {
        Object.entries(socialNetworks)
          .filter(([ , url ]) => url)
          .map(([ name, url ]) => (
            <Link
              key={name}
              target='_blank'
              to={url}
              rel="noreferrer">
              <Icon icon={iconMap[name]} />
            </Link>
          ))
      }
    </Container>
  )
}

const Container = styled.div()

const Icon = styled(FontAwesomeIcon)`
  font-size: 48px;
`

const iconMap: Record<string, IconDefinition> = {
  portal: faCompass,
  facebook: faFacebook,
  github: faGithub,
  line: faLine,
  linkedin: faLinkedin,
  telegram: faTelegram,
}
