import React, { useState } from 'react';
import { PageIntro } from '../components/PageIntro';
import { setupSteps } from '../data/courseData';
import { STARTER_FILES } from '../data/starterFiles';
import { Icon } from '../components/Icons';
import { CodeBlock } from '../components/CodeBlock';
import { InfoBanner } from '../components/InfoBanner';
import { DownloadCard } from '../components/DownloadCard';

interface SetupProps {
  onNavigate: (pageId: string) => void;
  onNotify?: (msg: string) => void;
}

export const Setup: React.FC<SetupProps> = ({ onNavigate, onNotify }) => {
  const [setupStep, setSetupStep] = useState(0);
  const [setupOS, setSetupOS] = useState<'windows' | 'mac' | 'linux'>('windows');

  const win = setupOS === 'windows';
  const python = win ? 'python' : 'python3';
  const venv = win ? '.\\.venv\\Scripts\\python.exe' : '.venv/bin/python';
  const shell = win ? 'PowerShell' : 'Bash · Terminal';

  const renderOSTabs = () => (
    <div className="os-tabs" role="group" aria-label="Operating system ရွေးရန်">
      {(
        [
          ['windows', 'Windows'],
          ['mac', 'macOS'],
          ['linux', 'Linux'],
        ] as const
      ).map(([id, label]) => (
        <button
          key={id}
          type="button"
          className={`os-tab ${setupOS === id ? 'active' : ''}`}
          onClick={() => setSetupOS(id)}
          aria-pressed={setupOS === id}
        >
          {label}
        </button>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (setupStep) {
      case 0:
        return (
          <>
            <div className="step-number">STEP 01 / 06</div>
            <h2>BotFather ကနေ သင့် bot ကို ဖန်တီးပါ။</h2>
            <p>သင့် Telegram account နဲ့ လုပ်ရမယ့်အပိုင်းပါ။ Python code မလိုသေးပါဘူး။</p>
            <ol className="instruction-list">
              <li>
                Official{' '}
                <a
                  className="text-link"
                  style={{ display: 'inline-flex' }}
                  href="https://t.me/BotFather"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @BotFather <Icon name="external" />
                </a>{' '}
                ကို ဖွင့်ပြီး <strong>Start</strong> နှိပ်ပါ။
              </li>
              <li>
                <code>/newbot</code> ပို့ပါ။ Bot ရဲ့ display name ကို ပေးပါ။ ဥပမာ{' '}
                <strong>Mingalar Learning Bot</strong>။
              </li>
              <li>
                မသုံးရသေးတဲ့ username ရွေးပါ။ <code>mingalar_learning_2026_bot</code> လို{' '}
                <strong>bot နဲ့ဆုံးတဲ့ username</strong> ပေးရပါမယ်။
              </li>
              <li>
                BotFather က bot link နဲ့ <strong>token</strong> ပေးပါမယ်။ Token ကို locally သိမ်းပြီး နောက်အဆင့်မှာ .env ထဲ ထည့်ပါမယ်။
              </li>
            </ol>
            <InfoBanner>
              BotFather က identity နဲ့ token ပေးတာပါ။ သင့် code ကို hosting လုပ်ပေးတာ မဟုတ်ပါဘူး။ ဒီ starter အတွက် personal account OTP / API_ID / API_HASH မလိုပါဘူး။
            </InfoBanner>
          </>
        );

      case 1:
        return (
          <>
            <div className="step-number">STEP 02 / 06</div>
            <h2>အသင့်သုံး Python project ကို ပြင်မယ်။</h2>
            <p>
              အလွယ်ဆုံးနည်းက starter ZIP ကို download လုပ်၊ extract လုပ်ပြီး ဖိုင်တွေရှိတဲ့ folder ထဲမှာ Terminal ဖွင့်တာပါ။ Git မသုံးတတ်သေးလည်း စနိုင်ပါတယ်။
            </p>
            <DownloadCard onNotify={onNotify} />
            {renderOSTabs()}
            <ol className="instruction-list">
              <li>
                ZIP ကို <strong>Extract All / Unzip</strong> လုပ်ပါ။ <code>bot.py</code> နဲ့ <code>requirements.txt</code> တွေကို တစ် folder ထဲ တွေ့ရပါမယ်။
              </li>
              <li>
                {win ? (
                  <>
                    အဲဒီ folder ထဲမှာ right-click → <strong>Open in Terminal</strong> ကို ရွေးပါ။ မရှိရင် PowerShell ဖွင့်ပြီး <code>cd</code> နဲ့ အဲဒီ folder ထဲ ဝင်ပါ။
                  </>
                ) : (
                  <>
                    Terminal ဖွင့်ပြီး <code>cd</code> နဲ့ extract လုပ်ထားတဲ့ folder ထဲ ဝင်ပါ။
                  </>
                )}
              </li>
              <li>Python version စစ်ပြီး သီးခြား environment နဲ့ packages ပြင်ပါ။</li>
            </ol>
            <CodeBlock
              code={`${python} --version\n${python} -m venv .venv\n${venv} -m pip install -r requirements.txt`}
              label={shell}
              onCopySuccess={onNotify}
            />
            <p className="code-note">
              Python မတွေ့ရင်{' '}
              <a
                className="text-link"
                style={{ display: 'inline-flex' }}
                href="https://www.python.org/downloads/"
                target="_blank"
                rel="noopener noreferrer"
              >
                official installer <Icon name="external" />
              </a>{' '}
              ကို သုံးပါ။ Windows မှာ <code>py -3</code> နဲ့လည်း စမ်းနိုင်ပါတယ်။
            </p>
            <div className="step-tip">
              <strong>.venv ကို Activate လုပ်ရမလား။</strong>
              <br />
              ဒီ command တွေက environment ထဲက Python ကို တိုက်ရိုက်ခေါ်ထားလို့ Activate.ps1 run ဖို့နဲ့ execution policy ပြောင်းဖို့ မလိုပါဘူး။
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="step-number">STEP 03 / 06</div>
            <h2>Token ကို သင့်စက်ထဲမှာပဲ ထည့်ပါ။</h2>
            <p>ဒီ website မှာ token ထည့်စရာ မရှိပါဘူး။ သင့် project ရဲ့ <code>.env</code> ဖိုင်ထဲမှာပဲ ထည့်ပါ။</p>
            {renderOSTabs()}
            <CodeBlock
              code={
                win
                  ? `if (-not (Test-Path -LiteralPath .env)) {\n    Copy-Item -LiteralPath .env.example -Destination .env\n}\nnotepad .env`
                  : `if [ ! -f .env ]; then\n    cp .env.example .env\nfi\nnano .env`
              }
              label={shell}
              onCopySuccess={onNotify}
            />
            <p>
              Editor ထဲမှာ placeholder ကို BotFather ပေးထားတဲ့ token နဲ့ အစားထိုးပြီး Save လုပ်ပါ။ <code>OWNER_USER_ID</code> ကို အစမှာ blank ထားနိုင်ပါတယ်။
            </p>
            <CodeBlock
              code={'BOT_TOKEN=PASTE_BOTFATHER_TOKEN_HERE\nOWNER_USER_ID='}
              label=".env · example only"
              onCopySuccess={onNotify}
            />
            <div className="step-tip">
              <strong>ဖိုင်နာမည်ကို စစ်ပါ။</strong>
              <br />
              <code>.env</code> ဖြစ်ရပါမယ်။ Windows မှာ <code>.env.txt</code> လို့ မဖြစ်သွားစေဖို့ File Explorer → View → File name extensions ကို စစ်ပါ။ Token ကို source code ထဲ hardcode မလုပ်ပါနဲ့။
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="step-number">STEP 04 / 06</div>
            <h2>သင့် bot ကို အလုပ်လုပ်စေမယ်။</h2>
            <p>Project folder ထဲက Terminal မှာ ဒီ command ကို run ပါ။</p>
            {renderOSTabs()}
            <CodeBlock
              code={`${venv} bot.py`}
              label={shell}
              onCopySuccess={onNotify}
            />
            <p>Terminal မှာ bot starting ဆိုတဲ့ log ပေါ်လာပါမယ်။ ဖွင့်ထားပြီး Telegram မှာ သင့် bot ရဲ့ chat ကို ဖွင့်ပါ။</p>
            <CodeBlock
              code="INFO: Bot starting. Open your bot in Telegram and send /start.\nINFO: Application started"
              label="Expected output · representative"
              onCopySuccess={onNotify}
            />
            <div className="step-tip">
              <strong>Ctrl+C = program ကို ရပ်မယ်။</strong>
              <br />
              Code ပြင်ရင် Save → Ctrl+C → command ပြန် run လုပ်ပါ။ Terminal ပိတ်လိုက်ရင် သင့် bot က စာမပြန်တော့ပါဘူး။
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="step-number">STEP 05 / 06</div>
            <h2>Telegram ထဲမှာ အဆင့်လိုက် စမ်းပါ။</h2>
            <p>BotFather ပေးထားတဲ့ bot link ကို ဖွင့်ပြီး Start နှိပ်ပါ။ အခြား bot ကို မှားမစမ်းမိဖို့ username စစ်ပါ။</p>
            <div className="table-wrap">
              <table style={{ minWidth: '390px' }}>
                <thead>
                  <tr>
                    <th>သင်ပို့မယ့်စာ</th>
                    <th>မျှော်လင့်ရမယ့် အဖြေ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>/start</code>
                    </td>
                    <td>မြန်မာလို မိတ်ဆက်စာ</td>
                  </tr>
                  <tr>
                    <td>
                      <code>/help</code>
                    </td>
                    <td>ရနိုင်တဲ့ commands စာရင်း</td>
                  </tr>
                  <tr>
                    <td>
                      <code>မင်္ဂလာပါ</code>
                    </td>
                    <td>ပို့လိုက်တဲ့စာကိုပဲ ပြန်ပို့မယ်</td>
                  </tr>
                  <tr>
                    <td>
                      <code>/whoami</code>
                    </td>
                    <td>သင့် numeric Telegram user ID</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <InfoBanner>
              ဒီ starter က private chat အတွက်ပါ။ Group messages တွေကို တုံ့ပြန်ဖို့ ထည့်မထားပါဘူး။
            </InfoBanner>
            <a
              className="button secondary"
              href="#playground"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('playground');
              }}
            >
              <Icon name="play" />
              Demo မှာ အရင် စမ်းကြည့်မယ်
            </a>
            <details className="disclosure" style={{ marginTop: '16px' }}>
              <summary>Command menu ထည့်ချင်ရင်</summary>
              <div className="disclosure-content">
                BotFather မှာ <code>/setcommands</code> → သင့် bot ကို ရွေးပြီး ဒီစာပို့ပါ။ Menu ထည့်တာက Python handlers ကို အလိုအလျောက် ရေးပေးတာ မဟုတ်ပါဘူး။
                <CodeBlock
                  code="start - Start the bot\nhelp - Show help\nwhoami - Show my Telegram user ID"
                  label="BotFather · command menu"
                  onCopySuccess={onNotify}
                />
              </div>
            </details>
          </>
        );

      case 5:
        return (
          <>
            <div className="step-number">STEP 06 / 06</div>
            <h2>သင့်တစ်ယောက်တည်း သုံးနိုင်အောင် ပြင်မယ်။</h2>
            <ol className="instruction-list">
              <li>
                Bot ဆီ <code>/whoami</code> ပို့ပြီး <strong>သင့် numeric user ID</strong> ကို ယူပါ။
              </li>
              <li>
                Terminal မှာ <strong>Ctrl+C</strong> နှိပ်ပါ။
              </li>
              <li>
                <code>.env</code> ထဲမှာ <code>OWNER_USER_ID=</code> နောက်ကို သင့် ID နံပါတ်ထည့်ပြီး Save လုပ်ပါ။
              </li>
              <li>
                Bot ကို ပြန် run ပါ။ သင့် account က commands သုံးလို့ရပြီး အခြား account ကတော့ ပိုင်ရှင်ပဲသုံးနိုင်ကြောင်း စာပြန်ရပါမယ်။
              </li>
            </ol>
            <CodeBlock
              code="BOT_TOKEN=PASTE_BOTFATHER_TOKEN_HERE\nOWNER_USER_ID=YOUR_NUMERIC_TELEGRAM_ID"
              label=".env · replace both placeholders"
              onCopySuccess={onNotify}
            />
            <p className="code-note">
              နမူနာ placeholder ကို တိုက်ရိုက်မသုံးပါနဲ့။ OWNER_USER_ID မှာ သင့်နံပါတ်အမှန်ကို ထည့်ရပါမယ်။ Blank ထားရင် bot ကို ရှာတွေ့သူတိုင်း private chat မှာ သုံးနိုင်ပါတယ်။
            </p>
            <InfoBanner>
              <strong>အခုလုပ်နိုင်သွားတာ:</strong> Bot ဖန်တီးနိုင်ပြီ၊ program run နိုင်ပြီ၊ message ကို handler နဲ့ ခွဲနိုင်ပြီ၊ owner access သတ်မှတ်နိုင်ပြီ။ နောက်တစ်ဆင့်မှာ /about command တစ်ခု ကိုယ်တိုင်ထည့်စမ်းကြည့်ပါ။
            </InfoBanner>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <PageIntro
        id="setup"
        title="ပထမဆုံး Bot ကို အတူတည်ဆောက်မယ်။"
        description="Starter kit ကို သုံးပြီး အဆင့် ၆ ဆင့်နဲ့ စမ်းမယ်။ BotFather မှာ သင်ကိုယ်တိုင် ဖန်တီးပြီး token ကို သင့်စက်ထဲမှာပဲ ထည့်ရပါမယ်။"
      />

      <div className="wizard-layout">
        <nav className="wizard-nav" aria-label="Bot setup အဆင့်များ">
          {setupSteps.map((label, i) => (
            <button
              key={label}
              type="button"
              className={i === setupStep ? 'active' : ''}
              onClick={() => {
                setSetupStep(i);
                document.getElementById('setup-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              aria-pressed={i === setupStep}
            >
              <span>{i + 1}</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="wizard-content">
          <div className="panel" id="setup-panel">
            {renderStepContent()}
          </div>

          <div className="wizard-footer">
            <button
              type="button"
              className="button secondary"
              onClick={() => {
                const prev = Math.max(0, setupStep - 1);
                setSetupStep(prev);
                document.getElementById('setup-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              disabled={setupStep === 0}
              style={setupStep === 0 ? { visibility: 'hidden' } : {}}
            >
              <Icon name="back" />
              ရှေ့တစ်ဆင့်
            </button>

            {setupStep < 5 ? (
              <button
                type="button"
                className="button"
                onClick={() => {
                  const next = setupStep + 1;
                  setSetupStep(next);
                  document.getElementById('setup-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                နောက်တစ်ဆင့် <Icon name="arrow" />
              </button>
            ) : (
              <a
                className="button"
                href="#playground"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('playground');
                }}
              >
                Demo ကို ဆက်ကြည့်မယ် <Icon name="arrow" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="panel" style={{ marginTop: '25px' }}>
        <details className="disclosure">
          <summary>bot.py code အပြည့်အစုံကို ကြည့်မယ်</summary>
          <div className="disclosure-content">
            <p>ဒီ code ကို starter ZIP ထဲမှာ ထည့်ပေးထားပါတယ်။ Token အစစ်မပါပါဘူး။</p>
            <CodeBlock
              code={STARTER_FILES['bot.py']}
              label="bot.py · Python"
              onCopySuccess={onNotify}
            />
          </div>
        </details>
        <details className="disclosure">
          <summary>ဘာကြောင့် ဒီနည်းကို အရင်ရွေးထားတာလဲ။</summary>
          <div className="disclosure-content">
            Git clone မလုပ်တတ်သေးလည်း ZIP နဲ့ စနိုင်တယ်။ Bot token တစ်ခုပဲလိုတယ်။ Public server၊ API_ID၊ uploader user session နဲ့ video conversion ကို အစမှာ မပေါင်းသေးလို့ error တစ်ခုဖြစ်ရင် ဘယ်အပိုင်းကလဲ ခွဲရလွယ်ပါတယ်။ အလုပ်လုပ်ပြီးမှ feature တစ်ခုချင်း ထပ်ထည့်ပါ။
          </div>
        </details>
      </div>
    </>
  );
};
