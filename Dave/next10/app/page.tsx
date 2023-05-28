import Posts from './components/Posts';

export const revalidate = 10; // 86400 seconds = 24 hours

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and Welcome 👋&nbsp;
        <br />
        <span className='whitespace-nowrap'>
          I am <span className='font-bold'>Jibro</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
