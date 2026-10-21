import React, { useState } from 'react';
import { Icon } from './Icons';
import { downloadStarterZip } from '../utils/downloader';

interface DownloadCardProps {
  onNotify?: (msg: string) => void;
}

export const DownloadCard: React.FC<DownloadCardProps> = ({ onNotify }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    try {
      await downloadStarterZip();
      onNotify?.('telegram-bot-starter.zip ကို download ပြုလုပ်နေပါပြီ။');
    } catch {
      onNotify?.('Download ပြုလုပ်ရာတွင် အဆင်မပြေပါ။');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="file-download">
      <span>
        <Icon name="folder" />
      </span>
      <div>
        <h3>telegram-bot-starter.zip</h3>
        <p>Python code · .env template · မြန်မာလမ်းညွှန်</p>
      </div>
      <button
        type="button"
        className="button small"
        onClick={handleDownload}
        disabled={downloading}
      >
        <Icon name="download" />
        {downloading ? 'Preparing ZIP...' : 'Starter kit'}
      </button>
    </div>
  );
};
