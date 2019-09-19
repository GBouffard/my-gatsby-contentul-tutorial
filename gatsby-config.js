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
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // multiple instances of this plugin can be used
      options: {
        path: `${__dirname}/src/my-markdowns`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
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
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          style: {
            content: {
              position: "absolute",
              top: "40px",
              left: "40px",
              right: "40px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#FFFAF0",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          },
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
  ],
}
