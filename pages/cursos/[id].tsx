// pages/cursos/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Button } from '@nextui-org/react';
import CustomNavbar from '../../components/Navbar';
import courses from '../../data/courses.json';

interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  introDescription: string;
  details: string[];
  learningPoints: string[];
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
      <CustomNavbar />
      <div className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-white opacity-50"
          style={{ opacity: 0.65 }}
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
              <p className="text-black mt-4">{course.introDescription}</p>
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
            {course.details.map((detail, index) => (
              <div key={index} className="text-center">
                <p className="font-bold text-black">{detail}</p>
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-bold mb-4 text-black">Que aprenderás</h1>
          <ul className="list-disc pl-5 text-black">
            {course.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
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
  const paths = courses.map((course) => ({
    params: { id: course.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const course = courses.find((course) => course.id === params?.id);

  return {
    props: {
      course: course || null,
    },
  };
};

export default CoursePage;