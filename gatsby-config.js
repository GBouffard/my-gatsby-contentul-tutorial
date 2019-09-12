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
        name: `Gatsby Guillaume Contentul tutorial`,
        short_name: `Gatsby Tutorial`,
        start_url: `/`,
        background_color: `#336699`,
        theme_color: `red`,
        display: `minimal-ui`,
        icon: `src/images/french-fries.svg`,
        // icons: [          // in case we want different icons
        //   {
        //     src: `/favicons/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/favicons/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ]
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: YOUR_SPACE_ID,
        accessToken: YOUR_CONTENT_DELIVERY_API_KEY,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
