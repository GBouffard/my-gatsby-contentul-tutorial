import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToHomepage from "../components/backToHomepage"

// should have been in Contentful but using object for now.
const BlogPostContentful = {
  relatedBlogPage: "Link to related Blog as a page: ",
  relatedBlogMedal: "Open the above as a modal instead",
  more: "View all posts",
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
        {BlogPostContentful.relatedBlogPage}
        <Link
          to={`/relatedBlogpage/${relatedTo.slug}`}
        >{`${relatedTo.title}`}</Link>
        <hr />

        {BlogPostContentful.relatedBlogMedal}
        <Link
          to={`/relatedBlogmodal/${relatedTo.slug}`}
          state={{
            modal: true,
          }}
        >{`${relatedTo.title}`}</Link>
        <hr />

        <Link to="/blogposts">{BlogPostContentful.more}</Link>
        <BackToHomepage />
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
