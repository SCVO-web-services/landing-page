// components/OrgCard.tsx
'use client';

import React from 'react';
import { Avatar, Card } from '@nextui-org/react';

interface OrgData {
  name: string;
  title: string;
  children?: OrgData[];
}

interface CardProps {
  data: OrgData[];
}

const OrgCard: React.FC<CardProps> = ({ data }) => (
  <>
    {data.map((node) => (
      <TreeNode key={node.name} node={node} />
    ))}
  </>
);

const TreeNode: React.FC<{ node: OrgData }> = ({ node }) => {
  const children = node.children ?? [];

  return (
    <li className="mb-8">
      <Card
        className="
          bg-white dark:bg-gray-800
          shadow-md dark:shadow-purple-900
          rounded-lg w-64 p-4 text-center mx-auto
        "
      >
        {/* Avatar con borde adaptado */}
        <div className="mx-auto mb-2 w-20 h-20 rounded-full border-2 border-purple-500 dark:border-purple-300 overflow-hidden">
          <Avatar
            src={`https://i.pravatar.cc/150?u=${node.name}`}
            className="w-full h-full object-cover"
            alt={node.name}
          />
        </div>

        <h4 className="text-black dark:text-gray-100 font-semibold">
          {node.name}
        </h4>
        <p className="text-gray-700 dark:text-gray-300">{node.title}</p>
      </Card>

      {children.length > 0 && (
        <>
          {/* Línea de conexión adaptada */}
          <div className="w-px h-6 bg-gray-400 dark:bg-gray-600 mx-auto"></div>

          <ul className="mt-4 space-y-8">
            <OrgCard data={children} />
          </ul>
        </>
      )}
    </li>
  );
};

export default OrgCard;
