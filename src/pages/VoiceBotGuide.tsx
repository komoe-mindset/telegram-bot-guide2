import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { voiceSteps, voiceChapters } from '../data/voiceBotData';
import { Icon } from '../components/Icons';

interface VoiceBotGuideProps {
  onNavigate: (pageId: string) => void;
  onNotify?: (msg: string) => void;
}

const STORAGE_KEY = 'voice-bot-guide-progress-v1';

export const VoiceBotGuide: React.FC<VoiceBotGuideProps> = ({ onNavigate, onNotify }) => {
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [activeStepId, setActiveStepId] = useState<string>('start');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedSteps));
    } catch {
      // ignore
    }
  }, [checkedSteps]);

  const completedCount = useMemo(() => {
    return voiceSteps.filter((s) => checkedSteps[s.id]).length;
  }, [checkedSteps]);

  const totalSteps = voiceSteps.length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  const handleToggleStep = useCallback(
    (stepId: string) => {
      setCheckedSteps((prev) => {
        const nextState = !prev[stepId];
        const next = { ...prev, [stepId]: nextState };
        if (nextState) {
          onNotify?.('အဆင့် ပြီးမြောက်မှု မှတ်သားပြီးပါပြီ။');
        }
        return next;
      });
    },
    [onNotify]
  );

  const handleCopy = useCallback(
    async (cmd: string) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(cmd);
        } else {
          const el = document.createElement('textarea');
          el.value = cmd;
          el.style.position = 'fixed';
          el.style.opacity = '0';
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          el.remove();
        }
        setCopiedCmd(cmd);
        onNotify?.(`"${cmd}" ကို copy ကူးပြီးပါပြီ။`);
        setTimeout(() => setCopiedCmd(null), 1800);
      } catch {
        onNotify?.('Copy မအောင်မြင်ပါ။ စာသားကို select လုပ်ပြီး ကူးပါ။');
      }
    },
    [onNotify]
  );

  const handleReset = useCallback(() => {
    if (window.confirm('မှတ်ထားသော အမှန်ခြစ်အားလုံးကို ပြန်ဖျက်မလား?')) {
      setCheckedSteps({});
      onNotify?.('မှတ်ထားသော အဆင့်များအားလုံး ပြန်စပြီးပါပြီ။');
    }
  }, [onNotify]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveStepId(id);
    }
  };

  return (
    <div className="voice-bot-guide">
      {/* Top Page Intro */}
      <div className="page-intro">
        <div>
          <div className="eyebrow">
            <span className="line" />
            TELEGRAM VOICE-TO-TEXT BOT · CLOUDFLARE WORKERS & GEMINI AI
          </div>
          <h2 className="page-title">အသံလေးကနေ စာသားလေးဆီ ✨</h2>
          <p className="page-desc">
            Telegram Voice Message ကို English စာသားအဖြစ် ပြောင်းပေးမယ့် bot လေးတစ်ခုကို AI assistant နှင့်အတူ တစ်ဆင့်ချင်း တည်ဆောက်ကြမယ်။
          </p>
        </div>
        <span className="chapter-count">အဆင့် ၁၀ ဆင့် ပြည့်စုံသော လမ်းညွှန်</span>
      </div>

      {/* Hero Showcase with Bot Buddy Illustration */}
      <section className="hero voice-hero" aria-label="Voice Bot မိတ်ဆက်">
        <div className="hero-copy">
          <div className="eyebrow hero-kicker">
            <span />
            A LITTLE GUIDE FOR A BIG IDEA
          </div>
          <h1>
            အသံလေးကနေ
            <br />
            <em>စာသားလေးဆီ</em> ✨
          </h1>
          <p>
            Telegram Voice Message ကို English စာသားအဖြစ် ပြောင်းပေးမယ့် bot လေးတစ်ခုကို AI assistant နဲ့အတူ ဖြည်းဖြည်းချင်း တည်ဆောက်ကြမယ်။
          </p>
          <div className="hero-badges">
            <span>
              <Icon name="spark" />
              Gemini AI
            </span>
            <span>
              <Icon name="server" />
              Cloudflare Workers
            </span>
            <span>
              <Icon name="bot" />
              Telegram Bot API
            </span>
            <span>
              <Icon name="heart" />
              Beginner Friendly
            </span>
          </div>
          <div className="hero-actions">
            <button
              type="button"
              className="button light"
              onClick={() => scrollToSection('start')}
            >
              စတင်လေ့လာမယ် <Icon name="arrow" />
            </button>
            <button
              type="button"
              className="button ghost"
              onClick={() => scrollToSection('how')}
            >
              <Icon name="play" />
              ဘယ်လိုအလုပ်လုပ်လဲ?
            </button>
          </div>
          <div className="voice-offline-tag">
            <Icon name="info" />
            <span>ဒီလမ်းညွှန်ကို offline ဖတ်နိုင်ပါတယ်။ Bot တည်ဆောက်ခြင်းနှင့် ပြင်ပ link များအတွက် internet လိုအပ်ပါတယ်။</span>
          </div>
        </div>

        <div className="hero-art voice-hero-art" aria-label="Bot Buddy ချစ်စရာ robot သရုပ်ပြပုံ">
          <svg viewBox="0 0 560 390" role="img" aria-hidden="true" className="voice-robot-svg">
            <ellipse cx="280" cy="344" rx="205" ry="19" fill="#122735" opacity="0.4" />
            <path
              d="M87 180C72 80 154 35 259 45c103-28 213 19 218 123 16 77-38 148-109 158H169C100 308 66 257 87 180Z"
              fill="#1d4857"
            />
            <circle cx="116" cy="104" r="8" fill="#f3b75c" />
            <path d="M439 85l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#ec9560" />
            <path d="M101 243l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#78c9c3" />
            {/* Audio wave card */}
            <rect
              x="52"
              y="143"
              width="135"
              height="95"
              rx="23"
              fill="#ffffff"
              stroke="#8ad5d0"
              strokeWidth="2.5"
              transform="rotate(-8 52 143)"
            />
            <path
              d="M83 188l6-1 3-13 7 28 7-39 7 34 6-21 6 10 6-1"
              fill="none"
              stroke="#e59c70"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Text transcript card */}
            <rect
              x="361"
              y="135"
              width="128"
              height="95"
              rx="20"
              fill="#ffffff"
              stroke="#8ad5d0"
              strokeWidth="2.5"
              transform="rotate(6 361 135)"
            />
            <path d="M375 160l66-6M378 180l78-8M380 199l55-5" stroke="#168b9a" strokeWidth="4.5" strokeLinecap="round" />
            {/* Robot legs */}
            <path d="M232 274l-20 43M318 274l20 43" stroke="#168b9a" strokeWidth="14" strokeLinecap="round" />
            <path d="M211 319h-17M339 319h17" stroke="#168b9a" strokeWidth="12" strokeLinecap="round" />
            {/* Robot body */}
            <rect x="185" y="133" width="180" height="151" rx="44" fill="#205f6e" stroke="#123a43" strokeWidth="4" />
            <rect x="203" y="150" width="144" height="101" rx="28" fill="#f4f9fb" />
            {/* Robot face */}
            <circle cx="245" cy="193" r="7" fill="#152c3e" />
            <circle cx="306" cy="193" r="7" fill="#152c3e" />
            <path d="M262 211q13 12 27 0" fill="none" stroke="#152c3e" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="226" cy="207" rx="10" ry="6" fill="#f4b59f" />
            <ellipse cx="325" cy="207" rx="10" ry="6" fill="#f4b59f" />
            {/* Robot antenna */}
            <path d="M275 132v-24" stroke="#168b9a" strokeWidth="5" />
            <circle cx="275" cy="101" r="9" fill="#f3b75c" stroke="#168b9a" strokeWidth="3" />
            <path d="M185 214l-26 24M365 214l22 17" stroke="#168b9a" strokeWidth="12" strokeLinecap="round" />
            <circle cx="275" cy="268" r="6" fill="#88ded7" />
          </svg>
          <div className="caption-chip">
            <span className="dot-green" /> <strong>သင့်သူငယ်ချင်း Bot Buddy</strong>
          </div>
        </div>
      </section>

      {/* Flow Sequence Banner */}
      <div className="flow" id="how">
        <span className="flow-label">The little journey</span>
        <span className="flow-item">🎙 Telegram voice</span>
        <span className="arrow">→</span>
        <span className="flow-item">☁ Cloudflare Worker</span>
        <span className="arrow">→</span>
        <span className="flow-item">✨ Gemini AI</span>
        <span className="arrow">→</span>
        <span className="flow-item">📝 English text</span>
      </div>

      {/* Main Two-Column Guide Layout with Sticky Progress Navigator */}
      <div className="voice-guide-layout">
        {/* Sticky Adventure Tracker Sidebar */}
        <aside className="voice-guide-nav" aria-label="လမ်းညွှန် အဆင့်များ">
          <div className="sidebar-title">Your adventure</div>
          <div className="progress-text">
            <strong>{completedCount}</strong> / {totalSteps} အဆင့် ပြီးပါပြီ ({progressPercent}%)
          </div>
          <div className="bar" aria-hidden="true">
            <i style={{ width: `${progressPercent}%` }} />
          </div>

          <nav className="voice-nav-links" aria-label="Voice Bot အဆင့်များ">
            <button
              type="button"
              className={`voice-nav-item ${activeStepId === 'start' ? 'active' : ''}`}
              onClick={() => scrollToSection('start')}
            >
              <span className="n">✳</span>
              <span>မစခင် သိထားရန်</span>
            </button>
            {voiceSteps.map((step) => {
              const isDone = !!checkedSteps[step.id];
              const isActive = activeStepId === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  className={`voice-nav-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}`}
                  onClick={() => scrollToSection(step.id)}
                >
                  <span className="n">{isDone ? '✓' : step.num}</span>
                  <span className="nav-text">{step.title}</span>
                </button>
              );
            })}
            <button
              type="button"
              className={`voice-nav-item ${activeStepId === 'finish' ? 'active' : ''}`}
              onClick={() => scrollToSection('finish')}
            >
              <span className="n">✦</span>
              <span>အပြီးသတ် စစ်ဆေးမှု</span>
            </button>
          </nav>

          <button className="reset-button" type="button" onClick={handleReset}>
            မှတ်ထားသော အဆင့်များ ပြန်စမယ်
          </button>
        </aside>

        {/* Content Column */}
        <div className="voice-guide-content">
          {/* Section: Before we begin */}
          <section id="start" className="guide-section">
            <div className="section-heading">
              <div>
                <div className="tag">Before we begin</div>
                <h2>မင်္ဂလာပါ၊ စလိုက်ကြမယ် 🌱</h2>
                <p>တစ်ကြိမ်မှာ တစ်ဆင့်ပဲ လုပ်ပါ။ ပြီးသွားရင် အမှန်ခြစ်လေး ခြစ်ထားနိုင်ပါတယ်။</p>
              </div>
              <div className="tiny-art" aria-hidden="true">✿</div>
            </div>

            <div className="intro-card panel">
              <h3>သင့်ရဲ့ အကူအညီပေးမယ့်သူက AI assistant ပါ</h3>
              <p>
                Windows 11 ပေါ်ရှိ Codex၊ Antigravity သို့မဟုတ် သင့် coding assistant ကို attachment ထဲက master prompt ပေးပါ။
                ဒီစာမျက်နှာက လမ်းပြဖြစ်ပြီး အလိုအလျောက် install သို့မဟုတ် deploy မလုပ်ပါ။ Assistant ကို repository ရဲ့{' '}
                <code>AGENTS.md</code>, <code>README.md</code>, <code>PROMPT.md</code>, <code>package.json</code>,{' '}
                <code>wrangler.toml</code> တို့ကို အရင်ဖတ်ခိုင်းပါ။ <code>AGENTS.md</code> ကို ဦးစားပေးရပါမယ်။
              </p>

              <div className="note-alert">
                <span className="note-icon">🔒</span>
                <div>
                  <strong>လျှို့ဝှက်ချက်များကို ကာကွယ်ပါ။</strong> Token / API key တွေကို ဒီစာမျက်နှာ၊ chat၊ screenshot၊ source file၊ log သို့မဟုတ် command ထဲ မထည့်ပါနဲ့။ Assistant ပေးတဲ့ လုံခြုံသော local input သို့မဟုတ် ယာယီ session environment variable ကို သုံးပါ။
                </div>
              </div>

              <div className="repo-link-wrap">
                <a
                  className="button secondary small"
                  href="https://github.com/saeedkohansal/telegram-gemini-voice-to-text-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" />
                  Project repository ကိုဖွင့်မယ်
                  <Icon name="external" />
                </a>
              </div>
            </div>
          </section>

          {/* Chapters and Step Articles */}
          {voiceChapters.map((chapter) => {
            const chapterSteps = voiceSteps.filter((s) => s.chapter === chapter.id);

            return (
              <section key={chapter.id} className="guide-section section-gap">
                <div className="section-heading">
                  <div>
                    <div className="tag">{chapter.tag}</div>
                    <h2>{chapter.title}</h2>
                    <p>{chapter.desc}</p>
                  </div>
                </div>

                <div className="steps-container">
                  {chapterSteps.map((step) => {
                    const isChecked = !!checkedSteps[step.id];

                    return (
                      <article key={step.id} id={step.id} className={`step panel ${isChecked ? 'step-completed' : ''}`}>
                        <div className="step-head">
                          <div className="step-num">{isChecked ? '✓' : step.num}</div>
                          <div className="step-head-info">
                            {step.badge && <span className="badge">{step.badge}</span>}
                            <h3>{step.title}</h3>
                            <p>{step.sub}</p>
                          </div>
                        </div>

                        <div className="step-body">
                          {step.instructions.map((inst, i) => {
                            if (inst.type === 'ordered' && inst.items) {
                              return (
                                <ol key={i} className="step-ordered-list">
                                  {inst.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      {/* Parse URLs to live clickable links */}
                                      {item.includes('https://') ? (
                                        item.split(/(https:\/\/[^\s)]+)/g).map((part, pIdx) =>
                                          part.startsWith('https://') ? (
                                            <a
                                              key={pIdx}
                                              href={part}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="guide-link"
                                            >
                                              {part.replace('https://', '')} ↗
                                            </a>
                                          ) : (
                                            <span key={pIdx}>{part}</span>
                                          )
                                        )
                                      ) : (
                                        item
                                      )}
                                    </li>
                                  ))}
                                </ol>
                              );
                            }

                            if (inst.type === 'grid2' && inst.gridItems) {
                              return (
                                <div key={i} className="grid2">
                                  {inst.gridItems.map((g, gIdx) => (
                                    <div key={gIdx} className="mini-card">
                                      <strong>{g.title}</strong>
                                      <span>{g.desc}</span>
                                    </div>
                                  ))}
                                </div>
                              );
                            }

                            return <p key={i}>{inst.text}</p>;
                          })}

                          {step.commands && step.commands.length > 0 && (
                            <div className="commands-list">
                              {step.commands.map((c, cIdx) => (
                                <div key={cIdx} className="command-box">
                                  <code>{c.cmd}</code>
                                  <button
                                    type="button"
                                    className="copy-btn"
                                    onClick={() => handleCopy(c.cmd)}
                                  >
                                    <Icon name="copy" />
                                    {copiedCmd === c.cmd ? 'Copied ✓' : 'Copy'}
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}

                          {step.callout && (
                            <div className="callout-box">
                              <Icon name="info" />
                              <div style={{ whiteSpace: 'pre-line' }}>{step.callout}</div>
                            </div>
                          )}

                          <label className="step-checkbox-label">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleToggleStep(step.id)}
                            />
                            <span>{step.checkLabel}</span>
                          </label>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Final Finishing Card & Review Note */}
          <section id="finish" className="guide-section section-gap">
            <div className="final-card panel">
              <div className="tag">Your finishing note</div>
              <h3>ပြီးသွားရင် report တောင်းပါ 📝</h3>
              <p>
                Assistant ကို အမှန်တကယ် စစ်ဆေးထားသော ရလဒ်များဖြင့် Myanmar လို report ပေးခိုင်းပါ။ Voice test မလုပ်ရသေးလျှင်{' '}
                <strong>Pending user test</strong> ဟု ဖော်ပြရပါမယ်။
              </p>

              <ul className="final-list">
                <li>SUCCESS / FAILED / PARTIAL နှင့် တကယ့် Worker URL၊ webhook URL</li>
                <li>Webhook registration, pending update count, Worker health နှင့် Gemini test ရလဒ်</li>
                <li>အတည်ပြုပြီးသော bot username နှင့် မဖြေရှင်းရသေးသည့် ပြဿနာများ</li>
              </ul>

              <details className="disclosure" style={{ marginTop: '16px' }}>
                <summary>မူရင်း project မှာ ဘာတွေကို ထိန်းသိမ်းရမလဲ?</summary>
                <div className="disclosure-content">
                  <p>
                    Bot reply အားလုံး English ဖြစ်ရမည်။ English မဟုတ်သော အသံကို English သို့ ပြောင်းပေးရမည်။ မူရင်း watermark၊ 15 MB audio limit၊ 5-minute duration limit နှင့် message splitting ကို ထိန်းသိမ်းပါ။
                  </p>
                  <p>
                    Database / VPS မထည့်ပါနှင့်၊ မသက်ဆိုင်သော source code မပြင်ပါနှင့်၊ secret များကို commit မလုပ်ပါနှင့်။ လိုအပ်၍ code သို့မဟုတ် configuration ပြင်လျှင် syntax check၊ redeploy နှင့် test သုံးခုလုံး ပြန်လုပ်ပါ။
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Quick Jump Buttons */}
          <div className="wizard-footer" style={{ marginTop: '30px' }}>
            <button
              type="button"
              className="button secondary"
              onClick={() => onNavigate('overview')}
            >
              <Icon name="back" />
              မိတ်ဆက်စာမျက်နှာသို့
            </button>
            <button
              type="button"
              className="button"
              onClick={() => onNavigate('resources')}
            >
              အရင်းအမြစ်များနှင့် ဖိုင်များ
              <Icon name="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
