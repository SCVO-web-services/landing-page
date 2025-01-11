// pages/cursos/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Button } from '@nextui-org/react';
import CustomNavbar from '../../components/Navbar'; // Importar el componente Navbar

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
      <CustomNavbar /> {/* Usar el componente Navbar */}
      <div
        className="flex items-center justify-start h-[500px] bg-cover"
        style={{
          backgroundImage: `url(${course.imageUrl})`,
        }}
      >
        <div className="w-full sm:w-1/2 flex flex-col items-start pl-6">
          <div>
            <h1 className="font-bold text-6xl text-black">
              {course.description}
            </h1>
            <p className="text-black mt-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            <Button color="primary" className="mt-4">
              Inscribirse
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex justify-around items-center border-b pb-4 mb-4">
            <div className="text-center">
              <p className="font-bold text-black">Certificado disponible</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-black">Nivel introductorio</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-black">
                4 Meses usando 2 horas a la semana
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-black">Horario flexible</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-black">{course.title}</h1>
          <ul className="list-disc pl-5 text-black">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt</li>
            <li>Ut labore et dolore magna aliqua</li>
          </ul>
          <Button
            color="primary"
            className="mt-4"
            onClick={() => router.back()}
          >
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