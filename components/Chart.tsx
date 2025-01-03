import React from 'react';
import OrgCard from './Card';
import data from '../data/data.json';

const Chart: React.FC = () => {
  return (
    <div className="org-tree">
      <OrgCard data={data} />
    </div>
  );
};

export default Chart;