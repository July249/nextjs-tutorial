import Image from 'next/image';
import { Inter } from 'next/font/google';
import Paragraph from '@/components/ui/Paragraph';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='bg-red-500'>
      <Navbar />
    </main>
  );
}
