:barber: Gatsby & Contentul & Netlify tutorial :barber:

My first Gatsby Contentul Netlify tutorial
Followed the following tutorial:
[Tutorial](https://dev.to/thebabscraig/content-management-with-gatsby-netlify-and-contentful-3kbg)

[Deploy preview](https://gbouffard-my-gatsby-contentul-tutorial.netlify.com/)

## How to run it:

A simple set up file:

```
git clone git@github.com:GBouffard/my-gatsby-contentul-tutorial.git
cd my-gatsby-contentul-tutorial
yarn
gatsby develop
```

You can now navigate to `http://localhost:8000`

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

![](public/icons/icon-48x48.png)
