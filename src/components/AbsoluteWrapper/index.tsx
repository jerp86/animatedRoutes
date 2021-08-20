import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const AbsoluteWrapper = ({ children }: Props) => (
  <div
    style={{
      position: 'absolute',
      width: '100%',
      overflow: 'hidden',
      scrollBehavior: 'smooth',
      msScrollTranslation: 'none',
    }}
  >
    {children}
  </div>
);
