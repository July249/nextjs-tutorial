import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & open-source text similarity API',
};

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <main className='bg-red-500'></main>;
}
