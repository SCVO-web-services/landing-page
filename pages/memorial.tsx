import CustomNavbar from '../components/Navbar'; // Importar el componente Navbar
import Image from 'next/image'; // Importa el componente Image

/**
 * Accesorios para el componente MemorialCard.
 * @typedef {Object} MemorialCardProps
 * @property {string} name - El nombre de la persona a la que se conmemora.
 * @property {string} dedication - El texto de la dedicatoria del memorial.
 * @property {string} [photoUrl] - La URL de la foto de la persona (opcional).
 */
interface MemorialCardProps {
  name: string;
  dedication: string;
  photoUrl?: string;
}

/**
 * Componente para mostrar una tarjeta conmemorativa.
 * @param {MemorialCardProps} props - Los accesorios para el componente.
 * @returns {JSX.Element} El componente renderizado.
 */
function MemorialCard({ name, dedication, photoUrl }: MemorialCardProps) {
  return (
    <div className="p-4 w-full sm:w-1/2 lg:w-1/4">
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt={name}
                className="w-full h-full object-cover"
                width={96}
                height={96}
              />
            ) : (
              <div className="w-full h-full bg-gray-200"></div>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-center text-black">
          {name}
        </h3>
        <p className="text-gray-700 text-center">{dedication}</p>
      </div>
    </div>
  );
}

/**
 * El componente de la página principal de la página conmemorativa.
 * @returns {JSX.Element} El componente renderizado.
 */
export default function MemorialPage() {
  const memorials = [
    { name: 'Joanna Irtuña', dedication: 'Siempre con nosotros', photoUrl: '' },
    {
      name: 'Javier Miguel',
      dedication: 'Oncologo, recordado siempre',
      photoUrl: '',
    },
    { name: 'Nombre 3', dedication: 'Amado por la famila', photoUrl: '' },
    { name: 'Nombre 4', dedication: 'Dedicatoria 4', photoUrl: '' },
    { name: 'Nombre 5', dedication: 'Dedicatoria 5', photoUrl: '' },
    { name: 'Nombre 6', dedication: 'Dedicatoria 6', photoUrl: '' },
    { name: 'Nombre 7', dedication: 'Dedicatoria 7', photoUrl: '' },
    { name: 'Nombre 8', dedication: 'Dedicatoria 8', photoUrl: '' },
  ];

  return (
    <>
      <div className="container mx-auto">
        <CustomNavbar /> {/* Usar el componente Navbar */}
        {/* Memorial cards */}
        <div className="flex flex-wrap justify-center mt-8">
          {memorials.map((memorial, index) => (
            <MemorialCard
              key={index}
              name={memorial.name}
              dedication={memorial.dedication}
              photoUrl={memorial.photoUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}