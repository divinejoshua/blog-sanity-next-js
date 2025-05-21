// components/PortableTextRenderer.tsx
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

const components: PortableTextComponents = {
  types: {
    // Handle custom types if you have them (e.g., images, code blocks)
    code: ({ value }) => (
      <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <Link href={value.href} passHref>
        <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Link>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-6 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mt-5 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium mt-4 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
  },
}

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
