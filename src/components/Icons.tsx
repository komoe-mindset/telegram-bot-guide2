import React from 'react';

export const ICONS: Record<string, React.ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  back: <path d="M19 12H5m5-5-5 5 5 5" />,
  plane: (
    <>
      <path d="m3 10 18-7-6 18-4-7-8-4Z" />
      <path d="m11 14 10-11" />
    </>
  ),
  book: <path d="M12 5v15m0-15C8 2 4 3 2 4v15c3-1 7-1 10 1m0-15c4-3 8-2 10-1v15c-3-1-7-1-10 1" />,
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
  laptop: (
    <>
      <rect x="4" y="3" width="16" height="13" rx="2" />
      <path d="m4 16-3 5h22l-3-5M9 19h6" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="7" width="16" height="13" rx="4" />
      <path d="M12 7V3m-2 0h4M1 12v5m22-5v5M9 16h6" />
      <circle cx="8" cy="12" r=".5" />
      <circle cx="16" cy="12" r=".5" />
    </>
  ),
  download: <path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" />,
  spark: (
    <>
      <path d="m12 3 2.8 6.2L21 12l-6.2 2.8L12 21l-2.8-6.2L3 12l6.2-2.8L12 3ZM20 2v4m-2-2h4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  circle: <circle cx="12" cy="12" r="9" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6m0-10v.1" />
    </>
  ),
  shield: (
    <>
      <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  terminal: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m6 9 4 3-4 3m7 0h5" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11a9 9 0 0 1-9 9H3l1.8-4A9 9 0 1 1 21 11Z" />
      <path d="M8 10h8m-8 4h5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c-5 6-5 12 0 18m0-18c5 6 5 12 0 18" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.1m0 11h.1M12 7h5m-5 11h5" />
    </>
  ),
  folder: <path d="M3 7V4h6l3 3h9v13H3V7Z" />,
  user: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21v-3a8 8 0 0 1 16 0v3" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="13" rx="2" />
      <path d="M16 8V3H3v13h5" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4V8Z" />
    </>
  ),
  search: (
    <>
      <circle cx="10" cy="10" r="6.5" />
      <path d="m15 15 6 6" />
    </>
  ),
  external: (
    <>
      <path d="M14 3h7v7m-1-6-9 9M9 3H3v18h18v-6" />
    </>
  ),
  github: (
    <path d="M9 19c-5 1-5-2-7-2m14 5v-4c0-1 .1-1.5-.5-2 4-.4 6-2 6-6a5 5 0 0 0-1.5-3.5c.4-1 .3-2.3-.2-3.5-1.5 0-3 1-3.8 1.5a13 13 0 0 0-8 0C7.2 4 5.5 3 4 3c-.5 1.2-.6 2.5-.2 3.5A5 5 0 0 0 2.5 10c0 4 2 5.6 6 6-.6.5-.5 1-.5 2v4" />
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  layers: (
    <>
      <path d="m12 2 10 6-10 6L2 8l10-6Zm-9 11 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  tool: (
    <path d="m14 6 4 4m-9 2-7 7 3 3 7-7m0-12a6 6 0 0 0-5 9l5 5a6 6 0 0 0 9-5l-4 1-4-4 1-4Z" />
  ),
  refresh: (
    <path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5m-4 8a8 8 0 0 0 14 3l3-3m0 5v-5h-5" />
  ),
  key: (
    <>
      <circle cx="8" cy="9" r="5" />
      <path d="m12 13 9 9m-5-5 3-3m-1 5 3-3" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H4v20h16V8l-6-6Zm0 0v6h6M8 13h8m-8 4h8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  heart: <path d="M12 21 3 12C-3 5 7-1 12 6c5-7 15-1 9 6l-9 9Z" />,
};

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {ICONS[name] || ICONS.circle}
    </svg>
  );
};
