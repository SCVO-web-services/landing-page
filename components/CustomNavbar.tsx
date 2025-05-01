// components/CustomNavbar.tsx
'use client';

import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ThemeToggle } from './ThemeToggle';

const CustomNavbar = () => {
  const { resolvedTheme } = useTheme(); // 'light' o 'dark'
  const logoSrc =
    resolvedTheme === 'dark' ? '/pictures/logo-dark.png' : '/pictures/logo.png';

  return (
    <Navbar position="static">
      <NavbarBrand>
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Logo SCVO"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>
      </NavbarBrand>
      {/* ... resto de tu navbar ... */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
