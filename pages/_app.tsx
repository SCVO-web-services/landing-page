// pages/_app.tsx
'use client'; // Next.js 13+ con app/ usa esto en tu layout, pero en pages/ no haría falta

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      attribute="class" // inyecta `class="light"` o `class="dark"` en <html>
      defaultTheme="system" // puedes usar "light" | "dark" | "system"
      enableSystem={true} // respeta prefers-color-scheme
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
