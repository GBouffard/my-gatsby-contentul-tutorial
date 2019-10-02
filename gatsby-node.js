const path = require(`path`)
const slash = require(`slash`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the  allContentful prefix for all queries coming from Contentful

  // allMarkdownRemark also includes the blog posts from Contentful so we filter by type: "markdown" which I added in my .md files
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
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "markdown" } } }
        ) {
          edges {
            node {
              frontmatter {
                path
              }
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

      // Resolve the paths to our template for Contentful blog post
      const blogPostTemplate = path.resolve("./src/templates/blogpost.js")

      // Then for each result we create a page. Using lodash in that case / not in the example below
      _.each(result.data.allContentfulBlogPost.edges, edge => {
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

      // create markdown pages with custom path depending on path key from the .md files
      const markdownPostTemplate = path.resolve(
        `src/templates/markdown-page.js`
      )

      const allMarkdowns = result.data.allMarkdownRemark.edges
      allMarkdowns.forEach(({ node }, index) => {
        createPage({
          path: node.frontmatter.path,
          component: markdownPostTemplate,
          context: {
            prev: index === 0 ? null : allMarkdowns[index - 1],
            next:
              index === allMarkdowns.length - 1
                ? null
                : allMarkdowns[index + 1],
          }, // Anything we passed inside the context object can be available as a props.pageContext.
        })
      })

      createPage({
        path: "/cart",
        component: path.resolve(`src/components/Cart.js`),
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
