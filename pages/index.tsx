// pages/index.tsx
import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import courses from '../data/courses.json';
import { obtenerNoticias } from '../utils/api';
import TarjetaNoticia from '../components/TarjetaNoticia';
import { Noticia } from '../types/noticia';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
}
function CourseCard({ title, description, imageUrl, id }: CourseCardProps) {
  const router = useRouter();
  return (
    <div className="p-4 w-full">
      <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-purple-900 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover mb-2 rounded-lg"
          width={500}
          height={300}
        />
        <h3 className="text-3xl font-bold mb-4 dark:text-gray-100">{title}</h3>
        <p className="font-bold mb-6 text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <div className="flex justify-between">
          <Button color="primary" onClick={() => router.push(`/cursos/${id}`)}>
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
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((i) => (i === courses.length - 3 ? 0 : i + 1));
  }, []);
  const prevSlide = () => {
    setCurrentIndex((i) => (i === 0 ? courses.length - 3 : i - 1));
  };
  const toggleAutoplay = () => setIsPlaying((v) => !v);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  useEffect(() => {
    obtenerNoticias().then(setNoticias);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <CustomNavbar />

      {/* Hero */}
      <div
        className="flex items-center justify-center h-[500px] bg-cover"
        style={{
          backgroundImage:
            'url(https://littlevisuals.co/images/flying_high.jpg)',
        }}
      >
        <div className="w-full sm:w-1/2 flex flex-col items-center bg-white/80 dark:bg-black/50 p-8 rounded-lg">
          <p className="font-bold text-6xl text-center">
            La plataforma médica educativa
          </p>
          <Button
            size="md"
            as={Link}
            className="gradient-button mt-8"
            style={{ width: '100%', padding: '20px 0' }}
          >
            Regístrate con nosotros
          </Button>
        </div>
      </div>

      {/* Noticias */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Últimas Noticias</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((n) => (
            <TarjetaNoticia key={n.id} noticia={n} />
          ))}
        </div>
      </main>

      {/* Carrusel de cursos */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {courses.map((course, i) => (
                <div key={i} className="w-1/3 flex-shrink-0 px-4">
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </div>
          {/* flechas y autoplay */}
          {[
            { onClick: prevSlide, icon: FiChevronLeft, left: true },
            { onClick: nextSlide, icon: FiChevronRight, left: false },
            {
              onClick: toggleAutoplay,
              icon: isPlaying ? FiPause : FiPlay,
              bottom: true,
            },
          ].map((btn, idx) => (
            <button
              key={idx}
              onClick={btn.onClick}
              className={`
                absolute bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg
                hover:bg-gray-100 dark:hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${btn.left ? 'left-0 top-1/2 -translate-y-1/2' : ''}
                ${
                  btn.left === false && !btn.bottom
                    ? 'right-0 top-1/2 -translate-y-1/2'
                    : ''
                }
                ${btn.bottom ? 'bottom-4 right-4' : ''}
              `}
              aria-label="Slide control"
            >
              <btn.icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
