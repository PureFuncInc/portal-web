/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv')
  .config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
  siteMetadata: {
    siteUrl: 'https://purefunc.net',
    title: '$_purefunc',
    email: 'mailto:hi@purefunc.net',
    image: '/placeholder.png',
    youtube: 'https://www.youtube.com/channel/UCiaBjaYilzLG5mmSqpP8fWg',
    facebook: 'https://www.facebook.com/groups/purefunc/',
    twitter: 'https://www.twitter.com/purefunc/',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-fontawesome-css',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'src/generated/graphql-types.ts',
        codegenConfig: {
          maybeValue: 'T | undefined',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: './src/contents/',
      },
      __key: 'contents',
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
        remarkPlugins: [
          require('remark-breaks'),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [ 'Noto Sans TC', 'Noto Sans', 'Noto Serif' ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@': './',
        },
      },
    },
  ],
}
