import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { obtenerNoticias } from '../utils/api';
import TarjetaNoticia from '../components/TarjetaNoticia';
import { Noticia } from '../types/noticia';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  maxDescriptionLength?: number;
}

function CourseCard({ title, description, image, id, maxDescriptionLength = 100 }: CourseCardProps) {
  const router = useRouter();

  const handleViewMore = () => {
    router.push(`/cursos/${id}`);
  };

  const truncatedDescription = description.length > maxDescriptionLength
    ? description.slice(0, maxDescriptionLength) + '...'
    : description;

  return (
    <div className="p-4 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 h-[550px] flex flex-col">
        <div className="relative w-full h-48 mb-2 rounded-lg bg-gray-200">
          {image ? (
            <Image
              src={image.startsWith('data:image') ? image : `data:image/jpeg;base64,${image}`}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
              width={500}
              height={300}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl font-semibold">
              Imagen no disponible
            </div>
          )}
        </div>
        <h3 className="text-3xl font-bold mb-4 text-center text-black flex-grow">{title}</h3>
        <p className="text-gray-700 mb-6 font-bold text-center flex-grow">
          {truncatedDescription}
        </p>
        <div className="flex justify-between mt-auto">
          <Button color="primary" onClick={handleViewMore}>
            Ver más
          </Button>
          <Button color="secondary">Inscribirse</Button>
        </div>
      </div>
    </div>
  );
}

export default function IndexPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 3 ? 0 : prevIndex + 1
    );
  }, [courses.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 3 : prevIndex - 1
    );
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setIsMounted(true);
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(nextSlide, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, nextSlide]);

  useEffect(() => {
    const fetchNoticias = async () => {
      const noticias = await obtenerNoticias();
      setNoticias(noticias);
    };
    fetchNoticias();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/courses/');
        const data = await res.json();
        const mappedCourses = data.map((course: any) => ({
          id: course.obj_id,
          title: course.title,
          description: course.description,
          image: course.image || null,
        }));
        setCourses(mappedCourses);
      } catch (error) {
        console.error('Error cargando cursos:', error);
      }
    };
    fetchCourses();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="container mx-auto">
        <CustomNavbar />
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

        {/* Noticias */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Últimas Noticias</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia) => (
              <TarjetaNoticia key={noticia.id} noticia={noticia} />
            ))}
          </div>
        </div>

        {/* Carrusel de cursos */}
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
                      image={course.image}
                      maxDescriptionLength={100} // Recorte aquí
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Botón anterior */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Botón siguiente */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Botón de autoplay */}
            <button
              onClick={toggleAutoplay}
              className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
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
      <Footer />
    </>
  );
}
