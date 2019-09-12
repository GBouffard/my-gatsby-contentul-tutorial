const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulRelatedBlog {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      // Resolve the paths to our template
      const blogPostTemplate = path.resolve("./src/templates/blogpost.js")

      // Then for each result we create a page.
      result.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
          path: `/blogpost/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })

      const relatedBlogPageTemplate = path.resolve(
        "./src/templates/relatedBlogPage.js"
      )

      const relatedBlogModalTemplate = path.resolve(
        "./src/templates/relatedBlogModal.js"
      )

      result.data.allContentfulRelatedBlog.edges.forEach(({ node }) => {
        // create related blogs as pages
        createPage({
          path: `/relatedBlogpage/${node.slug}/`,
          component: slash(relatedBlogPageTemplate),
          context: {
            slug: node.slug,
            id: node.id,
          },
        })

        // create related blogs as modals
        createPage({
          path: `/relatedBlogmodal/${node.slug}/`,
          component: slash(relatedBlogModalTemplate),
          context: {
            slug: node.slug,
            id: node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
