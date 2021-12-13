import React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '@/utilities/hooks/useSiteMetadata'

export interface SEOProps {
  title: string
  pathname?: string
  description?: string
  image?: string
}

export const SEO: React.FC<SEOProps> = ({
  title,
  pathname,
  description,
  image,
}) => {
  const siteMetadata = useSiteMetadata()
  const theSiteUrl = (pathname && siteMetadata?.siteUrl) ? `${siteMetadata.siteUrl}${pathname}` : ''
  const theTitle = title ? `${title} : PureFunc` : 'PureFunc'
  const theDescription = description ?? siteMetadata?.defaultDescription
  const theImage = image ?? `${siteMetadata?.siteUrl}${siteMetadata?.defaultImage}`

  return (
    <>
      <Helmet title={theTitle}>
        <meta
          property="og:type"
          content="website" />
        <meta
          name="title"
          content={theTitle} />
        <meta
          property="og:title"
          content={theTitle} />
        <meta
          property="twitter:title"
          content={theTitle} />
        <meta
          property="twitter:card"
          content="summary" />
      </Helmet>

      {theSiteUrl && (
        <Helmet>
          <meta
            property="og:url"
            content={theSiteUrl} />
          <meta
            property="twitter:url"
            content={theSiteUrl} />
        </Helmet>
      )}

      {theDescription && (
        <Helmet>
          <meta
            name="description"
            content={theDescription} />
          <meta
            property="og:description"
            content={theDescription} />
          <meta
            property="twitter:description"
            content={theDescription} />
        </Helmet>
      )}

      {theImage && (
        <Helmet>
          <meta
            property="og:image"
            content={theImage} />
          <meta
            property="twitter:image"
            content={theImage} />
          <meta
            property="twitter:card"
            content="summary_large_image" />
        </Helmet>
      )}
    </>
  )
}
