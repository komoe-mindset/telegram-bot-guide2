import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { STARTER_FILES } from '../data/starterFiles';
import { Icon } from '../components/Icons';
import { CodeBlock } from '../components/CodeBlock';
import { InfoBanner } from '../components/InfoBanner';
import { downloadSpecificFile } from '../utils/downloader';

interface SkillsProps {
  onNotify?: (msg: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onNotify }) => {
  const handleDownloadSkill = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadSpecificFile('SKILL.md');
    onNotify?.('SKILL.md ကို download ပြုလုပ်နေပါပြီ။');
  };

  return (
    <>
      <PageIntro
        id="skills"
        title="နားလည်သွားတဲ့ workflow ကို Skill အဖြစ် သိမ်းမယ်။"
        description="လက်တွေ့ အလုပ်လုပ်တဲ့ bot တစ်ခု တည်ဆောက်ပြီးမှ အဲဒီလုပ်ငန်းစဉ်ကို AI Agent အတွက် ပြန်အသုံးချနိုင်တဲ့ instructions အဖြစ် စုမယ်။"
      />

      <div className="panel">
        <h2>SKILL.md က ဘာလုပ်ပေးတာလဲ။</h2>
        <p>
          AI ကို ဘယ်အချိန်မှာ ဒီ workflow သုံးမလဲ၊ ဘယ်ဖိုင်တွေဖတ်မလဲ၊ ဘယ်လိုစမ်းမလဲဆိုတာ ညွှန်ကြားပေးပါတယ်။ Bot ကို ကိုယ်တိုင်အမြဲ run နေစေတဲ့ program မဟုတ်ပါဘူး။
        </p>
        <div className="skill-flow">
          <div>
            <Icon name="chat" />
            <strong>သင့်ရဲ့ request</strong>
            <small>“Python bot ပြင်ပေးပါ”</small>
          </div>
          <span>→</span>
          <div>
            <Icon name="book" />
            <strong>SKILL.md</strong>
            <small>လုပ်ငန်းစဉ်နှင့် စံနမူနာ</small>
          </div>
          <span>→</span>
          <div>
            <Icon name="code" />
            <strong>AI + tools</strong>
            <small>ဖိုင်ပြင်၊ စစ်ဆေး၊ ရှင်းပြ</small>
          </div>
          <span>→</span>
          <div>
            <Icon name="bot" />
            <strong>Python bot</strong>
            <small>သင့် PC / server က run</small>
          </div>
        </div>
      </div>

      <div className="two-column">
        <div className="panel">
          <h2>ကောင်းတဲ့ skill မှာ ပါသင့်တာ</h2>
          <div className="concept-row">
            <span>
              <Icon name="spark" />
            </span>
            <div>
              <h3>Name & description</h3>
              <p>ဘာလုပ်နိုင်တယ်၊ ဘယ် request မှာ သုံးသင့်တယ်ဆိုတာ တိကျစွာ ရေးပါ။</p>
            </div>
          </div>
          <div className="concept-row">
            <span>
              <Icon name="layers" />
            </span>
            <div>
              <h3>Workflow & references</h3>
              <p>စစ်ဖတ်မယ့် project files၊ official docs နဲ့ လုပ်ငန်းစဉ်ကို ချိတ်ပါ။</p>
            </div>
          </div>
          <div className="concept-row">
            <span>
              <Icon name="check" />
            </span>
            <div>
              <h3>Validation & handoff</h3>
              <p>ဘာကို စမ်းရမလဲ၊ ဘာ live checks ကျန်လဲ၊ user ဘာဆက်လုပ်မလဲ ဖော်ပြပါ။</p>
            </div>
          </div>
        </div>

        <div className="panel">
          <h2>Draft တစ်ခု ပြင်ထားပေးပါတယ်။</h2>
          <p>
            Instructions ကို English နဲ့ ရေးထားပြီး user ကို မြန်မာလို ရှင်းပြစေဖို့ ထည့်ထားပါတယ်။ Secret ထည့်စရာ မလိုပါဘူး။
          </p>
          <p>
            ဒီ draft ကို download ဆွဲထားတာက Codex ထဲ install လုပ်ပြီးသား မဟုတ်ပါဘူး။ အသုံးပြုမယ့် agent ရဲ့ skill support နဲ့ installation location ကို စစ်ပါ။
          </p>
          <button
            type="button"
            className="button secondary"
            onClick={handleDownloadSkill}
          >
            <Icon name="download" />
            SKILL.md download
          </button>
          <div className="step-tip">
            Codex မှာ <code>$skill-creator</code> ကို သုံးပြီး ဒီ draft ကို သင့်အလုပ်လုပ်ပုံနဲ့ ကိုက်အောင် ပြင်ဆင်ခိုင်းနိုင်ပါတယ်။
          </div>
        </div>
      </div>

      <div className="panel">
        <h2>နမူနာ SKILL.md</h2>
        <p>ဒီ draft က Telegram bots အတွက်ပဲ သက်ဆိုင်အောင် ရေးထားပါတယ်။ ရိုးရိုး Bot API နဲ့ user session uploader ကို ခွဲသိဖို့ ညွှန်ကြားထားပါတယ်။</p>
        <CodeBlock
          code={STARTER_FILES['SKILL.md']}
          label="SKILL.md · reusable instructions"
          onCopySuccess={onNotify}
        />
      </div>

      <InfoBanner>
        <strong>Skill ရှိရုံနဲ့ account access မရပါဘူး။</strong> BotFather token၊ personal account login၊ hosting နဲ့ ပြင်ပကို message ပို့ခွင့်တွေက သီးခြား authorization နဲ့ လုပ်ရမယ့် အရာတွေပါ။
      </InfoBanner>
    </>
  );
};
