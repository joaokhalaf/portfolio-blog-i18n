import { Link } from '@/i18n/navigation';
import { ArrowLeft } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  content: React.ReactNode
}

const posts: Record<string, Record<string, BlogPost>> = {
  'en': {
    'hello': {
      id: "001",
      slug: "hello",
      title: "..",
      date: "05-19-2025",
      content: (
        <>
          <p>put text here</p>
        </>
      )
    },
  },
 'pt': {
    'hello': {
      id: "001",
      slug: "hello",
      title: "..",
      date: "05-19-2025",
      content: (
        <>
          <p>Escreve seu texto</p>
        </>
      )
    },
  },
}

interface BlogPostProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps ) {
  const { slug, locale } = await params;
  const t = await getTranslations('WritingPage');

  const localePosts = posts[locale] || posts['en'];
  const post = localePosts[slug];

  if (!post) {
    return <div>{locale === 'pt' ? 'Artigo não encontrado' : 'Post not found'}</div>
  }

  return (
    <main className="max-w-2xl mx-auto">
      <div className="mb-12">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm hover:text-gray-600"
        >
          <ArrowLeft size={16} />
          {t('back')}
        </Link>
      </div>

      <article className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-normal">{post.title}</h1>
          <div className="text-gray-500 font-mono text-sm">{post.date}</div>
        </div>

        <div className="prose prose-gray max-w-none">
          {post.content}
        </div>
      </article>
    </main>
  )
}

