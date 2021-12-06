import {graphql} from 'gatsby';
import React from 'react';
import {SimpleLayout} from '@/components/layouts/SimpleLayout';
import {PersonQuery} from '../../graphql-types';

export interface PeoplePageTemplateProps {
    data: PersonQuery
}

const PeoplePageTemplate: React.FC<PeoplePageTemplateProps> = ({
  data
}) => {
  return (
    <SimpleLayout title={data.person?.title ?? ''} />
  )
}

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
      expertise
      headline
      id
      slug
      story
      title
    }
  }
`
