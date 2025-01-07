import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import Chart from '../components/Chart';

/**
 * El componente de la página principal de la página del organigrama.
 * @returns {JSX.Element} El componente renderizado.
 */
export default function OrganigramaPage() {
  return (
    <>
      <div className="container mx-auto">
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
              <Link href="#">Cursos</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/organigrama">Organigrama</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <Chart />
      </div>
    </>
  );
}
