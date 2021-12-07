import { graphql } from 'gatsby'
import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { PersonQuery } from '../../graphql-types'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { SocialNetworkDisplay } from '@/components/people/SocialNetworkDisplay'
import { RoundedGatsbyImage } from '@/components/common/RoundedImage'

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
            <Label>
              Story
            </Label>

            <Story>
              {person?.story}
            </Story>

            <Label>
              Contacts
            </Label>

            <Label>
              Social Networks
            </Label>

            <SocialNetworkDisplay socialNetworks={person?.socialNetworks} />
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
        phone
      }
      socialNetworks {
        github
        line
        telegram
        facebook
      }
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
  font-size: 2.2em;
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

const Label = styled.div`
  display: inline-block;
  border-bottom: dotted 2px #ccc;
  color: #666;
`

const Story = styled.p`
  max-width: 50vw;
  margin-bottom: 25px;
  line-height: 1.25;
`
