import React from 'react'
import { graphql } from 'gatsby'
import { styled } from '@/utilities/stitches'
import type { ContactQuery } from '@graphqlTypes'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { PageTitle } from '@/components/common/PageTitle'
import { SocialNetworkDisplay } from '@/components/people/SocialNetworkDisplay'
import { Label } from '@/components/common/Label'

export interface ContactUsPageProps {
  data: ContactQuery
}

const ContactUsPage: React.FC<ContactUsPageProps> = ({
  data,
}) => {
  return (
    <SimpleLayout title='Contact'>

      <PageTitle>
        聯絡我們
      </PageTitle>

      <Section>
        <SectionLabel>
          Links
        </SectionLabel>

        <SocialNetworkDisplay socialNetworks={data.site?.siteMetadata} />
      </Section>

    </SimpleLayout>
  )
}

export default ContactUsPage

export const query = graphql`
  query Contact {
    site {
      siteMetadata {
        email
        youtube
        facebook
        discord
      }
    }
  }
`

const Section = styled(
  'section',
  {
    display: 'flex',
    alignItems: 'flex-start',
  },
)

const SectionLabel = styled(
  Label,
  {
    flex: '0 0 5vw',
  },
)
