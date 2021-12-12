import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import type { ContactQuery } from '../../graphql-types'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { PageTitle } from '@/components/common/PageTitle'
import { SocialNetworkDisplay } from '@/components/people/SocialNetworkDisplay'

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

const SectionLabel = styled.div`
  flex: 0 0 5vw;
  padding: 15px;
  margin-right: 15px;
  background-color: #FFF;
`
