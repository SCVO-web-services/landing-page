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
      <div className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-white opacity-50"
          style={{ opacity: 0.65 }} // Ajusta la opacidad aquí
        ></div>
        <div
          className="flex items-center justify-start h-full bg-cover"
          style={{
            backgroundImage: `url(${course.imageUrl})`,
          }}
        >
          <div className="w-full sm:w-1/2 flex flex-col items-start pl-6 relative z-10">
            <div>
              <h1 className="font-bold text-6xl text-black">
                {course.description}
              </h1>
              <p className="text-black mt-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga.
              </p>
              <Button color="primary" className="mt-4 text-lg py-6 px-12">
                Inscribirse
              </Button>
            </div>
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
          <h1 className="text-3xl font-bold mb-4 text-black">Que aprenderás</h1>
          <ul className="list-disc pl-5 text-black">
            <li>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </li>
            <li>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </li>
            <li>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?{' '}
            </li>
            <li>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <Button
              color="primary"
              onClick={() => router.push('/inscribirse')}
            >
              Inscribirse
            </Button>
            <Button
              color="default"
              css={{ backgroundColor: 'black', color: 'white' }}
              onClick={() => router.back()}
            >
              Volver
            </Button>
          </div>
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