import React from 'react';
import { Icon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <span>
        Mingalar Bot Lab <span className="footer-separator">/</span> လေ့လာရင်း တည်ဆောက်မယ်။
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <a
          href="https://ai-skill-builder.komoe.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="AI Skill Builder (https://ai-skill-builder.komoe.org/)"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'inherit' }}
        >
          <Icon name="spark" style={{ width: '13px', height: '13px', color: 'var(--teal)' }} />
          <span>AI Skill Builder</span>
          <span>↗</span>
        </a>
        <span className="footer-separator">·</span>
        <span>အချက်အလက် စစ်ဆေးထားသည့်နေ့ · 21 Oct 2026</span>
      </span>
    </footer>
  );
};
