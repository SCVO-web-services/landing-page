// components/Chart.tsx
'use client';

import React from 'react';
import OrgCard from './Card';
import data from '../data/data.json';

const Chart: React.FC = () => (
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 my-8 text-gray-900 dark:text-gray-100">
    <h2 className="text-6xl font-bold my-8 text-center text-black dark:text-gray-100">
      Nuestra organización
    </h2>
    <div className="org-container">
      <ul className="org-tree">
        <OrgCard data={data} />
      </ul>
    </div>
  </section>
);

export default Chart;
