import React from 'react';

interface ToastProps {
  message: string | null;
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  return (
    <div
      id="toast"
      className={`toast ${visible ? 'visible' : ''}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
};
