// app/blog/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient } from '@/app/lib/sanity'
import { allPostsQuery } from '@/app/lib/queries'
import { urlFor } from '@/app/lib/sanityImage'

export default async function Home() {
  const posts = await sanityClient.fetch(allPostsQuery)

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-8">
        {posts.map((post: any) => {
          const imageUrl = post.mainImage ? urlFor(post.mainImage).width(800).height(400).url() : null

          return (
            <li key={post.slug.current} className="border-b pb-6">
              <Link href={`/blog/${post.slug.current}`}>
                <div className="cursor-pointer group">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="rounded mb-4 transition-transform group-hover:scale-105"
                    />
                  )}
                  <h2 className="text-xl font-semibold text-blue-600 group-hover:underline">
                    {post.title}
                  </h2>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
