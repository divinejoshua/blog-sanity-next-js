export const blogPostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    slug
  }
`

export const allPostsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
    slug
  }
`