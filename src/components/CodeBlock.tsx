import React, { useState } from 'react';
import { Icon } from './Icons';

interface CodeBlockProps {
  code: string;
  label?: string;
  onCopySuccess?: (msg: string) => void;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  label = 'PowerShell',
  onCopySuccess,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const area = document.createElement('textarea');
      area.value = code;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.append(area);
      area.select();
      area.setSelectionRange(0, code.length);
      let didCopy = false;
      try {
        didCopy = document.execCommand('copy');
      } finally {
        area.remove();
      }

      if (!didCopy) {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await Promise.race([
          navigator.clipboard.writeText(code),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Clipboard timeout')), 1500)),
        ]);
      }

      setCopied(true);
      onCopySuccess?.('Command ကို ကူးယူပြီးပါပြီ။');
      setTimeout(() => setCopied(false), 1800);
    } catch {
      onCopySuccess?.('အလိုအလျောက် ကူးယူမရပါဘူး။ Code ကို select လုပ်ပြီး Copy လုပ်ပါ။');
    }
  };

  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>
          <span className="code-dots">
            <i />
            <i />
            <i />
          </span>
          {label}
        </span>
        <button
          type="button"
          className="copy-button"
          onClick={handleCopy}
          aria-label={`${label} code ကူးယူမယ်`}
        >
          <Icon name="copy" />
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};
