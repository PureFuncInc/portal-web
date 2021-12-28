/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv')
  .config({
    path: `.env.${process.env.NODE_ENV}`,
  })
const { plugin: addPlugin } = require('@graphql-codegen/add')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://purefunc.net',
    title: '$_purefunc',
    email: 'mailto:help@purefunc.net',
    image: '/placeholder.png',
    youtube: 'https://youtube.com/channel/UCiaBjaYilzLG5mmSqpP8fWg',
    facebook: 'https://facebook.com/groups/purefunc/',
    discord: 'https://discord.gg/efJaWUKkz3',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-fontawesome-css',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-extract-schema',
      options: {
        adjustSchema: async schema => {
          return '# @generated\n' + schema
        },
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        codegenConfig: {
          maybeValue: 'T | undefined',
        },
        codegenPlugins: [
          {
            resolve: addPlugin,
            options: {
              content: '/** @generated */',
            },
          },
        ],
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
          '@graphqlTypes': '../graphql-types.ts',
        },
      },
    },
  ],
}
