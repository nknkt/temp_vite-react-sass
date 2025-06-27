import React from 'react';

type Props = {
  page: string;
  lead: string;
  children?: React.ReactNode;
};

const MainVisual: React.FC<Props> = ({ page, lead, children }) => (
  <div className="mainVisual">
    <div className="mainVisual__inner">
      <h2 className="mainVisual__page">{page}</h2>
      <h3 className="mainVisual__lead">{lead}</h3>
      {children}
    </div>
  </div>
);

export default MainVisual;