import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '../styles/styles.css';

/**
 * Componente principal de la aplicación.
 * @param {AppProps} props - Los props de la aplicación.
 * @returns {JSX.Element} El componente de la aplicación renderizado.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default MyApp;