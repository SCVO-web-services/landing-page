import { Html, Head, Main, NextScript } from 'next/document';

/* code_origin_url = https://github.com/nextui-org/next-pages-template/blob/main/pages/_document.tsx
 * code_origin_url_2 = https://github.com/nextui-org/nextui/issues/849#issuecomment-1692375269
 *
 * */

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
