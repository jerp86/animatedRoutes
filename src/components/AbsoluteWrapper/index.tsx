import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const AbsoluteWrapper = ({ children }: Props) => (
  <div>
    {children}
  </div>
);
