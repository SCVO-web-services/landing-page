import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Documento personalizado para la aplicación Next.js.
 * @returns {JSX.Element} El documento renderizado.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-background font-sans antialiased">
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}