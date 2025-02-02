import React from 'react';

interface HelmentProps {
  title: string;
  children: React.ReactNode;
}

const Helment: React.FC<HelmentProps> = (props) => {
  document.title = 'Multimart - ' + props.title;

  return <div className='w-full'>{props.children}</div>;
};

export default Helment;