# 🏙 Gatsby Starter Photo Gallery

A simple responsive photo gallery starter using Gatsby and Contentful.

Here is the live **[demo](https://gatsby-starter-photo-gallery.netlify.app)**.

## 🚀 Getting Started

1. Fork and `npm install`.

2. Create a `.env.development` and `.env.production` file in your root directory and add in the following:

   ```
   CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
   CONTENTFUL_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
   ```

Note: Space ID and access token can be found under in your [Contentful account](https://be.contentful.com/login) under `Settings -> API Keys`.

3. `gatsby develop` to run site locally at `http://localhost:8000`.

4. `gatsby build` to run a production build into ./public.

5. `gatsby serve` to serve the production build of your site for testing at `http://localhost:9000`.

## 🔧 Contentful Configuration

1. Create two Content Models

   Content Model: Website
   ![Content Model Website](https://github.com/esthleej/gatsby-starter-photo-gallery/blob/master/src/images/contentful-content-model/website.png)

   - The `Title` and `Description` is used for React Helmet to dynamically set up page title and SEO.
   - `Instagram` and `Email` is added for social media and contact info - more can be added or removed as needed.

   Content Model: Post
   ![Content Model Post](https://github.com/esthleej/gatsby-starter-photo-gallery/blob/master/src/images/contentful-content-model/post.png)
   Currently, photos can be organized two levels deep.

   - `Main` determines whether or not your `Post` entry is a main or subcategory. If your entry is a subcategory, you will add it under `Sub` in your main `Post` entry.
   - `Order` determines the order of the `Post` entries on your navbar.

2. Go to `Content` on the menu in Contentful to create your `Website` entry and `Post` entries.

3. And you're all set!

## 📝 Note:

- Image loading: Gatsby offers lazy-loading React image components through the plugin `gatsby-image`. The default blur-up effect has been removed (i.e., GatsbyContentfulFluid -> GatsbyContentfulFluid_noBase64). Add back or use other effects if desired.
  To learn more about Gatsby Image, check out the following resources:
  - [Gatsby Image](https://www.gatsbyjs.com/plugins/gatsby-image)
  - [Examples](https://using-gatsby-image.gatsbyjs.org)

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import)

Remember to add in environment varaibles when deploying (e.g., in Netlify -> Domain settings -> Build & deploy -> Environment).
