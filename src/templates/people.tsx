import { graphql } from 'gatsby'
import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { PersonQuery } from '@/generated/graphql-types'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { SocialNetworkDisplay } from '@/components/people/SocialNetworkDisplay'
import { RoundedGatsbyImage } from '@/components/common/RoundedImage'
import { ContactsDisplay } from '@/components/people/ContactsDisplay'
import { Label } from '@/components/common/Label'

export interface PeoplePageTemplateProps {
  data: PersonQuery
}

const PeoplePageTemplate: React.FC<PeoplePageTemplateProps> = ({
  data: {
    person,
    profilePicture,
  },
}) => {
  const name = `${person?.name?.mandarin} ${person?.name?.english}`
  const profilePictureImage = getImage(profilePicture?.childImageSharp?.gatsbyImageData)

  return (
    <SimpleLayout title={name}>
      <Container>
        <SideContainer>
          <BigName>
            {person?.name?.mandarin}
          </BigName>

          <Name>
            {person?.name?.english}
          </Name>

          {profilePictureImage && (
            <ProfilePicture
              alt="profile picture"
              image={profilePictureImage} />
          )}
        </SideContainer>

        <ContentContainer>
          <Headline>
            {person?.headline}
          </Headline>

          <Title>
            {person?.title}
          </Title>

          <Content>
            <ContentBlock>
              <ContentLabel>
                Story
              </ContentLabel>

              <Story>
                {person?.story}
              </Story>
            </ContentBlock>

            <ContentBlock>
              <ContentLabel>
                Expertise
              </ContentLabel>

              <ul>
                {person?.expertise?.map((item, i) => (
                  <li key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </ContentBlock>

            <ContentBlock>
              <ContentLabel>
                Achievements
              </ContentLabel>

              <ul>
                {person?.achievements?.map((item, i) => (
                  <li key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </ContentBlock>

            <ContentBlock>
              <ContentLabel>
                Contacts
              </ContentLabel>

              <ContactsDisplay contact={person?.contact} />
            </ContentBlock>

            <ContentBlock>
              <ContentLabel>
                Social Networks
              </ContentLabel>

              <SocialNetworkDisplay socialNetworks={person?.socialNetworks} />
            </ContentBlock>
          </Content>
        </ContentContainer>
      </Container>
    </SimpleLayout>
  )
}

export default PeoplePageTemplate

export const query = graphql`
  query Person($slug: String!) {
    person: peopleYaml(slug: {eq: $slug}) {
      name {
        english
        mandarin
      }
      contact {
        email
      }
      socialNetworks {
        github
        telegram
        facebook
        linkedin
        portal
      }
      achievements
      expertise
      headline
      id
      slug
      story
      title
    }
    profilePicture: file(
      sourceInstanceName: {eq: "images"}
      relativeDirectory: {eq: "people"}
      name: {eq: $slug}
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 250
          transformOptions: {cropFocus: CENTER}
          aspectRatio: 1
        )
      }
    }
  }
`

const FlexAsColumn = css`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
`

const SideContainer = styled.aside`
  ${FlexAsColumn};
  flex-grow: 0;
  flex-basis: 250px;
`

const ContentContainer = styled.div`
  ${FlexAsColumn};
  flex-grow: 1;
  margin-left: 25px;
`

const Name = styled.h2`
  font-size: 1.8em;
`

const BigName = styled(Name)`
  font-size: 4em;
`

const ProfilePicture = styled(RoundedGatsbyImage)`
  margin-top: 25px;
`

const Headline = styled.h3`
  margin-bottom: 5px;
  font-size: 1.35em;
`

const Title = styled.h4`
  color: #666;
`

const Content = styled.div`
  margin-top: 25px;
`

const ContentBlock = styled.div`
  display: flex;
  margin-bottom: 15px;

  & > * {
    flex: 1;
  }
`

const ContentLabel = styled(Label)`
  flex-grow: 0;
  flex-basis: 120px;
`

const Story = styled.p`
  max-width: 50vw;
  margin-bottom: 25px;
  line-height: 1.25;
`
