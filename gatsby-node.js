const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulPost(filter: { main: { eq: true } }) {
        edges {
          node {
            main
            id
            slug
            photos {
              id
            }
            sub {
              id
              slug
              photos {
                id
              }
            }
          }
        }
      }
    }
  `);

  result.data.allContentfulPost.edges.forEach(({ node }) => {
    if (node.sub) {
      // generates page for each sub-categories using page.js
      node.sub.forEach(({ title, slug, id }, index) => {
        createPage({
          path: `/${node.slug}/${slug}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            mainSlug: `${node.slug}`,
            slug,
            id,
          },
        });
      });
    } else {
      // generates page for each main-categories using page.js
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: node.slug,
          id: node.id,
        },
      });
    }
  });
};
