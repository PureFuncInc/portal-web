import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@/utilities/stitches'
import { Link } from '@/components/common/Link'
import { socialNetworkIconMap } from '@/components/people/SocialNetworkIconMap'
import type { PropsWithClassname } from '@/utilities/PropsWithClassname'

export interface SocialNetworkDisplayProps {
  socialNetworks?: Record<string, string> | undefined
}

export const SocialNetworkDisplay: React.FC<PropsWithClassname<SocialNetworkDisplayProps>> = ({
  socialNetworks = {},
  className,
}) => {
  return (
    <List className={className}>
      {
        Object.entries(socialNetworks)
          .filter(([ name, url ]) => url && name in socialNetworkIconMap)
          .map(([ name, url ]) => (
            <ListItem key={name}>
              <Link to={url}>
                <Icon
                  fixedWidth
                  icon={socialNetworkIconMap[name]} />

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

const List = styled(
  'ul',
  {
    listStyle: 'none',
  },
)

const ListItem = styled(
  'li',
  {
    display: 'flex',
    padding: '6px 0',
  },
)

const ContentContainer = styled(
  'div',
  {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 12,
  },
)

const Label = styled(
  'span',
  {
    fontSize: '$littler',
  },
)

const Icon = styled(
  FontAwesomeIcon,
  {
    fontSize: 24,
    lineHeight: '48px',
  },
)
