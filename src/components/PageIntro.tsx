import React from 'react';
import { modules } from '../data/courseData';

interface PageIntroProps {
  id: string;
  title: string;
  description?: string;
  customEyebrow?: string;
  customCount?: string;
}

export const PageIntro: React.FC<PageIntroProps> = ({
  id,
  title,
  description,
  customEyebrow,
  customCount,
}) => {
  const index = modules.findIndex((m) => m.id === id);
  const n = index + 1;
  const eyebrow = customEyebrow || (index >= 0 ? modules[index].en : 'Your learning toolkit');
  const countLabel =
    customCount || (n > 0 ? `LESSON ${String(n).padStart(2, '0')} / 08` : 'TOOLKIT');

  return (
    <div className="page-intro">
      <div>
        <div className="eyebrow">
          <span className="line" />
          {eyebrow}
        </div>
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-desc">{description}</p>}
      </div>
      <span className="chapter-count">{countLabel}</span>
    </div>
  );
};
