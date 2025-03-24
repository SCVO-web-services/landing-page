import React, { Fragment } from 'react';
import { Avatar, Card } from '@nextui-org/react';
import randomcolor from 'randomcolor';

/**
 *  Interfaz que representa los datos de la organización.
 * @typedef {Object} OrgData
 * @property {string} name -  el nombre de la persona.
 * @property {string} title - el título o puesto de la persona.
 * @property {OrgData[]} [children] - Los hijos o subordinados de la persona.
 */
interface OrgData {
  name: string;
  title: string;
  children?: OrgData[];
}

/**
 * Interfaz que representa los accesorios para el componente OrgCard..
 * @typedef {Object} CardProps
 * @property {OrgData[]} data - Los datos organizativos que se mostrarán.
 */
interface CardProps {
  data: OrgData[];
}

/**
 * Componente para mostrar una tarjeta organizacional.
 * @param {CardProps} props - Los accesorios para el componente.
 * @returns {JSX.Element} El componente renderizado.
 */
const OrgCard: React.FC<CardProps> = ({ data }) => {
  const levelColor = randomcolor();

  return (
    // Utilizamos un grid de Tailwind para mostrar las tarjetas de forma uniforme.
    // Se agrega "auto-rows-fr" para que cada fila tenga la misma altura y "justify-items-center" para centrar los elementos.
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center auto-rows-fr">
      {data.map((item) => (
        <Fragment key={item.name}>
          {/* Se asigna "h-full" al li para que ocupe toda la altura del grid */}
          <li className="h-full">
            {/*
              Usamos NextUI Card con clases de Tailwind:
              - w-72: Fija el ancho de la tarjeta (18rem aprox).
              - h-full y min-h-[350px]: La tarjeta ocupará toda la altura del contenedor y tendrá una altura mínima.
              - flex flex-col: Para organizar el contenido en columna.
              - items-center: Centra el contenido horizontalmente.
              - p-6: Padding de la tarjeta.
              - text-center: Centra el texto.
            */}
            <Card className="w-72 h-full min-h-[350px] flex flex-col items-center p-6 text-center">
              <div>
                <Avatar
                  src={`https://i.pravatar.cc/150?u=${item.name}`}
                  style={{
                    width: '80px',
                    height: '80px',
                    border: `5px solid ${levelColor}`,
                  }}
                />
                <h4 className="mt-4">{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </Card>
            {/* Renderizado recursivo de hijos si existen */}
            {item.children?.length && <OrgCard data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default OrgCard;
