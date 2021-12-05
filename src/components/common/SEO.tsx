import React from 'react'
import Helmet from 'react-helmet'

export interface SEOProps {
  title: string
}

export const SEO: React.FC<SEOProps> = ({ title }) => (
  <Helmet title={title} />
)
