import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Definir los tipos de las props para CourseCard
interface CourseCardProps {
  title: string;
  description: string;
}

// Componente para las tarjetas de cursos
function CourseCard({ title, description }: CourseCardProps) {
  return (
    <div className="p-4 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="flex justify-between">
          <Button color="primary">
            Ver más
          </Button>
          <Button color="secondary">
            Inscribirse
          </Button>
        </div>
      </div>
    </div>
  );
}

// Mejoras en el componente IndexPage
export default function IndexPage() {
  const courses = [
    { title: 'Curso 1', description: 'Descripción del curso 1' },
    { title: 'Curso 2', description: 'Descripción del curso 2' },
    { title: 'Curso 3', description: 'Descripción del curso 3' },
  ];

  return (
    <>
      <div className="container mx-auto">
        <Navbar position="static">
          <NavbarBrand>
            <p className="font-bold text-inherit">SCVO</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-10" justify={'center'}>
            <NavbarItem isActive>
              <Link href="#">Organigrama</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#">Memorial</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#">Cursos</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#">Organigrama</Link>
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
        {/* Imagen representativa */}
        <div
          className="flex items-center justify-center h-[500px] bg-cover"
          style={{ backgroundImage: 'url(https://littlevisuals.co/images/flying_high.jpg)' }}
        >
          <div className="w-full sm:w-1/2 flex flex-col items-center">
            <div className="text-center">
              <p className="font-bold text-6xl">La plataforma médica educativa</p>
            </div>
            <Button
              size="md"
              as={Link}
              className="gradient-button mt-8"
              style={{ width: '100%', padding: '20px 0' }}
            >
              Registrate con nosotros
            </Button>
          </div>
        </div>
        {/* Carrusel de tarjetas */}
        <div className="flex items-center justify-center mt-8">
          <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
            {courses.map((course, index) => (
              <CourseCard key={index} title={course.title} description={course.description} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}