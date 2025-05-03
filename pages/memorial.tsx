// pages/memorial.tsx
'use client';

import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

/**
 * Props for the MemorialCard component.
 */
interface MemorialCardProps {
  name: string;
  dedication: string;
  photoUrl?: string;
}

function MemorialCard({ name, dedication, photoUrl }: MemorialCardProps) {
  return (
    <div className="p-4 w-full sm:w-1/2 lg:w-1/4">
      <div
        className="
          bg-white dark:bg-gray-800
          shadow-lg dark:shadow-purple-900
          rounded-lg p-6
          hover:shadow-xl transform hover:scale-105
          transition-all duration-300
        "
      >
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt={name}
                className="w-full h-full object-cover"
                width={96}
                height={96}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700" />
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-center text-black dark:text-gray-100">
          {name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          {dedication}
        </p>
      </div>
    </div>
  );
}

export default function MemorialPage() {
  const memorials = [
    { name: 'Joanna Irtuña', dedication: 'Siempre con nosotros', photoUrl: '' },
    {
      name: 'Javier Miguel',
      dedication: 'Oncólogo, recordado siempre',
      photoUrl: '',
    },
    { name: 'Nombre 3', dedication: 'Amado por la familia', photoUrl: '' },
    { name: 'Nombre 4', dedication: 'Dedicatoria 4', photoUrl: '' },
    { name: 'Nombre 5', dedication: 'Dedicatoria 5', photoUrl: '' },
    { name: 'Nombre 6', dedication: 'Dedicatoria 6', photoUrl: '' },
    { name: 'Nombre 7', dedication: 'Dedicatoria 7', photoUrl: '' },
    { name: 'Nombre 8', dedication: 'Dedicatoria 8', photoUrl: '' },
  ];

  return (
    <>
      {/* Contenedor general con soporte light/dark */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 container mx-auto">
        <CustomNavbar />

        <div className="flex flex-wrap justify-center mt-8 mb-20">
          {memorials.map((memorial, idx) => (
            <MemorialCard
              key={idx}
              name={memorial.name}
              dedication={memorial.dedication}
              photoUrl={memorial.photoUrl}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
