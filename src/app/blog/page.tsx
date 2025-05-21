// app/blog/page.tsx
import Link from 'next/link'
import { sanityClient } from '@/app/lib/sanity'
import { allPostsQuery } from '@/app/lib/queries'

export default async function BlogList() {
  const posts = await sanityClient.fetch(allPostsQuery)

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug.current} className="mb-4">
            <Link href={`/blog/${post.slug.current}`}>
              <span className="text-blue-600 hover:underline text-xl cursor-pointer">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
