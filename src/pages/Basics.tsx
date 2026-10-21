import React, { useState } from 'react';
import { PageIntro } from '../components/PageIntro';
import { journeyData, glossaryData } from '../data/courseData';
import { Icon } from '../components/Icons';
import { CodeBlock } from '../components/CodeBlock';

interface BasicsProps {
  onNotify?: (msg: string) => void;
}

export const Basics: React.FC<BasicsProps> = ({ onNotify }) => {
  const [activeJourney, setActiveJourney] = useState(0);
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [quizAnswer, setQuizAnswer] = useState<'correct' | 'wrong' | null>(null);

  const filteredGlossary = glossaryData.filter(([term, meaning]) =>
    `${term} ${meaning}`.toLowerCase().includes(glossaryQuery.toLowerCase().trim())
  );

  return (
    <>
      <PageIntro
        id="basics"
        title="Bot တစ်ခုရဲ့ နောက်ကွယ်မှာ ဘာတွေဖြစ်နေလဲ။"
        description="အောက်က အဆင့်တစ်ခုချင်းကို နှိပ်ပြီး message ပို့ချိန်ကနေ အဖြေပြန်လာချိန်အထိ လိုက်ကြည့်ပါ။"
      />

      <div className="panel">
        <h2>စာတစ်ကြောင်းရဲ့ ခရီးစဉ်</h2>
        <p>Bot = Telegram identity + သင် run ထားတဲ့ program။ အစိမ်းရောင်အဆင့်ကို ပြောင်းနှိပ်ကြည့်ပါ။</p>
        <div className="journey">
          {journeyData.map((step, i) => (
            <React.Fragment key={step.name}>
              {i > 0 && <span className="journey-arrow">→</span>}
              <button
                type="button"
                className={`journey-step ${activeJourney === i ? 'active' : ''}`}
                onClick={() => setActiveJourney(i)}
                aria-pressed={activeJourney === i}
              >
                <Icon name={step.icon} />
                <strong>{step.name}</strong>
                <small>{step.sub}</small>
              </button>
            </React.Fragment>
          ))}
        </div>
        <div className="journey-explanation" id="journey-explanation" aria-live="polite">
          <strong>
            {String(activeJourney + 1).padStart(2, '0')} · {journeyData[activeJourney].name}
          </strong>
          <p>{journeyData[activeJourney].detail}</p>
        </div>
      </div>

      <div className="two-column">
        <div className="panel">
          <h2>အခန်းကဏ္ဍတွေကို ခွဲသိမယ်</h2>
          <div className="concept-row">
            <span>
              <Icon name="user" />
            </span>
            <div>
              <h3>Your Telegram account</h3>
              <p>Bot ကို ဖန်တီးပိုင်ဆိုင်တဲ့ owner ပါ။ သင့် account ကို bot အဖြစ် ပြောင်းလိုက်တာ မဟုတ်ပါဘူး။</p>
            </div>
          </div>
          <div className="concept-row">
            <span>
              <Icon name="key" />
            </span>
            <div>
              <h3>BotFather</h3>
              <p>Bot identity၊ username နဲ့ token ကို စီမံပေးပါတယ်။ Hosting server မဟုတ်ပါဘူး။</p>
            </div>
          </div>
          <div className="concept-row">
            <span>
              <Icon name="code" />
            </span>
            <div>
              <h3>Your Python program</h3>
              <p>ဘာ message ရင် ဘယ်လိုဖြေမလဲဆိုတဲ့ logic ပါ။ သင့် PC / server ပေါ်မှာ run ပါတယ်။</p>
            </div>
          </div>
        </div>

        <div className="panel">
          <h2>Polling နဲ့ အရင်စမယ်</h2>
          <span className="pill teal">ဒီသင်ခန်းစာရဲ့ အကြံပြုနည်း</span>
          <p style={{ marginTop: '17px' }}>
            ပထမဆုံး bot ကို local PC ပေါ်မှာ polling နဲ့စရင် public domain နဲ့ webhook server မလိုပါဘူး။ Python က Telegram API ကို ဆက်သွယ်နိုင်ဖို့တော့ လိုပါတယ်။
          </p>
          <p>
            နောက်ပိုင်း infrastructure အဆင်ပြေတဲ့အခါ webhook ရွေးနိုင်ပါတယ်။ အဲဒီနည်းက အလိုအလျောက် ပိုကောင်းတယ်လို့ မဆိုလိုပါဘူး။ သင့် hosting နဲ့ workload ပေါ် မူတည်ပါတယ်။
          </p>
          <CodeBlock
            code="app.run_polling(allowed_updates=[Update.MESSAGE])"
            label="Python · message updates"
            onCopySuccess={onNotify}
          />
        </div>
      </div>

      <div className="panel">
        <h2>အသုံးအနှုန်းများကို ရှာဖတ်မယ်</h2>
        <label className="search-box">
          <Icon name="search" />
          <input
            id="glossary-search"
            type="search"
            placeholder="ဥပမာ — token, polling, .env"
            aria-label="အခြေခံအသုံးအနှုန်းများ ရှာရန်"
            value={glossaryQuery}
            onChange={(e) => setGlossaryQuery(e.target.value)}
          />
        </label>
        <dl className="glossary" id="glossary-results">
          {filteredGlossary.length > 0 ? (
            filteredGlossary.map(([term, meaning]) => (
              <div key={term} className="glossary-entry">
                <dt>{term}</dt>
                <dd>{meaning}</dd>
              </div>
            ))
          ) : (
            <p className="empty-search">ဒီစကားလုံးကို မတွေ့ပါဘူး။ “API”၊ “polling” နဲ့ စမ်းရှာကြည့်ပါ။</p>
          )}
        </dl>
      </div>

      <div className="panel">
        <span className="pill">QUICK CHECK</span>
        <p className="quiz-question">
          BotFather မှာ bot ဖန်တီးပြီးပြီ။ Python program ကို မ run ရသေးရင် bot က ကိုယ်ရေးထားတဲ့စာကို ပြန်ဖြေမလား။
        </p>
        <div className="quiz-options">
          <button
            type="button"
            className={`quiz-option ${quizAnswer === 'wrong' ? 'incorrect' : ''}`}
            onClick={() => setQuizAnswer('wrong')}
          >
            ပြန်ဖြေမယ်၊ Telegram က code ကို run ပေးတယ်
          </button>
          <button
            type="button"
            className={`quiz-option ${quizAnswer === 'correct' ? 'correct' : ''}`}
            onClick={() => setQuizAnswer('correct')}
          >
            မဖြေသေးဘူး၊ program ကို run ဖို့ လိုသေးတယ်
          </button>
        </div>
        <div className="quiz-feedback" id="quiz-feedback" role="status">
          {quizAnswer === 'correct' &&
            'မှန်ပါတယ်။ Telegram က bot identity ကို သိထားပေမယ့် သင်ရေးထားတဲ့ behavior အတွက် program run ဖို့ လိုပါတယ်။'}
          {quizAnswer === 'wrong' &&
            'ပြန်စဉ်းစားကြည့်ပါ။ BotFather က code ကို run ပေးတဲ့ hosting server မဟုတ်ပါဘူး။'}
        </div>
      </div>
    </>
  );
};
