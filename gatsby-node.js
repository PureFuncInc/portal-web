exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      articles: allFile(
        filter: {sourceInstanceName: {eq: "contents"}, relativeDirectory: {eq: "articles"}, extension: {glob: "md*"}}
      ) {
        nodes {
          name
          childMdx {
            slug
          }
        }
      }
    }
  `)

  data?.articles?.nodes?.forEach(node => {
    const name = node.name
    const slug = node.childMdx.slug

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/articles.tsx'),
      context: {
        name,
        slug,
      },
    })
  })
}
