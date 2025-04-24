// Chart.tsx
import React from 'react';
import OrgCard from './Card';
import data from '../data/data.json';

const Chart: React.FC = () => (
  <div>
    <h2 className="text-6xl font-bold text-inherit my-8 text-center">
      Nuestra organización
    </h2>
    <div className="org-container">
      <ul className="org-tree">
        <OrgCard data={data} />
      </ul>
    </div>
  </div>
);

export default Chart;
