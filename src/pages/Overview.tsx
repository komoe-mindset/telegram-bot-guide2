import React from 'react';
import { modules } from '../data/courseData';
import { Icon } from '../components/Icons';
import { InfoBanner } from '../components/InfoBanner';

interface OverviewProps {
  onNavigate: (pageId: string) => void;
}

export const Overview: React.FC<OverviewProps> = ({ onNavigate }) => {
  return (
    <>
      <div className="page-intro">
        <div>
          <div className="eyebrow">
            <span className="line" />
            A LITTLE LEARNING. A REAL BOT.
          </div>
          <h2 className="page-title">အိုင်ဒီယာကနေ၊ လက်တွေ့တည်ဆောက်မှုဆီ။</h2>
        </div>
        <span className="chapter-count">သင့်အတွက် အစမှ စီစဉ်ထားပါတယ်</span>
      </div>

      <section className="hero" aria-label="Telegram bot သင်ခန်းစာ မိတ်ဆက်">
        <div className="hero-copy">
          <div className="eyebrow hero-kicker">
            <span />
            YOUR FIRST TELEGRAM BOT STARTS HERE
          </div>
          <h1>
            သင့်ရဲ့ ပထမဆုံး
            <br />
            <em>Telegram Bot</em> ကို
            <br />
            အတူတည်ဆောက်မယ်။
          </h1>
          <p>
            ဘာတွေလိုမလဲ၊ ဘယ်ကစရမလဲ။ Python နဲ့ bot တစ်ခု အလုပ်လုပ်တဲ့အထိ မြန်မာလို တစ်ဆင့်ချင်း လေ့လာလိုက်ပါ။
          </p>
          <div className="hero-badges">
            <span>
              <Icon name="code" />
              Python
            </span>
            <span>
              <Icon name="laptop" />
              Windows / macOS / Linux
            </span>
            <span>
              <Icon name="heart" />
              Beginner friendly
            </span>
          </div>
          <div className="hero-actions">
            <a
              className="button light"
              href="#requirements"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('requirements');
              }}
            >
              အစကနေ လေ့လာမယ် <Icon name="arrow" />
            </a>
            <a
              className="button ghost"
              href="#playground"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('playground');
              }}
            >
              <Icon name="play" />
              Bot demo စမ်းကြည့်မယ်
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="သရုပ်ပြ Telegram bot conversation">
          <div className="orbit-circle" />
          <div className="floating-python">
            <Icon name="code" />
            made with Python
          </div>
          <div className="mini-chat">
            <div className="chat-titlebar">
              <div className="bot-avatar">
                <Icon name="bot" />
              </div>
              <div>
                <div className="chat-name">MingalarLearningBot</div>
                <div className="chat-status">bot · learning demo</div>
              </div>
              <span className="chat-menu">⋮</span>
            </div>
            <div className="mini-chat-body">
              <span className="chat-date">TODAY</span>
              <div className="bubble mine">
                /start
                <time>10:24 ✓✓</time>
              </div>
              <div className="bubble">
                မင်္ဂလာပါ 👋
                <br />
                သင့်ရဲ့ ပထမဆုံး bot
                <br />
                အလုပ်လုပ်နေပါပြီ။
                <time>10:24</time>
              </div>
            </div>
            <div className="mini-input">
              စာတစ်ကြောင်း ရေးကြည့်ပါ…
              <span className="mini-send">
                <Icon name="plane" />
              </span>
            </div>
          </div>
          <div className="floating-code">
            <span className="code-dot" />
            Bot is running…
            <br />
            <span style={{ color: '#789eaf' }}>await</span> message.reply_text(
            <span style={{ color: '#b9d89a' }}>"မင်္ဂလာပါ"</span>)
          </div>
        </div>
      </section>

      <div className="intro-strip">
        <div className="intro-fact">
          <span>
            <Icon name="book" />
          </span>
          <span>
            <strong>သင်ခန်းစာ ၈ ခု</strong>အခြေခံမှ လက်တွေ့အထိ
          </span>
        </div>
        <div className="intro-fact">
          <span>
            <Icon name="shield" />
          </span>
          <span>
            <strong>Token မလိုတဲ့ demo</strong>မချိတ်ဆက်ခင် စမ်းသပ်ပါ
          </span>
        </div>
        <div className="intro-fact">
          <span>
            <Icon name="download" />
          </span>
          <span>
            <strong>အသင့်သုံး starter kit</strong>Code ကို download ယူပါ
          </span>
        </div>
      </div>

      <div className="section-top">
        <div>
          <h2>သင်ဘာကို တည်ဆောက်ချင်လဲ။</h2>
          <p>အစမှာ သေးသေးလေးစပြီး လိုသလောက် ဆက်တိုးသွားမယ်။</p>
        </div>
      </div>

      <div className="path-grid">
        <a
          className="path-card recommended"
          href="#setup"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('setup');
          }}
        >
          <span className="recommend-tag">စတင်သူအတွက် အကြံပြု</span>
          <span className="card-icon teal">
            <Icon name="bot" />
          </span>
          <span className="card-kicker">01 · START SIMPLE</span>
          <h3>Python နဲ့ စာပြန် Bot</h3>
          <p>
            /start၊ /help နဲ့ စာပြန်ပို့တဲ့ bot။ Bot token တစ်ခုပဲလိုပြီး server မဝယ်ခင် PC ပေါ်မှာ စမ်းနိုင်ပါတယ်။
          </p>
          <span className="card-bottom">
            <span>ပထမဆုံး လက်တွေ့လုပ်ဆောင်မှု</span>
            <Icon name="arrow" />
          </span>
        </a>

        <a
          className="path-card"
          href="#downloader"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('downloader');
          }}
        >
          <span className="card-icon">
            <Icon name="download" />
          </span>
          <span className="card-kicker">02 · BUILD ON IT</span>
          <h3>Video Downloader Bot</h3>
          <p>
            GitHub repo ရဲ့ yt-dlp၊ ffmpeg၊ uploader နဲ့ relay channel တို့ ဘယ်လိုပေါင်းစပ်ထားလဲ နားလည်မယ်။
          </p>
          <span className="card-bottom">
            <span>အခြေခံနားလည်ပြီးမှ ဆက်သွားရန်</span>
            <Icon name="arrow" />
          </span>
        </a>

        <a
          className="path-card"
          href="#skills"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('skills');
          }}
        >
          <span className="card-icon purple">
            <Icon name="spark" />
          </span>
          <span className="card-kicker">03 · MAKE IT REPEATABLE</span>
          <h3>AI Agent အတွက် Skill</h3>
          <p>
            အလုပ်လုပ်တဲ့ လုပ်ငန်းစဉ်ကို SKILL.md အဖြစ် သိမ်းပြီး နောက် project တွေမှာ AI ကို ပြန်အသုံးချခိုင်းမယ်။
          </p>
          <span className="card-bottom">
            <span>နောင်ပြန်သုံးနိုင်တဲ့ workflow</span>
            <Icon name="arrow" />
          </span>
        </a>
      </div>

      <div className="section-top">
        <div>
          <h2>လေ့လာမယ့် လမ်းကြောင်း</h2>
          <p>ဘယ်နေရာကမဆို ဖတ်နိုင်သလို၊ အစဉ်လိုက်လည်း ဆက်သွားနိုင်ပါတယ်။</p>
        </div>
        <a
          className="text-link"
          href="#requirements"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('requirements');
          }}
        >
          စတင်ရန် <Icon name="arrow" />
        </a>
      </div>

      <div className="lesson-list">
        {modules.slice(1, 7).map((m, i) => (
          <a
            key={m.id}
            href={`#${m.id}`}
            className="lesson-row"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(m.id);
            }}
          >
            <span className="lesson-index">{String(i + 2).padStart(2, '0')}</span>
            <div className="lesson-info">
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
            </div>
            <Icon name="arrow" />
          </a>
        ))}
      </div>

      <InfoBanner>
        <strong>သင့် account က bot ကို ပိုင်ဆိုင်မှာပါ။</strong> Bot က သီးခြား username ရှိတဲ့ account ဖြစ်ပြီး၊ သင့် personal chat တွေအားလုံးကို အလိုအလျောက်ဖတ်တဲ့ပုံစံ မဟုတ်ပါဘူး။
      </InfoBanner>
    </>
  );
};
