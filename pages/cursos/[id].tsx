// pages/cursos/[id].tsx

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Button } from '@nextui-org/react';
import CustomNavbar from '../../components/Navbar';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  syllabus: string;
}

interface CoursePageProps {
  course: Course | null;
}

const CoursePage = ({ course }: CoursePageProps) => {
  const router = useRouter();

  if (!course) {
    return <div className="text-center mt-10 text-red-600">Curso no encontrado</div>;
  }

  return (
    <div className="container mx-auto">
      <CustomNavbar />
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-white opacity-50" style={{ opacity: 0.65 }}></div>
        <div
          className="flex items-center justify-start h-full bg-cover bg-center"
          style={{ backgroundImage: `url(data:image/jpeg;base64,${course.image})` }}
        >
          <div className="w-full sm:w-1/2 flex flex-col items-start pl-6 relative z-10">
            <h1 className="font-bold text-6xl text-black">{course.title}</h1>
            <p className="text-black mt-4">{course.syllabus}</p>
            <Button color="primary" className="mt-4 text-lg py-6 px-12">
              Inscribirse
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-black">Descripción del curso</h2>
          <p className="text-black mb-6">{course.description}</p>

          <h2 className="text-3xl font-bold mb-4 text-black">Lo que aprenderás</h2>
          <p className="text-black">{course.syllabus}</p>

          <div className="flex space-x-4 mt-6">
            <Button color="primary" onClick={() => router.push('/inscribirse')}>
              Inscribirse
            </Button>
            <Button color="default" onClick={() => router.back()}>
              Volver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const res = await fetch(`http://api:8000/api/courses/`);
    const courses = await res.json();

    console.log("Cursos desde la API:", courses);
    console.log("ID desde la URL:", params?.id);

    const courseData = courses.find(
      (course: { obj_id: number }) => course.obj_id === Number(params?.id)
    );

    console.log("Curso encontrado:", courseData);

    if (!courseData) {
      return { props: { course: null } };
    }

    const course: Course = {
      id: courseData.obj_id.toString(),
      title: courseData.title,
      description: courseData.description,
      image: courseData.image,
      syllabus: courseData.syllabus,
    };

    return {
      props: {
        course,
      },
    };
  } catch (error) {
    console.error("Error en getServerSideProps:", error);
    return { props: { course: null } };
  }
};


export default CoursePage;
