import React, { useState } from 'react';
import { PageIntro } from '../components/PageIntro';
import { pipelineData } from '../data/courseData';
import { Icon } from '../components/Icons';
import { InfoBanner } from '../components/InfoBanner';
import { CodeBlock } from '../components/CodeBlock';

interface DownloaderProps {
  onNotify?: (msg: string) => void;
}

export const Downloader: React.FC<DownloaderProps> = ({ onNotify }) => {
  const [activePipeline, setActivePipeline] = useState(0);

  const fileMap = [
    ['README.md', 'Setup၊ requirements နဲ့ architecture'],
    ['requirements.txt', 'အသုံးပြုထားတဲ့ packages နဲ့ versions'],
    ['config.py', '.env settings နဲ့ resource limits'],
    ['bot.py', 'Commands၊ callbacks နဲ့ user flow'],
    ['downloader.py', 'yt-dlp၊ ffmpeg နဲ့ cleanup'],
    ['uploader.py', 'MTProto upload နဲ့ relay channel'],
    ['setup_session.py', 'Interactive login နဲ့ channel ရွေးချယ်မှု'],
    ['limits.py / cache.py', 'Usage limits နဲ့ ထပ်ပို့နိုင်တဲ့ cache'],
  ];

  return (
    <>
      <PageIntro
        id="downloader"
        title="GitHub repo ရဲ့ နောက်ကွယ်ကို လေ့လာမယ်။"
        description="lumawaung/multi-platform-video-downloader ကို reference အဖြစ် သုံးထားပါတယ်။ ပထမ bot အလုပ်လုပ်ပြီးမှ ဒီ architecture ကို ဆက်လေ့လာပါ။"
      />

      <div className="panel">
        <div className="section-top" style={{ marginTop: 0 }}>
          <div>
            <h2>Link ကနေ video ဖိုင်အထိ</h2>
            <p>အဆင့်တစ်ခုကို နှိပ်ပြီး တာဝန်ခွဲထားပုံကို ကြည့်ပါ။</p>
          </div>
          <a
            className="text-link"
            href="https://github.com/lumawaung/multi-platform-video-downloader"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Icon name="external" />
          </a>
        </div>

        <div className="pipeline">
          {pipelineData.map((step, i) => (
            <button
              key={step.title}
              type="button"
              className={activePipeline === i ? 'active' : ''}
              onClick={() => setActivePipeline(i)}
              aria-pressed={activePipeline === i}
            >
              <span className="pipeline-number">{String(i + 1).padStart(2, '0')}</span>
              <Icon name={step.icon} />
              <strong>{step.title}</strong>
              <small>{step.sub}</small>
            </button>
          ))}
        </div>

        <div className="journey-explanation" id="pipeline-explanation" aria-live="polite">
          <strong>{pipelineData[activePipeline].title}</strong>
          <p>{pipelineData[activePipeline].desc}</p>
        </div>
      </div>

      <InfoBanner tone="amber">
        <strong>“No 50 MB limit” ≠ unlimited.</strong> Cloud Bot API က video/file အသစ် upload လုပ်ရာမှာ လက်ရှိ 50 MB ကန့်သတ်ချက်ရှိပါတယ်။ ဒီ repo က user uploader နဲ့ relay channel နည်းကို သုံးထားပြီး code အရ 2000 MiB / Premium ရှိရင် 4000 MiB ကို ရွေးပါတယ်။ သီးခြား Local Bot API Server နည်းရဲ့ official upload limit ကတော့ 2000 MB ဖြစ်ပါတယ်။
      </InfoBanner>

      <div className="panel">
        <h2>ရိုးရိုး bot ထက် ဘာပိုလိုသလဲ။</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Setting / file</th>
                <th>ဘာအတွက်လဲ</th>
                <th>ပထမဆုံး စာပြန် Bot မှာ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>BOT_TOKEN</code>
                </td>
                <td>Bot ကို ထိန်းချုပ်ဖို့</td>
                <td>လိုပါတယ်</td>
              </tr>
              <tr>
                <td>
                  <code>API_ID</code> / <code>API_HASH</code>
                </td>
                <td>my.telegram.org မှ user client credentials</td>
                <td>မလိုပါဘူး</td>
              </tr>
              <tr>
                <td>
                  <code>RELAY_CHANNEL_ID</code>
                </td>
                <td>Upload ပြုလုပ်မယ့် private channel ID</td>
                <td>မလိုပါဘူး</td>
              </tr>
              <tr>
                <td>
                  <code>uploader.session</code>
                </td>
                <td>User account login session</td>
                <td>မလိုပါဘူး</td>
              </tr>
              <tr>
                <td>
                  <code>ffmpeg</code> / <code>yt-dlp</code>
                </td>
                <td>Download နဲ့ media processing</td>
                <td>မလိုပါဘူး</td>
              </tr>
              <tr>
                <td>
                  <code>ADMIN_IDS</code>
                </td>
                <td>Limits ကင်းလွတ်ခွင့်နဲ့ cancel permissions</td>
                <td>ဒီ setting က access allowlist မဟုတ်ပါဘူး</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <h2>Repo ကို ဖတ်မယ့် အစီအစဉ်</h2>
        <div className="file-map">
          {fileMap.map(([file, desc]) => (
            <div key={file}>
              <Icon name="file" />
              <code>{file}</code>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <h2>လက်တွေ့ စမ်းမယ့်အဆင့်များ</h2>
        <p>အောက်က commands က Ubuntu / Bash အတွက်ပါ။ Windows PowerShell ထဲမှာ တိုက်ရိုက်မသုံးပါနဲ့။ Windows မှာ WSL Ubuntu သို့မဟုတ် Linux စက် သုံးနိုင်ပါတယ်။</p>

        <details className="disclosure">
          <summary>၁။ Linux environment နဲ့ dependencies</summary>
          <div className="disclosure-content">
            Repo deployment က Ubuntu / Linux + systemd အတွက်ပါ။ Python 3.11+၊ ffmpeg / ffprobe နဲ့ Git ကို ပြင်ပါ။
            <CodeBlock
              code="sudo apt update\nsudo apt install -y python3-venv ffmpeg git\ngit clone https://github.com/lumawaung/multi-platform-video-downloader.git\ncd multi-platform-video-downloader\npython3 -m venv .venv\n.venv/bin/python -m pip install -r requirements.txt"
              label="Bash · Ubuntu 24.04"
              onCopySuccess={onNotify}
            />
          </div>
        </details>

        <details className="disclosure">
          <summary>၂။ Bot နဲ့ private relay channel</summary>
          <div className="disclosure-content">
            BotFather မှာ bot ဖန်တီးပါ။ Uploader အဖြစ်သုံးမယ့် account က private channel ဖန်တီးပြီး bot ကို Post messages / Delete messages ခွင့်ရှိတဲ့ admin ထည့်ပါ။ Uploader account က channel owner/admin ဖြစ်ရပါမယ်။
          </div>
        </details>

        <details className="disclosure">
          <summary>၃။ .env နဲ့ uploader session</summary>
          <div className="disclosure-content">
            .env မရှိသေးတဲ့ ပထမအကြိမ်မှာ template ကို copy လုပ်ပြီး BOT_TOKEN ကို locally ထည့်ပါ။{' '}
            <a href="https://my.telegram.org" target="_blank" rel="noopener noreferrer">
              my.telegram.org
            </a>{' '}
            → API development tools က API_ID / API_HASH ရယူပါ။ Setup script ကို စစ်ဖတ်ပြီး local terminal မှာပဲ login ဝင်ပါ။
            <CodeBlock
              code="cp .env.example .env\nnano .env\n.venv/bin/python setup_session.py"
              label="Bash · first-time setup"
              onCopySuccess={onNotify}
            />
            Phone number၊ OTP နဲ့ 2FA password ကို AI chat ထဲ မပို့ပါနဲ့။ Script က uploader.session ဖန်တီးပြီး relay channel ကို ရွေးခိုင်းပါတယ်။
          </div>
        </details>

        <details className="disclosure">
          <summary>၄။ သေးသေးလေးစမ်းပြီးမှ service တင်မယ်</summary>
          <div className="disclosure-content">
            အစမှာ MAX_CONCURRENT_DOWNLOADS=1၊ MAX_CONCURRENT_UPLOADS=1 နဲ့ စမ်းပါ။ ခွင့်ပြုထားတဲ့ video အတိုကို quality နိမ့်နိမ့်နဲ့ စမ်းပါ။
            <CodeBlock
              code=".venv/bin/python bot.py"
              label="Bash · foreground run"
              onCopySuccess={onNotify}
            />
            အောင်မြင်မှ README ရဲ့ dedicated Linux user နဲ့ systemd service setup ကို ဆက်လုပ်ပါ။ Service paths နဲ့ ကိုယ့် folder ကို ကိုက်အောင် စစ်ပါ။
          </div>
        </details>
      </div>

      <InfoBanner tone="amber">
        <strong>Maintenance အချက်ကို သိထားပါ။</strong> ဒီ repo က pyrogram==2.0.106 သုံးပါတယ်။{' '}
        <a
          href="https://docs.pyrogram.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          Pyrogram official docs
        </a>{' '}
        မှာ ဆက်မထိန်းသိမ်းတော့ကြောင်း ဖော်ပြထားလို့ ရေရှည်သုံးမယ်ဆို compatibility ကို စမ်းသပ်ပြီး maintenance အစီအစဉ်ရှိဖို့ လိုပါတယ်။
      </InfoBanner>

      <div className="panel">
        <h3>အသုံးပြုတဲ့ media နဲ့ account ကို စဉ်းစားပါ။</h3>
        <p>
          Code ရဲ့ MIT license က media အားလုံးကို download / repost လုပ်ခွင့်ရတာ မဟုတ်ပါဘူး။ သင်ပိုင်ဆိုင်တဲ့ သို့မဟုတ် ခွင့်ပြုထားတဲ့ media နဲ့ စမ်းပါ။ <code>uploader.session</code> က personal account access ပါလို့ private သိမ်းပါ။ 2FA ရှိတာနဲ့ session ဖိုင်ကို မျှဝေလို့ရတာ မဟုတ်ပါဘူး။
        </p>
        <p className="code-note">
          စစ်ဆေးထားတဲ့ repo commit:{' '}
          <a
            href="https://github.com/lumawaung/multi-platform-video-downloader/tree/b678d6a67d446303f08337aa47650876ef532ea7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>b678d6a</code>
          </a>{' '}
          · 21 Oct 2026
        </p>
      </div>
    </>
  );
};
