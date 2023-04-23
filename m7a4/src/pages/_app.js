import '@/styles/globals.css'

/* export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
} */

import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">
          Home
        </Link>{' '}
        <Link href="/SignUp">
          Sign Up
        </Link>{' '}
        <Link href="/about">
          About
        </Link>{' '}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;