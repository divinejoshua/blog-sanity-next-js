export const blogPostQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    slug
  }
`


export const allPostsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
    slug,
    mainImage {
      asset-> {
        _id,
        url
      }
    }
  }
`
