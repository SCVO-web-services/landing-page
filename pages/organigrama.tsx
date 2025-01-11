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
        <div className="bg-white p-40"> {/* Increased padding */}
          <h2 className="text-left text-6xl font-bold mb-4 text-black">Nuestra Visión</h2>
          <p className="text-justify text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non fringilla enim. Quisque semper leo non mollis pellentesque. Aliquam neque nisl, sollicitudin sit amet rhoncus quis, malesuada pretium eros. Suspendisse laoreet pretium enim vitae commodo. Nam eleifend, lectus ac condimentum auctor, risus eros condimentum est, in facilisis dui libero non enim. Morbi tristique elit eu augue cursus, vel tristique orci condimentum. Duis nec iaculis quam, at interdum odio. Suspendisse egestas rhoncus egestas. Morbi dignissim mauris ac laoreet tempus. Curabitur faucibus, augue ut imperdiet rutrum, nisl est aliquet tortor, et venenatis purus ante ac turpis. Aliquam varius lobortis justo, non venenatis nulla scelerisque sed. In in lorem maximus, tempor nisl vitae, rutrum ipsum. Nulla facilisi. Quisque condimentum ante turpis, sed pretium justo tincidunt quis. Praesent egestas dictum ipsum, vel euismod neque rutrum lacinia. In vitae ligula felis.
            <br /><br /><br />
            Mauris vulputate ipsum gravida sem interdum, in porttitor augue dictum. Nulla facilisi. Etiam varius cursus diam, nec molestie ipsum lobortis ut. Donec erat lacus, vulputate at tortor ultricies, fermentum fringilla quam. Quisque ut risus et nibh dignissim hendrerit. Donec diam lorem, euismod et felis eu, aliquet sollicitudin risus. In et tempus leo, a aliquet urna. Suspendisse mattis a nisi vel tempus. In id pulvinar erat. Praesent sodales congue risus sollicitudin dignissim. Proin sodales hendrerit nulla, eget blandit nisi dignissim at. Sed eu tristique sapien, ut porta sem. Aliquam sollicitudin rutrum fringilla. Nulla pellentesque lacus turpis, nec condimentum dolor dignissim in. In aliquet vel nulla eu congue. Phasellus tempus vel elit vitae tristique.
          </p>
        </div>
        <Chart />
      </div>
    </>
  );
}