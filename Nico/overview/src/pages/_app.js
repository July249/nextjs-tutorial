// app component
import NavBar from '@/components/NavBar';
// _app.js can allow import css file
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
