// pages/cursos/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react';

interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface CoursePageProps {
  course: Course;
}

const CoursePage = ({ course }: CoursePageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
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
      <div
        className="flex items-center justify-center h-[500px] bg-cover"
        style={{
          backgroundImage: `url(${course.imageUrl})`,
        }}
      >
        <div className="w-full sm:w-1/2 flex flex-col items-center">
          <div className="text-center">
            <h1 className="font-bold text-6xl text-white">{course.title}</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <Image
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-48 object-cover mb-4 rounded-lg"
            width={500}
            height={300}
          />
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <Button color="primary" onClick={() => router.back()}>
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = [
    {
      id: '1',
      title: 'Curso 1',
      description: 'La obecidad en Venezuela',
      imageUrl: '/pictures/1.jpg',
    },
    {
      id: '2',
      title: 'Curso 2',
      description: 'Nutricion en niños',
      imageUrl: '/pictures/2.jpg',
    },
    {
      id: '3',
      title: 'Curso 3',
      description: 'Como bajar de peso en 32 años',
      imageUrl: '/pictures/3.jpg',
    },
    {
      id: '4',
      title: 'Curso 4',
      description: 'La obesidad morbida y la diabetes',
      imageUrl: '/pictures/4.jpg',
    },
    {
      id: '5',
      title: 'Curso 5',
      description: 'Correlacion directa entre las cachapas y los infartos',
      imageUrl: '/pictures/5.jpg',
    },
    {
      id: '6',
      title: 'Curso 6',
      description: 'Como comer mas comiendo menos',
      imageUrl: '/pictures/6.jpg',
    },
  ];

  const paths = courses.map((course) => ({
    params: { id: course.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const courses = [
    {
      id: '1',
      title: 'Curso 1',
      description: 'La obecidad en Venezuela',
      imageUrl: '/pictures/1.jpg',
    },
    {
      id: '2',
      title: 'Curso 2',
      description: 'Nutricion en niños',
      imageUrl: '/pictures/2.jpg',
    },
    {
      id: '3',
      title: 'Curso 3',
      description: 'Como bajar de peso en 32 años',
      imageUrl: '/pictures/3.jpg',
    },
    {
      id: '4',
      title: 'Curso 4',
      description: 'La obesidad morbida y la diabetes',
      imageUrl: '/pictures/4.jpg',
    },
    {
      id: '5',
      title: 'Curso 5',
      description: 'Correlacion directa entre las cachapas y los infartos',
      imageUrl: '/pictures/5.jpg',
    },
    {
      id: '6',
      title: 'Curso 6',
      description: 'Como comer mas comiendo menos',
      imageUrl: '/pictures/6.jpg',
    },
  ];

  const course = courses.find((course) => course.id === params?.id);

  return {
    props: {
      course: course || null,
    },
  };
};

export default CoursePage;