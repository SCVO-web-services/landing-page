import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Noticia } from '../types/noticia';

interface TarjetaNoticiaProps {
  noticia: Noticia;
}

export default function TarjetaNoticia({ noticia }: TarjetaNoticiaProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{noticia.titulo}</CardTitle>
        <CardDescription>{noticia.fecha} - {noticia.autor}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{noticia.resumen}</p>
        <Link href={`/noticias/${noticia.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
          Leer más
        </Link>
      </CardContent>
    </Card>
  );
}