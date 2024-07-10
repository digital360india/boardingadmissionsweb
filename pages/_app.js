
import { Poppins, Jost, Barlow, Space_Grotesk } from '@next/font/google';
import '../app/globals.css'

const poppins = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
});

const jost = Jost({
  weight: '600',
  subsets: ['latin'],
});

const barlow = Barlow({
  weight: ['400'],
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
