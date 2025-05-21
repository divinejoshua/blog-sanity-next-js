// app/blog/[slug]/page.tsx
import { sanityClient } from '@/app/lib/sanity'
import { blogPostQuery } from '@/app/lib/queries'
import PortableTextRenderer from '@/app/components/PortableTextRenderer'

type Props = {
  params: { slug: string }
}

export default async function BlogPost({ params }: Props) {
  const post = await sanityClient.fetch(blogPostQuery, { slug: params.slug })

  if (!post) return <div>Post not found</div>

  return (
    <article className="prose max-w-2xl mx-auto p-6">
      <h1>{post.title}</h1>
      <PortableTextRenderer value={post.body} />
    </article>
  )
}
