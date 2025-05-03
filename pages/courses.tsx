import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import courses from '../data/courses.json';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  schedule: string;
  level: string;
  learningPoints: string[];
}

function CourseCard({
  id,
  title,
  description,
  imageUrl,
  schedule,
  level,
  learningPoints,
}: CourseCardProps) {
  const router = useRouter();
  const truncatedLearningPoints =
    learningPoints.slice(0, 2).join(' ').substring(0, 100) + '...';

  return (
    <div className="p-4 w-full sm:w-1/2 lg:w-1/4">
      <div
        onClick={() => router.push(`/cursos/${id}`)}
        className="
          bg-white dark:bg-gray-800
          shadow-lg dark:shadow-purple-900
          rounded-lg p-4
          hover:shadow-xl transform hover:scale-105
          transition-all duration-300 cursor-pointer
          flex flex-col
          min-h-[420px] sm:min-h-[440px] md:min-h-[460px] lg:min-h-[480px]
        "
      >
        <div className="relative flex justify-center mb-2">
          <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              width={384}
              height={192}
            />
            <div
              className="
                absolute top-2 right-2
                bg-white dark:bg-gray-700
                border border-black dark:border-white
                text-black dark:text-white
                font-bold px-2 py-1 rounded
              "
            >
              Gratis
            </div>
          </div>
        </div>

        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-center text-black dark:text-gray-100">
            {description}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            <strong>Lo que aprenderás:</strong> {truncatedLearningPoints}
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-blue-900 dark:text-blue-300">{schedule}</p>
          <p className="text-blue-900 dark:text-blue-300">{level}</p>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <>
      {/* Contenedor general adaptado a light/dark */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <CustomNavbar />

        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Nuestros Cursos
          </h1>

          <div className="flex flex-wrap justify-center -mx-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                schedule={course.details[2]}
                level={course.details[1]}
                learningPoints={course.learningPoints}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
