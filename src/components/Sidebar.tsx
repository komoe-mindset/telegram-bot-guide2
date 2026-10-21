import React from 'react';
import { modules } from '../data/courseData';
import { Icon } from './Icons';

interface SidebarProps {
  currentPage: string;
  completed: Set<string>;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (pageId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  completed,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const completedCount = completed.size;
  const progressPercent = (completedCount / 8) * 100;

  return (
    <>
      <div
        className={`sidebar-scrim ${isOpen ? 'open' : ''}`}
        id="sidebar-scrim"
        onClick={onClose}
      />
      <aside
        className={`sidebar ${isOpen ? 'open' : ''}`}
        id="sidebar"
        aria-label="သင်ခန်းစာ လမ်းညွှန်"
      >
        <a
          href="#overview"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('overview');
          }}
        >
          <span className="brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="m3 10 18-7-6 18-4-7-8-4Z" />
              <path d="m11 14 10-11" />
            </svg>
          </span>
          <span>
            Mingalar
            <span className="brand-sub">BOT LAB</span>
          </span>
        </a>

        <div className="course-label">
          သင်ယူမှုလမ်းကြောင်း <span>BEGINNER</span>
        </div>

        <nav id="course-nav" className="course-nav" aria-label="သင်ခန်းစာများ">
          {modules.map((m, i) => {
            const isActive = currentPage === m.id;
            const isDone = completed.has(m.id);
            return (
              <a
                key={m.id}
                className={`nav-item ${isActive ? 'active' : ''} ${
                  isDone ? 'complete' : ''
                }`}
                href={`#${m.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(m.id);
                }}
              >
                <span className="nav-number">
                  {isDone ? (
                    <Icon name="check" />
                  ) : (
                    String(i + 1).padStart(2, '0')
                  )}
                </span>
                <span className="nav-title">{m.name}</span>
                {isActive && <span className="nav-arrow">›</span>}
              </a>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="your-progress">
            <span>သင့်လေ့လာမှု</span>
            <strong id="progress-label">{completedCount} / 8</strong>
          </div>
          <div className="progress-track">
            <span
              id="progress-bar"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p>ပြီးဆုံးမှုကို ဒီ browser ထဲမှာ သိမ်းပေးပါတယ်။</p>
          <a
            href="#resources"
            className="resources-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('resources');
            }}
          >
            <Icon name="book" />
            အရင်းအမြစ်နှင့် ဖိုင်များ
            <span>↗</span>
          </a>
          <div className="sidebar-note">
            <span className="tiny-dot" />
            မြန်မာလို၊ တစ်ဆင့်ချင်း
          </div>
        </div>
      </aside>
    </>
  );
};
