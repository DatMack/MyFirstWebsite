import React, { useState } from 'react';

import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  visible: boolean;
}

const Section: React.FC<SectionProps> = ({ children, title = 'Title', visible = true }) => {
  const [shown, setShown] = useState(visible);

  return (
    <div className='Section'>
      <h1 className='Section__header' onClick={() => setShown(!shown)}>
        {title}
      </h1>

      {shown && <div className='Section__content'>{children}</div>}
    </div>
  );
};

export { Section };
