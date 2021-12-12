import React from 'react'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  faFacebook,
  faGithub,
  faLine,
  faLinkedin,
  faTelegram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import { faCompass, faEnvelope } from '@fortawesome/free-solid-svg-icons'
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
    <List className={className}>
      {
        Object.entries(socialNetworks)
          .filter(([ name, url ]) => url && name in iconMap)
          .map(([ name, url ]) => (
            <ListItem key={name}>
              <Link to={url}>
                <Icon
                  fixedWidth
                  icon={iconMap[name]} />

                <ContentContainer>
                  <Label>
                    {name.toUpperCase()}
                  </Label>

                  <span>
                    {url}
                  </span>
                </ContentContainer>
              </Link>
            </ListItem>
          ))
      }
    </List>
  )
}

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  display: flex;
  padding: 6px 0;
`

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

const Label = styled.span`
  font-size: ${({ theme }) => theme.size.littler};
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  line-height: 48px;
`

const iconMap: Record<string, IconDefinition> = {
  portal: faCompass,
  email: faEnvelope,
  youtube: faYoutube,
  facebook: faFacebook,
  github: faGithub,
  line: faLine,
  twitter: faTwitter,
  linkedin: faLinkedin,
  telegram: faTelegram,
}
