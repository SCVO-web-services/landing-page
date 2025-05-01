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
import { ThemeToggle } from './ThemeToggle';

const CustomNavbar = () => {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <Link href="/">
          {/* Logo para light (se oculta en dark) */}
          <Image
            src="/pictures/logo.png"
            alt="Logo SCVO"
            width={60}
            height={60}
            className="block dark:hidden cursor-pointer"
          />
          {/* Logo para dark (se muestra sólo en dark) */}
          <Image
            src="/pictures/logo-dark.png"
            alt="Logo SCVO (oscuro)"
            width={60}
            height={60}
            className="hidden dark:block cursor-pointer"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem isActive>
          <Link href="/" className="navbar-link">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/memorial">Memorial</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/courses">Cursos</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/organigrama">Organigrama</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle /> {/* <-- Aquí va el toggle */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
