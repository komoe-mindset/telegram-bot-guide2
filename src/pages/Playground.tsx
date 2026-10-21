import React, { useState, useRef, useEffect } from 'react';
import { PageIntro } from '../components/PageIntro';
import { Icon } from '../components/Icons';

interface MessageItem {
  id: number;
  text: string;
  mine?: boolean;
  system?: boolean;
}

interface PlaygroundProps {
  onNavigate: (pageId: string) => void;
  onNotify?: (msg: string) => void;
}

export const Playground: React.FC<PlaygroundProps> = ({ onNavigate, onNotify }) => {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: 1,
      text: 'စမ်းသပ်ရန် /start ကို နှိပ်ပါ။ Token အစစ်နဲ့ ကိုယ်ရေးအချက်အလက် မထည့်ပါနဲ့။',
      system: true,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [demoRunning, setDemoRunning] = useState(true);
  const [demoOwnerOnly, setDemoOwnerOnly] = useState(false);
  const [demoIdentity, setDemoIdentity] = useState<'owner' | 'visitor'>('owner');
  const [insight, setInsight] = useState<{ title?: string; body: string }>({
    title: 'စမ်းသပ်ရန်',
    body: '/start ပို့ပါ။ ပြီးရင် program ကို ပိတ်ပြီး message ထပ်ပို့ကြည့်ပါ။',
  });

  const nextId = useRef(2);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const demoTimerRef = useRef<number | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    return () => {
      if (demoTimerRef.current) clearTimeout(demoTimerRef.current);
    };
  }, []);

  const addMessage = (text: string, mine = false, system = false) => {
    setMessages((prev) => {
      const next = [...prev, { id: nextId.current++, text, mine, system }];
      if (next.length > 36) {
        return next.slice(next.length - 36);
      }
      return next;
    });
  };

  const handleSendMessage = (raw: string) => {
    const text = raw.trim();
    if (!text) return;

    if (/\d{6,}:[A-Za-z0-9_-]{20,}/.test(text)) {
      onNotify?.('Token အစစ်ကို မထည့်ပါနဲ့။ ဒီ demo အတွက် မလိုပါဘူး။');
      return;
    }

    if (demoTimerRef.current) {
      clearTimeout(demoTimerRef.current);
    }

    addMessage(text, true);

    if (!demoRunning) {
      addMessage('Program ရပ်ထားလို့ အဖြေမရသေးပါဘူး။', false, true);
      setInsight({
        body: 'Python program ကို run ထားမှ bot logic အလုပ်လုပ်ပါတယ်။ Toggle ပြန်ဖွင့်ပြီး message အသစ် ပို့ကြည့်ပါ။',
      });
      return;
    }

    const currentIdentity = demoIdentity;
    const currentRestricted = demoOwnerOnly;

    demoTimerRef.current = window.setTimeout(() => {
      if (currentRestricted && currentIdentity !== 'owner') {
        addMessage('ဒီ bot ကို ပိုင်ရှင်ပဲ အသုံးပြုနိုင်ပါတယ်။');
        setInsight({
          body: 'Owner ID စစ်တဲ့ access guard က ဒီ user ကို မခွင့်ပြုထားလို့ command / echo ကို ဆက်မလုပ်ပါဘူး။',
        });
        return;
      }

      if (text === '/start') {
        addMessage(
          'မင်္ဂလာပါ 👋\nသင့်ရဲ့ Python bot အလုပ်လုပ်နေပါပြီ။\nစာတစ်ကြောင်း ပို့ကြည့်ပါ။\n/help နဲ့ အကူအညီကြည့်နိုင်ပါတယ်။'
        );
        setInsight({
          body: 'CommandHandler("start", start) က /start ကို ရွေးပြီး start() function ထဲက မိတ်ဆက်စာ ပြန်ပို့ပါတယ်။',
        });
      } else if (text === '/help') {
        addMessage(
          '/start - စတင်ရန်\n/help - အကူအညီ\n/whoami - သင့် user ID ကြည့်ရန်\nသာမန်စာပို့ရင် အဲဒီစာကိုပဲ ပြန်ပို့ပေးပါတယ်။'
        );
        setInsight({
          body: 'Help handler က အသုံးပြုနိုင်တဲ့ commands ကို ပြပေးပါတယ်။ ဒီ behavior အတွက် AI model မလိုပါဘူး။',
        });
      } else if (text === '/whoami') {
        addMessage(
          `Your Telegram user ID: ${currentIdentity === 'owner' ? '123456789' : '987654321'}\n(နမူနာ ID သာဖြစ်ပါတယ်)`
        );
        setInsight({
          body: 'တကယ် bot မှာ update.effective_user.id ကို ပြပေးပါတယ်။ အဲဒီ ID ကို .env ရဲ့ OWNER_USER_ID မှာ locally ထည့်နိုင်ပါတယ်။',
        });
      } else if (text.startsWith('/')) {
        addMessage('ဒီ starter မှာ ဒီ command အတွက် handler မရေးထားသေးလို့ အဖြေမရှိပါဘူး။', false, true);
        setInsight({
          body: 'BotFather command menu ထဲ ထည့်ရုံနဲ့ behavior မရပါဘူး။ Python မှာ CommandHandler နဲ့ function ထပ်ရေးဖို့ လိုပါတယ်။',
        });
      } else {
        addMessage(text);
        setInsight({
          body: 'MessageHandler က သာမန် text ကို လက်ခံပြီး echo() က မူရင်းစာကို ပြန်ပို့ပါတယ်။ AI အဖြေထုတ်တာ မဟုတ်ပါဘူး။',
        });
      }
    }, 320);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
    setInputText('');
  };

  const handleReset = () => {
    if (demoTimerRef.current) clearTimeout(demoTimerRef.current);
    setDemoRunning(true);
    setDemoOwnerOnly(false);
    setDemoIdentity('owner');
    setInputText('');
    setMessages([
      {
        id: nextId.current++,
        text: 'Demo ကို ပြန်စထားပါပြီ။ /start ပို့ကြည့်ပါ။',
        system: true,
      },
    ]);
    setInsight({
      body: '/start ပို့ပါ။ ပြီးရင် program ပိတ်ပြီး message ထပ်ပို့ကြည့်ပါ။',
    });
  };

  return (
    <>
      <PageIntro
        id="playground"
        title="မချိတ်ဆက်ခင်၊ အရင် စမ်းကြည့်မယ်။"
        description="ဒီနေရာက browser ထဲမှာပဲ အလုပ်လုပ်တဲ့ simulation ပါ။ Telegram ကို message မပို့ပါဘူး။ Token မလိုပါဘူး။"
      />

      <div className="playground-grid">
        <section className="demo-chat" aria-label="Bot conversation simulation">
          <div className="chat-titlebar">
            <div className="bot-avatar">
              <Icon name="bot" />
            </div>
            <div>
              <div className="chat-name">MingalarLearningBot</div>
              <div className="chat-status" id="demo-status">
                {demoRunning ? '● program running · simulation' : '○ program stopped · simulation'}
              </div>
            </div>
            <span className="pill teal">DEMO</span>
          </div>

          <div className="demo-body" id="demo-messages" role="log" aria-live="polite" aria-label="Demo messages">
            {messages.map((m) => (
              <div
                key={m.id}
                className={m.system ? 'system-message' : `bubble ${m.mine ? 'mine' : ''}`}
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-commands" aria-label="စမ်းနိုင်တဲ့ commands">
            <button type="button" onClick={() => handleSendMessage('/start')}>
              /start
            </button>
            <button type="button" onClick={() => handleSendMessage('/help')}>
              /help
            </button>
            <button type="button" onClick={() => handleSendMessage('/whoami')}>
              /whoami
            </button>
          </div>

          <form className="demo-form" id="demo-form" onSubmit={handleSubmit}>
            <input
              id="demo-input"
              aria-label="Demo bot ဆီပို့မယ့် စာ"
              placeholder="မင်္ဂလာပါ လို့ ရေးကြည့်ပါ…"
              autoComplete="off"
              maxLength={1000}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="send-button" aria-label="Demo message ပို့မယ်">
              <Icon name="plane" />
            </button>
          </form>
        </section>

        <div>
          <div className="panel">
            <h2>ဘာဖြစ်သွားမလဲ စမ်းကြည့်ပါ။</h2>
            <div className="control-row">
              <div>
                <strong>Python program run နေမယ်</strong>
                <small>ပိတ်လိုက်ရင် bot က မဖြေတော့ဘူး</small>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  id="demo-running"
                  checked={demoRunning}
                  onChange={(e) => {
                    const running = e.target.checked;
                    setDemoRunning(running);
                    if (demoTimerRef.current) clearTimeout(demoTimerRef.current);
                    setInsight({
                      body: running
                        ? 'Program ပြန် run နေပါပြီ။ Message အသစ်တစ်ခု ပို့ကြည့်ပါ။'
                        : 'Program ရပ်ထားပါတယ်။ Message ပို့ရင် bot က မဖြေတော့တဲ့ပုံစံကို ကြည့်ပါ။',
                    });
                  }}
                  aria-label="Demo Python program အဖွင့်အပိတ်"
                />
                <span className="switch-track" />
              </label>
            </div>

            <div className="control-row">
              <div>
                <strong>Owner ပဲ သုံးခွင့်ပေးမယ်</strong>
                <small>OWNER_USER_ID သတ်မှတ်ထားတဲ့ပုံစံ</small>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  id="demo-owner"
                  checked={demoOwnerOnly}
                  onChange={(e) => setDemoOwnerOnly(e.target.checked)}
                  aria-label="Demo owner-only access"
                />
                <span className="switch-track" />
              </label>
            </div>

            <div className="control-row">
              <div>
                <strong>Message ပို့သူ</strong>
                <small>Account နှစ်ခုနဲ့ access စမ်းသလို</small>
              </div>
              <select
                id="demo-identity"
                className="demo-select"
                aria-label="Demo message ပို့သူ"
                value={demoIdentity}
                onChange={(e) => setDemoIdentity(e.target.value as 'owner' | 'visitor')}
              >
                <option value="owner">Owner account</option>
                <option value="visitor">Other account</option>
              </select>
            </div>

            <div className="status-insight" id="demo-insight" role="status">
              {insight.title && <strong>{insight.title}<br /></strong>}
              {insight.body}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '18px' }}>
              <button type="button" className="plain-button" id="reset-demo" onClick={handleReset}>
                <Icon name="refresh" />
                Demo ပြန်စမယ်
              </button>
            </div>
          </div>

          <div className="panel">
            <h3>သင်မြင်နေတာနဲ့ တကယ် bot ကွာခြားချက်</h3>
            <p>ဒီ demo က Python ကို browser ထဲမှာ run တာ မဟုတ်ပါဘူး။ အပြုအမူကို JavaScript နဲ့ သရုပ်ပြထားတာပါ။</p>
            <p>
              တကယ် Telegram မှာ အလုပ်လုပ်ဖို့ <strong>BotFather token + သင့်စက်မှာ run နေတဲ့ Python program</strong> လိုပါတယ်။
            </p>
            <a
              className="text-link"
              href="#setup"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('setup');
              }}
            >
              အမှန်တကယ် စတင်ဖန်တီးမယ် <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
