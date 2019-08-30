require("dotenv").config()

const { YOUR_SPACE_ID, YOUR_CONTENT_DELIVERY_API_KEY } = process.env

module.exports = {
  siteMetadata: {
    title: `My Gatsby Contentul tutorial`,
    description: `An awesome blog displaying my awesome posts.`,
    author: `Guillaume Bouffard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: YOUR_SPACE_ID,
        accessToken: YOUR_CONTENT_DELIVERY_API_KEY,
      },
    },
  ],
}
