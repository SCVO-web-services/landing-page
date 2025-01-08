import React from 'react';
import OrgCard from './Card';
import data from '../data/data.json';

/**
 * Componente para mostrar un organigrama.
 * @returns {JSX.Element} El componente renderizado.
 */
const Chart: React.FC = () => {
  return (
    <div className="org-container">
      <div className="org-tree">
        <OrgCard data={data} />
      </div>
    </div>
  );
};

export default Chart;