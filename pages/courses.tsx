// pages/cursos.tsx
import { useEffect, useState } from 'react';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  syllabus: string;
}

function CourseCard({ id, title, description, image, syllabus }: CourseCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/cursos/${id}`);
  };

  const truncatedSyllabus =
    syllabus && syllabus.length > 200 ? syllabus.slice(0, 200) + '...' : syllabus;

  const truncatedDescription =
    description && description.length > 150 ? description.slice(0, 150) + '...' : description;

  return (
    <div className="p-4 flex justify-center">
      <div
        className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer flex flex-col h-[600px] text-center"
        onClick={handleClick}
      >
        <div className="relative flex justify-center mb-2">
          <div className="w-full aspect-[16/9] bg-gray-200 rounded overflow-hidden">
            {image ? (
              <img
                src={`data:image/jpeg;base64,${image}`}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                Imagen no disponible
              </div>
            )}
            <div className="absolute top-2 right-2 bg-white border border-black text-black font-bold px-2 py-1 rounded">
              Free
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{truncatedDescription}</p>
          {truncatedSyllabus && (
            <p className="text-gray-700">
              <strong>Lo que aprenderás:</strong> {truncatedSyllabus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  // Aseguramos que el contenido dinámico solo se cargue en el cliente
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/courses/');
        const data = await res.json();

        // Renombrar obj_id a id
        const formattedData = data.map((course: any) => ({
          id: course.obj_id,
          title: course.title,
          description: course.description,
          image: course.image,
          syllabus: course.syllabus,
        }));

        setCourses(formattedData);
      } catch (error) {
        console.error("Error cargando cursos:", error);
      } finally {
        setLoading(false);  // Cambiar el estado de carga cuando se haya completado
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los cursos
  }

  return (
    <>
      <div className="container mx-auto">
        <CustomNavbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
