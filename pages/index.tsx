import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import CustomNavbar from '../components/Navbar'; // Importar el componente Navbar
import courses from '../data/courses.json'; // Importar los cursos desde el archivo JSON

/**
 * Accesorios para el componente CourseCard.
 * @typedef {Object} CourseCardProps
 * @property {string} title - El título del curso.
 * @property {string} description - La descripción del curso.
 * @property {string} imageUrl - La URL de la imagen del curso.
 * @property {string} id - El ID del curso.
 */
interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
}

/**
 * Componente para mostrar una tarjeta de curso.
 * @param {CourseCardProps} props - Los accesorios para el componente.
 * @returns {JSX.Element} - El componente renderizado.
 */
function CourseCard({ title, description, imageUrl, id }: CourseCardProps) {
  const router = useRouter();

  const handleViewMore = () => {
    router.push(`/cursos/${id}`);
  };

  return (
    <div className="p-4 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover mb-2 rounded-lg"
          width={500}
          height={300}
        />
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 mb-6 font-bold">{description}</p>
        <div className="flex justify-between">
          <Button color="primary" onClick={handleViewMore}>
            Ver más
          </Button>
          <Button color="secondary">Inscribirse</Button>
        </div>
      </div>
    </div>
  );
}

/**
 * El componente de la página principal de la página de índice.
 * @returns {JSX.Element} El componente renderizado.
 */
export default function IndexPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 3 ? 0 : prevIndex + 1,
    );
  }, [courses.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 3 : prevIndex - 1,
    );
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | number;
    if (isPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <>
      <div className="container mx-auto">
        <CustomNavbar /> {/* Usar el componente Navbar */}
        <div
          className="flex items-center justify-center h-[500px] bg-cover"
          style={{
            backgroundImage:
              'url(https://littlevisuals.co/images/flying_high.jpg)',
          }}
        >
          <div className="w-full sm:w-1/2 flex flex-col items-center">
            <div className="text-center">
              <p className="font-bold text-6xl">
                La plataforma médica educativa
              </p>
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
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                }}
              >
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex-shrink-0 px-4"
                    role="article"
                    aria-label={course.title}
                  >
                    <CourseCard
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      imageUrl={course.imageUrl}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={toggleAutoplay}
              className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isPlaying ? (
                <FiPause className="w-6 h-6 text-gray-800" />
              ) : (
                <FiPlay className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}