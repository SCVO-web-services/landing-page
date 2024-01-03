import type { NextPage } from 'next';
import React from 'react';
import { Card, CardHeader, CardFooter, Button, Image } from '@nextui-org/react';

interface Props {
  title: string;
  label: string;
  imageURL: string;
  studentCount: string;
}

const InfoCard: NextPage<Props> = (props) => {
  const { title, label, imageURL, studentCount } = props;
  const [isEnrolled, setIsEnrolled] = React.useState(false);
  return (
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <div className="col">
          <p className="text-tiny text-white/60 font-bold uppercase">{label}</p>
          <p className="text-white font-medium text-large">{title}</p>
        </div>
      </CardHeader>
      <Image removeWrapper className="z-0 w-full h-full object-cover" src={imageURL}></Image>
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div className="flex">
          <div className="col">
            <p className="text-lg text-black">{studentCount} Students</p>
          </div>
          <div className="col">
            <div className="flex justify-end">
              <Button
                className={
                  isEnrolled
                    ? 'bg-transparent text-foreground border-default-200'
                    : ''
                }
                color="primary"
                radius="full"
                size="sm"
                variant={isEnrolled ? 'bordered' : 'solid'}
                onPress={() => setIsEnrolled(!isEnrolled)}
              >
                {isEnrolled ? 'Unenroll' : 'Enroll In Course'}
              </Button>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default InfoCard;
