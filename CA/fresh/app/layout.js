import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/list'>List</Link>
            </li>
            <li>
              <Link href='/cart'>Cart</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
