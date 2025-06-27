import React from 'react';

type Props = {
  page: string;
  lead: string;
  children?: React.ReactNode;
};

const MainVisual: React.FC<Props> = ({ page, lead, children }) => (
  <div className="c-main-visual">
    <div className="c-main-visual__inner">
      <h2 className="c-main-visual__title">{page}</h2>
      <h3 className="c-main-visual__lead">{lead}</h3>
      {children}
    </div>
  </div>
);

export default MainVisual;