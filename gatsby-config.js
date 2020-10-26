require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsby-starter-photo-gallery.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Uses siteMetadata.siteUrl by default to generate sitemap
    `gatsby-plugin-sitemap`,
    // Uses siteMetadata.siteUrl by default to generate robots-txt.
    // robots.txt can be found in ./public after creating production build of the website via `gatsby build`.
    // Optionally, if deploying with netlify and you would like to disable crawlers for deploy-previews,
    // see https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/#netlify for additional configuration.
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Photo Gallery`,
        short_name: `Photo Gallery`,
        start_url: `/`,
        background_color: `#f4f4f4`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, //modify to change favicon
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/containers/Layout.js`),
      },
    },
    // this (optional) plugin, if using netlify to deploy, will add some basic security headers.
    // To learn more, visit: https://gatsbyjs.com/plugins/gatsby-plugin-netlify/
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        forceFullSync: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
