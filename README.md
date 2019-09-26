:ribbon: Gatsby :heavy_plus_sign: Contentul :heavy_plus_sign: Netlify = :heart: :ribbon:

This is my first Gatsby + Contentul + Netlify tutorial built from scratch to understand the initial configuration of such a project.

I used these tutorials:

- [Gatsbyjs tutorials](https://www.gatsbyjs.org/tutorial/)
- [Content management with Gatsby, Netlify and Contentful](https://dev.to/thebabscraig/content-management-with-gatsby-netlify-and-contentful-3kbg)
- [Gatsby advanced blog tutorial](https://reactgo.com/gatsby-advanced-blog-tutorial)
- [Using Gatsby with css modules and scss](https://medium.com/@PostgradExpat/using-gatsby-with-css-modules-and-scss-7e75a05533a4)
- [Gatbsy mistakes](https://jenniferwadella.com/blog/all-the-dumb-mistakes-i-made-building-my-first-gatsby-site)

[Deploy preview](https://gbouffard-my-gatsby-contentul-tutorial.netlify.com/)

## How to run it locally:

```
git clone git@github.com:GBouffard/my-gatsby-contentul-tutorial.git
cd my-gatsby-contentul-tutorial
yarn
gatsby develop
```

nb: You need to add your own environment variables in .env for YOUR_SPACE_ID & YOUR_CONTENT_DELIVERY_API_KEY.

You can now navigate to `http://localhost:8000`

## How to log in onto the hard-coded system (Not using Auth0):

```
username: GB
password: password
```

## Using The GraphiQL playground:

the GraphiQL playground can be used at `http://localhost:8000/___graphql`

Example of query:

```
{
  allContentfulBlogPost {
    edges {
      node {
        id
    slug
        title
        tags
        image {
          file {
            url
          }
        }
      }
    }
  }
}
```

## Screenshots:

![](screenshots/contentful-screenshot1.png)

![](screenshots/contentful-screenshot2.png)
