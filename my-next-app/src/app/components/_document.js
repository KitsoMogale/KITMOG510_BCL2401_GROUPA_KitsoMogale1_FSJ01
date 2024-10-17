import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="NextBuy" />
        <meta name="description" content="A Progressive Web App built with Next.js 14" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}