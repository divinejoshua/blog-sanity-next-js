import { sanityClient } from '@/app/lib/sanity'
import { blogPostQuery } from '@/app/lib/queries'
import PortableTextRenderer from '@/app/components/PortableTextRenderer'
import { urlFor } from '@/app/lib/sanityImage'
import Image from 'next/image'

type Props = {
  params: { slug: string }
}

export default async function BlogPost({ params }: Props) {
  const post = await sanityClient.fetch(blogPostQuery, { slug: params.slug })

  if (!post) return <div>Post not found</div>

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : null

  return (
    <article className="prose max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      {imageUrl && (
        <Image
          className="mb-4 rounded-md"
          src={imageUrl}
          alt={post.title}
          width={1200}
          height={630}
        />
      )}
      <PortableTextRenderer value={post.body} />
    </article>
  )
}
