import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi';
import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';

/**
 * Accesorios para el componente CourseCard.
 * @typedef {Object} CourseCardProps
 * @property {string} title - El título del curso.
 * @property {string} description - La descripción del curso.
 * @property {string} imageUrl - La URL de la imagen del curso.
 */
// Definir los tipos de las props para CourseCard
interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * Componente para mostrar una tarjeta de curso.
 * @param {CourseCardProps} props - Los accesorios para el componente.
 * @returns {JSX.Element} - El componente renderizado.
 */
function CourseCard({ title, description, imageUrl }: CourseCardProps) {
  return (
    <div className="p-4 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover mb-2 rounded-lg"
          width={500}
          height={300}
        />{' '}
        {/* Reduce margin-bottom */}
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 mb-6 font-bold">{description}</p>{' '}
        {/* Descripción en negrita */}
        <div className="flex justify-between">
          <Button color="primary">Ver más</Button>
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

  const courses = [
    {
      title: 'Curso 1',
      description: 'La obecidad en Venezuela',
      imageUrl: '/pictures/1.jpg',
    },
    {
      title: 'Curso 2',
      description: 'Nutricion en niños',
      imageUrl: '/pictures/2.jpg',
    },
    {
      title: 'Curso 3',
      description: 'Como bajar de peso en 32 años',
      imageUrl: '/pictures/3.jpg',
    },
    {
      title: 'Curso 4',
      description: 'La obesidad morbida y la diabetes',
      imageUrl: '/pictures/4.jpg',
    },
    {
      title: 'Curso 5',
      description: 'Correlacion directa entre las cachapas y los infartos',
      imageUrl: '/pictures/5.jpg',
    },
    {
      title: 'Curso 6',
      description: 'Como comer mas comiendo menos',
      imageUrl: '/pictures/6.jpg',
    },
  ];

  /**
   * Avanza el carrusel a la siguiente diapositiva.
   */
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 3 ? 0 : prevIndex + 1,
    );
  }, [courses.length]);

  /**
   * Mueve el carrusel a la diapositiva anterior.
   */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 3 : prevIndex - 1,
    );
  };

  /**
   * Alterna la funcionalidad de reproducción automática del carrusel.
   */
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
        {/* Imagen representativa */}
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
        {/* Carrusel de tarjetas */}
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
