// OrgCard.tsx
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
    <li>
      <Card className="bg-[#1a1a1a] w-64 p-4 text-center mx-auto">
        <Avatar
          src={`https://i.pravatar.cc/150?u=${node.name}`}
          style={{ width: 80, height: 80, border: '3px solid #fff' }}
          className="mx-auto mb-2"
        />
        <h4 className="text-white font-semibold">{node.name}</h4>
        <p className="text-gray-400">{node.title}</p>
      </Card>

      {children.length > 0 && (
        <>
          <div className="w-px h-6 bg-gray-400 mx-auto"></div>

          <ul>
            <OrgCard data={children} />
          </ul>
        </>
      )}
    </li>
  );
};

export default OrgCard;
