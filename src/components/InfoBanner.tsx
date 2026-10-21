import React from 'react';
import { Icon } from './Icons';

interface InfoBannerProps {
  children: React.ReactNode;
  tone?: '' | 'amber';
}

export const InfoBanner: React.FC<InfoBannerProps> = ({ children, tone = '' }) => {
  return (
    <div className={`info-banner ${tone}`}>
      <Icon name="info" />
      <p>{children}</p>
    </div>
  );
};
