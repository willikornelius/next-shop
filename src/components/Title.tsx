import React from 'react';

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-2xl pb-4">{children}</h1>;
};

export default Title;
