import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import NextLink from 'next/link';

/**
 * Componente de barra de navegación personalizada.
 * @returns {JSX.Element} El componente de barra de navegación renderizado.
 */
const CustomNavbar = () => {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">SCVO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify={'center'}>
        <NavbarItem isActive>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NextLink href="/memorial" passHref>
            <Link>Memorial</Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NextLink href="/courses" passHref>
            <Link>Cursos</Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NextLink href="/organigrama" passHref>
            <Link>Organigrama</Link>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <NextLink href="/login" passHref>
            <Link>Login</Link>
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/signin" passHref>
            <Button as={Link} color="primary" variant="flat">
              Sign Up
            </Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;