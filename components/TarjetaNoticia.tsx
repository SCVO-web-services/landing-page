// components/TarjetaNoticia.tsx
'use client';

import Image from 'next/image';
import { Noticia } from '../types/noticia';

interface TarjetaNoticiaProps {
  noticia: Noticia;
}

export default function TarjetaNoticia({ noticia }: TarjetaNoticiaProps) {
  const { id, titulo, resumen, fecha, autor } = noticia;
  // Usa id.jpg si existe, si no, cae a imagen.jpg
  const imageSrc = `/pictures/noticias${id}.jpg`;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      {/* Imagen principal */}
      <Image
        src={imageSrc}
        alt={titulo}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
        // Si usas Next 13+ y tienes app router, quita priority si no es necesario
      />

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-black dark:text-gray-100">
          {titulo}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{resumen}</p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span>{autor}</span> &middot; <span>{fecha}</span>
        </div>
      </div>
    </div>
  );
}
