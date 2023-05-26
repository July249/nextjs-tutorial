import Link from 'next/link';

export default function About() {
  // To see the error boundary in action
  throw new Error('Error in About');
  return (
    <>
      <h1>About</h1>
      <Link href='/'>Link to Home</Link>
    </>
  );
}
