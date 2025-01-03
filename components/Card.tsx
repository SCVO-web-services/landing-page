import React, { Fragment } from 'react';
import { Avatar, Card } from '@nextui-org/react';
import randomcolor from 'randomcolor';

interface OrgData {
  name: string;
  title: string;
  children?: OrgData[];
}

interface CardProps {
  data: OrgData[];
}

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