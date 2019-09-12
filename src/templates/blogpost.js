import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// should have been in Contentful but using object for now.
const BlogPostContentful = {
  relatedBlog: "Related to : ",
  more: "View all posts",
  homepageLink: "Back to Home Page",
}

const BlogPost = ({ data }) => {
  const { title, body, image, tags, relatedTo } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO
        title={title}
        description={`My fake Blog description that will appear in Meta - ${title}`}
      />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />

        <div className="tags">
          {tags &&
            tags.length &&
            tags.map(tag => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
        </div>

        <p className="body-text">{body.body}</p>
        {BlogPostContentful.relatedBlog}
        <Link
          to={`/relatedBlogpost/${relatedTo.slug}`}
        >{`${relatedTo.title}`}</Link>
        <hr />

        <Link to="/blogposts">{BlogPostContentful.more}</Link>
        <Link to="/">{BlogPostContentful.homepageLink}</Link>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
      relatedTo {
        slug
        title
        image {
          file {
            url
          }
        }
      }
    }
  }
`
