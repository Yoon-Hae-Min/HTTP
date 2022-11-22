import React from 'react';
import * as Style from './index.styles';

const TabTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Style.TabTitleLayout>
      <h2>{children}</h2>
    </Style.TabTitleLayout>
  );
};

export default TabTitle;
