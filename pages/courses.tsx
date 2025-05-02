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
    syllabus && syllabus.length > 300 ? syllabus.slice(0, 300) + '...' : syllabus;

  const truncatedDescription =
    description && description.length > 150 ? description.slice(0, 150) + '...' : description;

  return (
    <div className="p-4 flex justify-center">
      <div
        className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer flex flex-col h-[600px] text-center w-full max-w-[340px] break-words"
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
        <div className="flex flex-col items-center text-center w-full">
          <h3 className="text-lg sm:text-xl font-bold text-black mb-2 break-words">{title}</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4 break-words">{truncatedDescription}</p>
          {truncatedSyllabus && (
            <p className="text-sm sm:text-base text-gray-700 break-words">
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

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/courses/');
        const data = await res.json();

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
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto">
        <CustomNavbar />
        <div className="mt-8 mb-8 flex flex-col gap-6 items-center">
          {Array.from({ length: Math.ceil(courses.length / 4) }).map((_, rowIndex) => {
            const start = rowIndex * 4;
            const rowCourses = courses.slice(start, start + 4);

            return (
              <div key={rowIndex} className="flex justify-center gap-4 flex-wrap">
                {rowCourses.map((course) => (
                  <div key={course.id} className="w-[360px] flex justify-center">
                    <CourseCard {...course} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
