import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

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
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/memorial">Memorial</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/courses">Cursos</Link> {/* Enlace actualizado */}
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/organigrama">Organigrama</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signin" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;