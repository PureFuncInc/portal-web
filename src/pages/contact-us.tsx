import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import type { ContactQuery } from '@/generated/graphql-types'
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
        twitter
      }
    }
  }
`

const Section = styled.section`
  display: flex;
  align-items: flex-start;
`

const SectionLabel = styled(Label)`
  flex: 0 0 5vw;
`
