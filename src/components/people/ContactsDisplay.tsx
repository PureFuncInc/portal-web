import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import { Link } from '@/components/common/Link'

export interface ContactsDisplayProps {
  contact?: Record<string, string>
}

export const ContactsDisplay: React.FC<ContactsDisplayProps> = ({
  contact = {},
}) => {
  return (
    <DescriptionList>
      {contact.email && (
        <>
          <dt>
            <FontAwesomeIcon icon={faEnvelope} />
          </dt>
          <dd>
            <Link to={`mailto:${contact.email}`}>
              {contact.email}
            </Link>
          </dd>
        </>
      )}
    </DescriptionList>
  )
}

const DescriptionList = styled.dl`
  display: flex;
  flex-wrap: wrap;

  & > dt {
    flex-grow: 0;
    flex-basis: 25px;
  }
  & > dd {
    flex-grow: 1;
  }
`
