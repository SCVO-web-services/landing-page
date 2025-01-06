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
    <ul>
      {data.map((item) => (
        <Fragment key={item.name}>
          <li>
            <Card style={{ maxWidth: "300px", margin: "20px auto", padding: "20px", textAlign: "center" }}>
              <div>
                <Avatar
                  src={`https://i.pravatar.cc/150?u=${item.name}`}
                  style={{ width: "80px", height: "80px", border: `5px solid ${levelColor}` }}
                />
                <h4>{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </Card>
            {item.children?.length && <OrgCard data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default OrgCard;