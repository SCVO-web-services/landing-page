import CustomNavbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component
import Image from 'next/image'; // Import the Image component
import courses from '../data/courses.json'; // Import the courses data
import { useRouter } from 'next/router'; // Import the useRouter hook

/**
 * Props for the CourseCard component.
 * @typedef {Object} CourseCardProps
 * @property {string} title - The title of the course.
 * @property {string} description - The description of the course.
 * @property {string} imageUrl - The URL of the course image.
 * @property {string} schedule - The schedule of the course.
 * @property {string} level - The level of the course.
 * @property {string[]} learningPoints - The learning points of the course.
 */
interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  schedule: string;
  level: string;
  learningPoints: string[];
}

/**
 * Component to display a course card.
 * @param {CourseCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
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

  const handleClick = () => {
    router.push(`/cursos/${id}`);
  };

  const truncatedLearningPoints =
    learningPoints.slice(0, 2).join(' ').substring(0, 100) + '...';

  return (
    <div className="p-4 w-full sm:w-1/2 lg:w-1/4">
      <div
        className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer flex flex-col 
  min-h-[420px] sm:min-h-[440px] md:min-h-[460px] lg:min-h-[480px]"
        onClick={handleClick}
      >
        <div className="relative flex justify-center mb-2">
          <div className="w-full aspect-[16/9] bg-gray-200 rounded overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              width={384}
              height={192}
            />
            <div className="absolute top-2 right-2 bg-white border border-black text-black font-bold px-2 py-1 rounded">
              Free
            </div>
          </div>
        </div>

        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-center text-black">
            {description}
          </h3>
          <p className="text-gray-700 text-center">
            <strong>Lo que aprenderás:</strong> {truncatedLearningPoints}
          </p>
        </div>

        <div className="mt-4 text-center text-blue-900">
          <p>{schedule}</p>
          <p>{level}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * The main component for the courses page.
 * @returns {JSX.Element} The rendered component.
 */
export default function CoursesPage() {
  return (
    <>
      <div className="container mx-auto">
        <CustomNavbar /> {/* Use the Navbar component */}
        <div className="flex flex-wrap justify-center mt-8 mb-8">
          {courses.map((course, index) => (
            <CourseCard
              id={course.id}
              key={index}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              schedule={course.details[2]} // Assuming the schedule is the third item in details
              level={course.details[1]} // Assuming the level is the second item in details
              learningPoints={course.learningPoints}
            />
          ))}
        </div>
      </div>
      <Footer /> {/* Use the Footer component */}
    </>
  );
}
