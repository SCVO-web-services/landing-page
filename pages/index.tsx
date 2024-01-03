import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import InfoCard from '../components/infoCard';

export default function IndexPage() {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar position="static">
          <NavbarBrand>
            <p className="font-bold text-inherit">SCVO</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-10" justify={'center'}>
            <NavbarItem isActive>
              <Link href="#" aria-current={'page'}>
                <a>Organigrama</a>
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current={'page'}>
                <a>Memorial</a>
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current={'page'}>
                <a>Cursos</a>
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current={'page'}>
                <a>Organigrama</a>
              </Link>
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
        {/*Aqui cambiamos el link por alguna imagen de SCVO*/}
        <div
          className="flex items-center justify-center h-[500px] bg-cover"
          style={{
            backgroundImage:
              'url(https://littlevisuals.co/images/flying_high.jpg)',
          }}
        >
          <div className="w-full sm:w-1/2 flex flex-col items-center">
            <div className="text-center">
              <p className="font-bold text-6xl">La plataforma</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-6xl">médica</p>
            </div>
            <div className="text-center mb-7">
              <p className="font-bold text-6xl">educativa</p>
            </div>
            <Button
              size="md"
              as={Link}
              className="gradient-button"
              style={{ width: '100%', padding: '20px 0' }}
            >
              Join For Free
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="col-span-1 sm:col-span-1">
            <InfoCard
              label="Course"
              title="Obesidad en Venezuela"
              imageURL="https://littlevisuals.co/images/red_dawn.jpg"
              studentCount="3,500"
            />
          </div>
          <div className="col-span-1 sm:col-span-1">
            <InfoCard
              label="Course"
              title="Peligros de la obesidad"
              imageURL="https://littlevisuals.co/images/sunset.jpg"
              studentCount="1,000"
            />
          </div>
          <div className="col-span-1 sm:col-span-1">
            <InfoCard
              label="Course"
              title="Nutricion: Dietas para bajar de peso"
              imageURL="https://littlevisuals.co/images/tail.jpg"
              studentCount="5,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
