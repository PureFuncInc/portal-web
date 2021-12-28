import { graphql } from 'gatsby'
import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { css, styled } from '@/utilities/stitches'
import type { PersonQuery } from '@graphqlTypes'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { SocialNetworkDisplay } from '@/components/people/SocialNetworkDisplay'
import { GatsbyImage } from '@/components/common/Image'
import { Label } from '@/components/common/Label'

export interface PersonPageTemplateProps {
  data: PersonQuery
}

const PersonPageTemplate: React.FC<PersonPageTemplateProps> = ({
  data: {
    person,
  },
}) => {
  const name = `${person?.name?.mandarin} ${person?.name?.english}`
  const profilePictureImage = getImage(person?.profilePicture?.childImageSharp?.gatsbyImageData)

  return (
    <SimpleLayout title={name}>
      <Container>
        <SideContainer>
          <Name size='big'>
            {person?.name?.mandarin}
          </Name>

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

export default PersonPageTemplate

export const query = graphql`
  query Person($slug: String!) {
    person: peopleYaml(slug: {eq: $slug}) {
      name {
        english
        mandarin
      }
      profilePicture: image {
        id
        childImageSharp {
          gatsbyImageData(
            width: 250
            transformOptions: {cropFocus: CENTER}
            aspectRatio: 1
          )
        }
      }
      socialNetworks {
        email
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
  }
`

const FlexAsColumn = css({
  display: 'flex',
  flexDirection: 'column',
})

const Container = styled(
  'div',
  {
    display: 'flex',
  },
)

const SideContainer = styled(
  'aside',
  {
    ...FlexAsColumn,
    flexGrow: 0,
    flexBasis: 250,
  },
)

const ContentContainer = styled(
  'div',
  {
    ...FlexAsColumn,
    flexGrow: 1,
    marginLeft: 25,
  },
)

const Name = styled(
  'h2',
  {
    fontSize: '1.8em',
    color: '$text',
    variants: {
      size: {
        big: {
          fontSize: '4em',
        },
      },
    },
  },
)

const ProfilePicture = styled(
  GatsbyImage,
  {
    marginTop: 25,
  },
)

const Headline = styled(
  'h3',
  {
    color: '$text',
    marginBottom: 5,
    fontSize: '1.35em',
  },
)

const Title = styled(
  'h4',
  {
    color: '#666',
  },
)

const Content = styled(
  'div',
  {
    marginTop: 25,
  },
)

const ContentBlock = styled(
  'div',
  {
    display: 'flex',
    marginBottom: 15,

    '& > *': {
      flex: 1,
    },
  },
)

const ContentLabel = styled(
  Label,
  {
    flexGrow: 0,
    flexBasis: 120,
  },
)

const Story = styled(
  'p',
  {
    maxWidth: '50vw',
    marginBottom: 25,
    lineHeight: 1.25,
  },
)
