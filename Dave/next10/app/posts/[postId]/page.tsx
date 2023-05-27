import getFormattedDate from '@/lib/getFormattedDate';
import { getSortedContentsData } from '@/lib/posts';
import { getContentData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// This function gets called at build time
// And it makes SSR(Server-side Rendering) to SSG(Static Site Generation)
export function generateStaticParams() {
  const contents = getSortedContentsData();

  return contents.map((content) => {
    return {
      params: {
        postId: content.id,
      },
    };
  });
}

export async function generateMetadata({ params }: { params: { postId: string } }) {
  const contents = getSortedContentsData(); // deduped!
  const { postId } = params;

  const post = contents.find((content) => content.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const contents = getSortedContentsData();

  const { postId } = params;

  if (!contents.find((content) => content.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getContentData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      <h1 className='text-3xl mt-12 mb-0'>{title}</h1>
      <p className='mt-0'>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
        <p>
          <Link href='/'>Back to home</Link>
        </p>
      </article>
    </main>
  );
}
