import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { readyItems } from '../data/courseData';
import { Icon } from '../components/Icons';

interface RequirementsProps {
  readiness: Record<string, boolean>;
  onToggleReadiness: (id: string, checked: boolean) => void;
  onNavigate: (pageId: string) => void;
}

export const Requirements: React.FC<RequirementsProps> = ({
  readiness,
  onToggleReadiness,
  onNavigate,
}) => {
  const readyCount = readyItems.filter((item) => readiness[item.id]).length;
  const isAllReady = readyCount === readyItems.length;

  return (
    <>
      <PageIntro
        id="requirements"
        title="မစခင် ဘာတွေ ပြင်ဆင်ထားရမလဲ။"
        description="စက်အင်အားကြီးကြီး မလိုသေးပါဘူး။ ပထမဆုံး စာပြန် bot အတွက် မရှိမဖြစ်လိုအပ်တာနဲ့ နောက်မှလိုမယ့်အရာတွေကို ခွဲကြည့်မယ်။"
      />

      <div className="panel">
        <h2>System requirements</h2>
        <p>
          ဒီသင်ခန်းစာအတွက် Python 3.11+ ကို ရွေးထားပါတယ်။ RAM နဲ့ disk အကြံပြုချက်တွေက လေ့လာရန် စီမံထားတဲ့ လမ်းညွှန်ဖြစ်ပြီး Telegram ရဲ့ တရားဝင် minimum specification မဟုတ်ပါဘူး။
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>လိုအပ်ချက်</th>
                <th>ပထမဆုံး စာပြန် Bot</th>
                <th>Video Downloader သို့ တိုးချဲ့မယ်ဆို</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating system</td>
                <td>Windows 10/11၊ macOS၊ Linux</td>
                <td>Reference repo ရဲ့ service အတွက် Ubuntu / Linux + systemd</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>
                  3.11+ ကို အကြံပြု
                  <br />
                  <em>ဒီ workspace မှာ Python 3.13.3 နဲ့ စမ်းထားပါတယ်။</em>
                </td>
                <td>Repo က Python 3.11+ သတ်မှတ်ထားပါတယ်။</td>
              </tr>
              <tr>
                <td>RAM / CPU</td>
                <td>ပုံမှန် laptop နဲ့ စနိုင်ပါတယ်။ 4 GB RAM ရှိရင် စလေ့လာရ အဆင်ပြေပါတယ်။</td>
                <td>Conversion နဲ့ simultaneous jobs ပေါ်မူတည်ပါတယ်။ အစမှာ 1 job ပဲ run ပါ။</td>
              </tr>
              <tr>
                <td>Disk space</td>
                <td>Python + virtual environment အတွက် နေရာလွတ်ရှိဖို့ လိုပါတယ်။</td>
                <td>Video၊ conversion နဲ့ temporary copies အတွက် GB များစွာ လိုနိုင်ပါတယ်။</td>
              </tr>
              <tr>
                <td>Software / tools</td>
                <td>Python၊ pip၊ PowerShell / Terminal၊ text editor</td>
                <td>Git၊ ffmpeg / ffprobe၊ yt-dlp dependencies</td>
              </tr>
              <tr>
                <td>Telegram</td>
                <td>သင့် account + BotFather bot token</td>
                <td>Bot token + uploader account + API_ID / API_HASH + private channel</td>
              </tr>
              <tr>
                <td>Internet</td>
                <td>Python က Telegram API ကို ဆက်သွယ်နိုင်ဖို့ လိုပါတယ်။</td>
                <td>Video download / upload အတွက် bandwidth နဲ့ stable connection ပိုလိုပါတယ်။</td>
              </tr>
              <tr>
                <td>Hosting</td>
                <td>
                  <span className="pill teal">အစမှာ မလိုသေး</span>
                  <br />
                  သင့် PC ပေါ်မှာ program ကို run ပါ။
                </td>
                <td>၂၄ နာရီသုံးမယ်ဆို အမြဲဖွင့်ထားတဲ့ PC / server လိုပါတယ်။</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <h2>Knowledge requirements</h2>
        <p>Python ကျွမ်းကျင်ပြီးမှ စရမယ်ဆိုတာ မဟုတ်ပါဘူး။ အောက်ကအခြေခံတွေကို ဒီသင်ခန်းစာနဲ့အတူ လေ့လာနိုင်ပါတယ်။</p>
        <div className="knowledge-grid">
          <div className="knowledge-item">
            <Icon name="folder" />
            <div>
              <h3>ဖိုင်နဲ့ folder ကို နားလည်ခြင်း</h3>
              <p>bot.py၊ requirements.txt နဲ့ .env က သီးခြားဖိုင်တွေပါ။ မှန်ကန်တဲ့ folder ထဲကနေ command run ဖို့ သိထားရပါမယ်။</p>
            </div>
          </div>
          <div className="knowledge-item">
            <Icon name="terminal" />
            <div>
              <h3>Terminal မှာ command run ခြင်း</h3>
              <p>Copy → paste → Enter နဲ့ output ဖတ်နိုင်ရင် စနိုင်ပါပြီ။ Code ပြင်ပြီးရင် Ctrl+C နဲ့ရပ်၊ ပြန် run လုပ်ပါ။</p>
            </div>
          </div>
          <div className="knowledge-item">
            <Icon name="code" />
            <div>
              <h3>Python အခြေခံ အနည်းငယ်</h3>
              <p>Variable၊ function၊ if statement၊ indentation တို့ကို တဖြည်းဖြည်းသိသွားမယ်။ async / await ကို နောက်သင်ခန်းစာမှာ ရှင်းပြထားပါတယ်။</p>
            </div>
          </div>
          <div className="knowledge-item">
            <Icon name="key" />
            <div>
              <h3>Token နဲ့ configuration</h3>
              <p>Token က bot password လိုပါ။ .env ထဲ locally သိမ်းပြီး .gitignore နဲ့ Git ထဲ မပါအောင် ပြင်ထားပါတယ်။</p>
            </div>
          </div>
        </div>
      </div>

      <div className="two-column">
        <div className="panel">
          <span className="card-icon teal">
            <Icon name="check" />
          </span>
          <h3>အခု မလိုသေးတဲ့အရာတွေ</h3>
          <p>Domain name၊ public server၊ Telegram Premium၊ AI model API key၊ personal account OTP နဲ့ API_ID / API_HASH တို့က ပထမဆုံး စာပြန် bot အတွက် မလိုပါဘူး။</p>
        </div>
        <div className="panel">
          <span className="card-icon amber">
            <Icon name="clock" />
          </span>
          <h3>အလုပ်လုပ်နေဖို့ လိုတာ</h3>
          <p>BotFather က identity နဲ့ token ပေးတာပါ။ သင့် Python code ကို run ပေးတာ မဟုတ်လို့ PC sleep ဖြစ်ရင်၊ internet ပြတ်ရင်၊ program ပိတ်ရင် bot က မဖြေတော့ပါဘူး။</p>
        </div>
      </div>

      <div className="panel">
        <h2>စတင်ဖို့ အဆင်သင့်ဖြစ်ပြီလား။</h2>
        <p>ကိုယ်တိုင်စစ်ပြီး အမှန်ခြစ်ပါ။ ဒီ checklist က သင့်စက်ကို အလိုအလျောက် scan လုပ်တာ မဟုတ်ပါဘူး။</p>
        <div className="checklist">
          {readyItems.map((item) => (
            <label key={item.id} className="check-item">
              <input
                type="checkbox"
                checked={!!readiness[item.id]}
                onChange={(e) => onToggleReadiness(item.id, e.target.checked)}
              />
              <span>
                <strong>{item.title}</strong>
                <small>{item.desc}</small>
              </span>
            </label>
          ))}
        </div>
        <div className="readiness-result">
          <span className="readiness-count" id="ready-count">
            {readyCount} / {readyItems.length}
          </span>
          <span id="ready-feedback">
            {isAllReady
              ? 'အဆင်သင့်ဖြစ်ပါပြီ။ ပထမ bot ကို စတင်လိုက်ပါ။'
              : 'မပြည့်သေးတဲ့အချက်တွေကို တစ်ခုချင်း ပြင်ဆင်လိုက်ပါ။'}
          </span>
          <a
            className="button small"
            href="#setup"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('setup');
            }}
          >
            Bot စတင်ဖန်တီးမယ် <Icon name="arrow" />
          </a>
        </div>
      </div>
    </>
  );
};
