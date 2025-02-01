import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';
import { Noticia } from '../types/noticia';

/**
 * Props para el componente TarjetaNoticia.
 * @typedef {Object} TarjetaNoticiaProps
 * @property {Noticia} noticia - La noticia que se mostrará en la tarjeta.
 */
interface TarjetaNoticiaProps {
  noticia: Noticia;
}

/**
 * Componente para mostrar una tarjeta de noticia.
 * @param {TarjetaNoticiaProps} props - Los props para el componente.
 * @returns {JSX.Element} El componente renderizado.
 */
export default function TarjetaNoticia({ noticia }: TarjetaNoticiaProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{noticia.titulo}</CardTitle>
        <CardDescription>
          {noticia.fecha} - {noticia.autor}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{noticia.resumen}</p>
        <Link
          href={`/noticias/${noticia.id}`}
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Leer más
        </Link>
      </CardContent>
    </Card>
  );
}
