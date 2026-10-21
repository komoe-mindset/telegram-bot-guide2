import React from 'react';
import { modules } from '../data/courseData';
import { Icon } from './Icons';

interface ModuleFooterProps {
  currentPage: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onNavigate: (pageId: string) => void;
}

export const ModuleFooter: React.FC<ModuleFooterProps> = ({
  currentPage,
  isCompleted,
  onToggleComplete,
  onNavigate,
}) => {
  const index = modules.findIndex((m) => m.id === currentPage);
  if (index < 0) return null;

  const nextModule = modules[index + 1];

  return (
    <div className="module-footer">
      <button
        type="button"
        className={`completion-button ${isCompleted ? 'done' : ''}`}
        id="mark-complete"
        onClick={onToggleComplete}
        aria-pressed={isCompleted}
      >
        <Icon name={isCompleted ? 'check' : 'circle'} />
        <span>
          {isCompleted ? 'လေ့လာပြီးပါပြီ' : 'ဒီသင်ခန်းစာ လေ့လာပြီးကြောင်း မှတ်မယ်'}
        </span>
      </button>

      {nextModule ? (
        <a
          className="next-link"
          href={`#${nextModule.id}`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(nextModule.id);
          }}
        >
          <span>
            နောက်သင်ခန်းစာ
            <strong>{nextModule.name}</strong>
          </span>
          <Icon name="arrow" />
        </a>
      ) : (
        <a
          className="next-link"
          href="#resources"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('resources');
          }}
        >
          <span>
            လက်တွေ့ဆက်လုပ်ဖို့
            <strong>Starter kit နဲ့ အရင်းအမြစ်များ</strong>
          </span>
          <Icon name="arrow" />
        </a>
      )}
    </div>
  );
};
