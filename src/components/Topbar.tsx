import React from 'react';
import { modules } from '../data/courseData';
import { Icon } from './Icons';

interface TopbarProps {
  currentPage: string;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  currentPage,
  isSidebarOpen,
  onToggleSidebar,
}) => {
  const currentModule = modules.find((m) => m.id === currentPage);
  const title = currentModule ? currentModule.name : 'အရင်းအမြစ်များ';

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          type="button"
          className="icon-button menu-button"
          id="menu-button"
          aria-label="သင်ခန်းစာ menu ဖွင့်မယ်"
          aria-expanded={isSidebarOpen}
          onClick={onToggleSidebar}
        >
          <Icon name="menu" />
        </button>
        <span className="breadcrumb">
          လေ့လာမယ် <span>/</span> <strong id="breadcrumb-current">{title}</strong>
        </span>
      </div>
      <div className="topbar-right">
        <span className="language-badge">မြန်မာ / EN</span>
        <a
          className="github-link"
          href="https://github.com/lumawaung/multi-platform-video-downloader"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" />
          <span>Reference repo</span>
          <Icon name="external" />
        </a>
      </div>
    </header>
  );
};
