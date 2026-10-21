import React, { useState } from 'react';
import { PageIntro } from '../components/PageIntro';
import { problems } from '../data/courseData';
import { Icon } from '../components/Icons';
import { CodeBlock } from '../components/CodeBlock';

interface TroubleshootProps {
  onNotify?: (msg: string) => void;
}

export const Troubleshoot: React.FC<TroubleshootProps> = ({ onNotify }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProblems = problems.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    return `${p.title} ${p.tag} ${p.keywords} ${p.body}`.toLowerCase().includes(q);
  });

  return (
    <>
      <PageIntro
        id="troubleshoot"
        title="မရသေးရင်၊ တစ်ချက်ချင်း စစ်ကြည့်မယ်။"
        description="Error ဖြစ်တာက လေ့လာမှုရဲ့ အစိတ်အပိုင်းပါ။ Error စာသားကိုဖတ်ပြီး ဘယ်အပိုင်းက စစ်ရမလဲ ခွဲကြည့်ပါ။"
      />

      <div className="panel">
        <label className="search-box">
          <Icon name="search" />
          <input
            id="problem-search"
            type="search"
            placeholder="Error ရှာရန် — token, conflict, ffmpeg…"
            aria-label="ပြဿနာနှင့် ဖြေရှင်းနည်းများ ရှာရန်"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <div id="problem-results" style={{ marginTop: '12px' }}>
          {filteredProblems.length > 0 ? (
            filteredProblems.map((p) => (
              <details key={p.title} className="disclosure">
                <summary>
                  <span>
                    {p.title} <span className="error-tag">{p.tag}</span>
                  </span>
                </summary>
                <div className="disclosure-content">
                  <p>{p.body}</p>
                  {p.code && (
                    <CodeBlock
                      code={p.code}
                      label="Check commands"
                      onCopySuccess={onNotify}
                    />
                  )}
                </div>
              </details>
            ))
          ) : (
            <div className="no-results">
              ဒီ error ကို မတွေ့ပါဘူး။ “token”၊ “network”၊ “owner” နဲ့ ပြန်ရှာကြည့်ပါ။
            </div>
          )}
        </div>
      </div>

      <div className="two-column">
        <div className="panel">
          <span className="card-icon teal">
            <Icon name="layers" />
          </span>
          <h3>Feature တစ်ခုချင်းစီ တိုးပါ။</h3>
          <p>
            ပထမ /start → echo → owner access → custom command → files → downloader အစဉ်လိုက် စမ်းပါ။ အကုန်တစ်ပြိုင်တည်းချိတ်လိုက်ရင် error ဘယ်ကလဲ ခွဲရခက်ပါတယ်။
          </p>
        </div>
        <div className="panel">
          <span className="card-icon amber">
            <Icon name="shield" />
          </span>
          <h3>စမ်းသပ် bot ကို သီးခြားထားပါ။</h3>
          <p>
            နေ့စဉ်သုံးနေတဲ့ bot နဲ့ စမ်းသပ် bot ကို BotFather မှာ သီးခြားဖန်တီးနိုင်ပါတယ်။ Token တူတဲ့ instance နှစ်ခုကို polling မလုပ်ပါနဲ့။
          </p>
        </div>
      </div>

      <div className="panel">
        <h2>လွယ်ကူအောင် စလုပ်နိုင်တဲ့ နည်းလမ်း</h2>
        <ol className="instruction-list">
          <li>
            ZIP starter နဲ့ local polling ကို အရင်ရွေးပါ။ Git၊ server၊ webhook ကို ပထမနေ့မှာ မပေါင်းသေးပါနဲ့။
          </li>
          <li>
            .venv ထဲက Python ကို တိုက်ရိုက်ခေါ်ပါ။ Environment activate အခက်အခဲကို လျှော့နိုင်ပါတယ်။
          </li>
          <li>
            Code ပြင်တိုင်း ပြောင်းလဲမှုသေးသေးတစ်ခုနဲ့ စမ်းပါ။ မျှော်လင့်တဲ့ reply နဲ့ တကယ်လာတာကို ယှဉ်ကြည့်ပါ။
          </li>
          <li>
            Downloader မှာ video အတို၊ quality နိမ့်နိမ့်နဲ့ 1 job ကနေ စပါ။ Queue၊ timeout နဲ့ cleanup ကို feature အဖြစ် စဉ်းစားပါ။
          </li>
          <li>
            ၂၄ နာရီလိုတဲ့အချိန်မှ အမြဲဖွင့်ထားတဲ့ server ဆီ ရွှေ့ပါ။ ဒီ HTML သင်ခန်းစာ website က Python bot ကို hosting လုပ်ပေးတဲ့ server မဟုတ်ပါဘူး။
          </li>
        </ol>
      </div>
    </>
  );
};
