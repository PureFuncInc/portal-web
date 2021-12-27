import { graphql, useStaticQuery } from 'gatsby'
import type { SiteMetadataQuery } from '@graphqlTypes'

export function useSiteMetadata(): NonNullable<SiteMetadataQuery['site']>['siteMetadata'] {
  const query = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            siteUrl
            defaultDescription: description
            defaultImage: image
          }
        }
      }
    `,
  )

  return query.site?.siteMetadata
}
