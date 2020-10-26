/**
 * Gatsby's Node APIs - used to dynamically create pages for each `Post` entry.
 *
 * To learn more, see https://www.gatsbyjs.com/docs/api-files-gatsby-node/
 * and/or https://www.gatsbyjs.com/docs/node-apis/
 */
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
      // To generate pages based on each sub `Post` entry using page.js
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
      // To generate pages based on each main `Post` entry using page.js
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
