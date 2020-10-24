# 🏙 Gatsby Starter Photo Gallery

A simple photo gallery starter using Gatsby and Contentful.

Here is the live **[demo](https://gatsby-starter-photo-gallery.netlify.app/)**.

### 🚀 Getting Started

1. Fork and `npm install`.

2. Create a `.env` file in your root directory:

   ```
   CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
   CONTENTFUL_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
   ```

3. `gatsby develop` to run site locally at `http://localhost:8000`.

### 🔧 Contentful Configuration

1. Create two Contentful Models

   Contentful Model: Website
   ![Content Model Website](https://github.com/esthleej/gatsby-starter-photo-gallery/tree/master/src/images/contenful-content-model/website.png)

   - The `title` and `description` is used for React Helmet to dynamically set up page title and SEO.
   - `Instagram` and `Email` is added for social media and contact info - more can be added or removed as needed.

   Contentful Model: Post
   ![Content Model Post](https://github.com/esthleej/gatsby-starter-photo-gallery/tree/master/src/images/contenful-content-model/post.png)
   Currently, photos can be organized two levels deep.

   - `Main` determines whether or not your photo group is a main or sub category. If photo group is a sub category, you will add your entry under `Sub` when creating a main category `Post` entry.
   - `Order` determines the order of the `Post` entries on your navbar.

2. Go to `Content` on the menu in Contentful to create your `Website` entry and `Post` entries.

3. And you're all set!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import)
