import React from 'react';
import OrgCard from './Card';
import data from '../data/data.json';

/**
 * Componente para mostrar un organigrama.
 * @returns {JSX.Element} El componente renderizado.
 */
const Chart: React.FC = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold text-inherit my-8 text-center">
        Nuestra organización
      </h2>
      <div className="org-container">
        <div className="org-tree">
          <OrgCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
