import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { sourceLinks } from '../data/courseData';
import { Icon } from '../components/Icons';
import { DownloadCard } from '../components/DownloadCard';
import { downloadSpecificFile } from '../utils/downloader';

interface ResourcesProps {
  onNotify?: (msg: string) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onNotify }) => {
  const handleDownload = (filename: string, e: React.MouseEvent) => {
    e.preventDefault();
    downloadSpecificFile(filename);
    onNotify?.(`${filename} ကို download ပြုလုပ်နေပါပြီ။`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <PageIntro
        id="resources"
        title="ဆက်လေ့လာဖို့၊ လက်တွေ့စလုပ်ဖို့။"
        description="Starter code၊ မြန်မာလမ်းညွှန်နဲ့ တရားဝင် documentation တွေကို ဒီနေရာမှာ စုထားပါတယ်။"
      />

      <div className="panel">
        <h2>သင့်ရဲ့ starter toolkit</h2>
        <DownloadCard onNotify={onNotify} />
        <div className="source-list">
          <a
            className="source-link"
            href="#download-bot"
            onClick={(e) => handleDownload('bot.py', e)}
          >
            <Icon name="code" />
            <span>
              <strong>bot.py</strong>
              <small>Commands၊ echo နဲ့ owner access</small>
            </span>
            <span className="source-external">
              <Icon name="download" />
            </span>
          </a>

          <a
            className="source-link"
            href="#download-readme"
            onClick={(e) => handleDownload('README-MM.md', e)}
          >
            <Icon name="book" />
            <span>
              <strong>မြန်မာလမ်းညွှန်</strong>
              <small>မူရင်း workspace သင်ခန်းစာ</small>
            </span>
            <span className="source-external">
              <Icon name="download" />
            </span>
          </a>

          <a
            className="source-link"
            href="#download-skill"
            onClick={(e) => handleDownload('SKILL.md', e)}
          >
            <Icon name="spark" />
            <span>
              <strong>SKILL.md draft</strong>
              <small>AI Agent အတွက် workflow</small>
            </span>
            <span className="source-external">
              <Icon name="download" />
            </span>
          </a>

          <a
            className="source-link"
            href="#download-reqs"
            onClick={(e) => handleDownload('requirements.txt', e)}
          >
            <Icon name="file" />
            <span>
              <strong>requirements.txt</strong>
              <small>Python packages နဲ့ version</small>
            </span>
            <span className="source-external">
              <Icon name="download" />
            </span>
          </a>
        </div>
      </div>

      <div className="panel">
        <h2>တရားဝင် အရင်းအမြစ်များ</h2>
        <p>Library versions နဲ့ platform rules ပြောင်းနိုင်တာကြောင့် တကယ်တိုးချဲ့တဲ့အချိန်မှာ official docs ကို ပြန်စစ်ပါ။</p>
        <div className="source-list">
          {sourceLinks.map((item) => (
            <a
              key={item.name}
              className="source-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={item.icon} />
              <span>
                <strong>{item.name}</strong>
                <small>{item.desc}</small>
              </span>
              <span className="source-external">
                <Icon name="external" />
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="panel">
        <h2>ဒီ website အကြောင်း</h2>
        <p>
          သင်ခန်းစာ၊ demo နဲ့ checklist က browser ထဲမှာပဲ အလုပ်လုပ်ပါတယ်။ Progress နဲ့ readiness checklist ကို ဒီ browser ရဲ့ local storage မှာ သိမ်းပါတယ်။ Demo messages ကို မသိမ်းပါဘူး။ Token အစစ် ထည့်စရာနေရာ မရှိပါဘူး။
        </p>
        <p>
          Starter Python code ရဲ့ syntax၊ commands၊ echo၊ owner access နဲ့ private/group filters ကို offline စမ်းသပ်ပြီးပါပြီ။ သင့် bot token နဲ့ live Telegram စမ်းသပ်ခြင်းကိုတော့ သင်ကိုယ်တိုင် setup လုပ်ပြီးမှ ဆက်လုပ်ရပါမယ်။
        </p>
        <button
          type="button"
          className="button secondary small"
          id="print-guide"
          onClick={handlePrint}
        >
          <Icon name="file" />
          ဒီစာမျက်နှာကို Print / PDF
        </button>
      </div>
    </>
  );
};
