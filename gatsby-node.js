exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      articles: allFile(
        filter: {sourceInstanceName: {eq: "contents"}, relativeDirectory: {eq: "articles"}, extension: {glob: "md*"}}
      ) {
        nodes {
          name
          childMdx {
            frontmatter {
              slug
            }
          }
        }
      }
      people: allPeopleYaml {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (!data) {
    return
  }

  data.articles?.nodes?.forEach(node => {
    const name = node.name
    const slug = node.childMdx.frontmatter.slug

    actions.createPage({
      path: `/articles/${slug}`,
      component: require.resolve('./src/templates/article.tsx'),
      context: {
        name,
        slug,
      },
    })
  })

  data.people?.nodes?.forEach(node => {
    const slug = node.slug

    actions.createPage({
      path: `people/${slug}`,
      component: require.resolve('./src/templates/person.tsx'),
      context: {
        slug,
      },
    })
  })
}
