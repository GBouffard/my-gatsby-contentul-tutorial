import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToHomepage from "../components/backToHomepage"

const linkStyle = {
  marginLeft: "20px",
}

const BlogPosts = ({ data }) => {
  const allPosts = data.allContentfulBlogPost.edges // all the blog posts
  const orderedPosts = data.allContentfulBlogPostsList.edges // Contentful order. Some post may be missing

  // the following logic re-map all posts according to the order defined in Contentful
  const orderArrayById = { orderedPosts }.orderedPosts[0].node.post.map(
    ({ id }) => id
  )

  const mapFromOrder = orderArrayById.map(orderedId =>
    allPosts.find(({ node }) => node.id === orderedId)
  )

  // If some posts from all the posts are missing from the order defined in Contentful they are retrieved
  const missingFromOrder = allPosts.filter(
    ({ node }) => !orderArrayById.includes(node.id)
  )

  // and concatenated to mapFromOrder
  const allOrderedPosts = [...mapFromOrder, ...missingFromOrder]

  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all blogposts!"}</h1>
      <div className="blogposts">
        {allOrderedPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link style={linkStyle} to={`/blogpost/${post.slug}`}>
              {post.title}
            </Link>
          </div>
        ))}
        <BackToHomepage />
      </div>
    </Layout>
  )
}

export default BlogPosts

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            file {
              url
            }
          }
          tags
        }
      }
    }
    allContentfulBlogPostsList {
      edges {
        node {
          id
          post {
            id
          }
        }
      }
    }
  }
`
