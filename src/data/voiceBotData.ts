export interface VoiceStep {
  id: string;
  num: string;
  badge?: string;
  title: string;
  sub: string;
  chapter: number;
  instructions: {
    type: 'ordered' | 'text' | 'grid2';
    items?: string[];
    text?: string;
    gridItems?: { title: string; desc: string }[];
  }[];
  commands?: {
    cmd: string;
    desc?: string;
  }[];
  callout?: string;
  checkLabel: string;
}

export interface VoiceChapter {
  id: number;
  tag: string;
  title: string;
  desc: string;
}

export const voiceChapters: VoiceChapter[] = [
  {
    id: 1,
    tag: 'Chapter 01 · Collect your keys',
    title: 'သော့လေး ၃ ခု စုကြမယ် 🔑',
    desc: 'အောက်ပါအစီအစဉ်အတိုင်း တစ်ခုချင်း ပြီးအောင်လုပ်ပါ။ သုံးခုလုံး မပြီးမချင်း install / deploy မလုပ်ပါနှင့်။',
  },
  {
    id: 2,
    tag: 'Chapter 02 · Bring your bot to life',
    title: 'တည်ဆောက်ပြီး လွှင့်တင်မယ် ☁️',
    desc: 'အောက်ပါလုပ်ငန်းများကို AI assistant နှင့်အတူ PowerShell သို့မဟုတ် Terminal တွင် လုပ်ပါ။',
  },
  {
    id: 3,
    tag: 'Chapter 03 · Check the magic',
    title: 'သုံးချက်စလုံး စစ်ကြမယ် ✨',
    desc: 'စမ်းသပ်မှုတစ်ခုခု မအောင်မြင်သေးလျှင် အောင်မြင်ပြီဟု မမှတ်ယူပါနှင့်။',
  },
];

export const voiceSteps: VoiceStep[] = [
  {
    id: 'token',
    num: '01',
    badge: 'ပထမဆုံး',
    title: 'Telegram bot ဖန်တီးပါ',
    sub: 'BOT_TOKEN · သင့် bot ကို ထိန်းချုပ်ဖို့ လျှို့ဝှက်သော့',
    chapter: 1,
    instructions: [
      {
        type: 'ordered',
        items: [
          'BotFather ကို Telegram မှာဖွင့်ပါ (https://t.me/BotFather)၊ Start နှိပ်ပြီး /newbot ပို့ပါ။',
          'Bot အမည်ထည့်ပြီး "bot" နဲ့ဆုံးတဲ့ အသုံးမပြုရသေးသော username တစ်ခု ရွေးပါ။',
          'ရလာသော BOT_TOKEN ကို လျှို့ဝှက်ထားပြီး assistant ရဲ့ လုံခြုံသော local input နည်းလမ်းဖြင့် ပေးပါ။ တန်ဖိုးကို chat ထဲ မပို့ပါနှင့်။',
        ],
      },
    ],
    callout: '✓ BotFather က token ပေးပြီး လုံခြုံစွာ ထည့်သွင်းပြီးလျှင် နောက်အဆင့်သို့ သွားပါ။ Token တန်ဖိုးကို ပြန်မပြပါနှင့်။',
    checkLabel: 'BOT_TOKEN ကို လုံခြုံစွာ ပြင်ဆင်ပြီးပါပြီ',
  },
  {
    id: 'gemini',
    num: '02',
    title: 'Gemini API key ရယူပါ',
    sub: 'GEMINI_API_KEY · အသံကို စာသားပြောင်းဖို့ AI ကို အသုံးပြုမယ့်သော့',
    chapter: 1,
    instructions: [
      {
        type: 'ordered',
        items: [
          'Google AI Studio (https://aistudio.google.com/app/apikey) ကိုဖွင့်ပါ၊ Google account ဖြင့် sign in ဝင်ပါ။',
          'Create API Key ကိုရွေးပြီး သင့်လျော်သော project ကို ရွေးပါ သို့မဟုတ် အသစ်ဖန်တီးပါ။',
          'ထုတ်ပေးသော key ကို လျှို့ဝှက်ထားပြီး assistant ၏ လုံခြုံသော local input ဖြင့် ထည့်ပါ။',
        ],
      },
    ],
    callout: '✓ API key ရရှိပြီး လုံခြုံစွာ ထည့်သွင်းပြီးမှ နောက်အဆင့်သို့ သွားပါ။ Deploy မလုပ်ရသေးပါ။',
    checkLabel: 'GEMINI_API_KEY ကို လုံခြုံစွာ ပြင်ဆင်ပြီးပါပြီ',
  },
  {
    id: 'cloudflare',
    num: '03',
    title: 'Cloudflare ကို ပြင်ဆင်ပါ',
    sub: 'CLOUDFLARE_API_TOKEN · bot ကို Worker ပေါ်တင်ဖို့ အသုံးပြုမယ့်သော့',
    chapter: 1,
    instructions: [
      {
        type: 'ordered',
        items: [
          'Cloudflare dashboard (https://dash.cloudflare.com) ကိုဖွင့်ပါ၊ sign in ဝင်ပါ သို့မဟုတ် account ဖန်တီးပါ။',
          'API Tokens နေရာတွင် Workers deployment အတွက် လိုအပ်သည့် အနည်းဆုံး permission များပါသော token ဖန်တီးပါ။ Workers အောက်တွင် workers.dev subdomain ကိုလည်း ပြင်ဆင်ပါ။',
          'Token ကို assistant ထံ လုံခြုံစွာ ပေးပါ။ Account-scoped token ဖြစ်ပါက project ညွှန်ကြားချက်အတိုင်း CLOUDFLARE_ACCOUNT_ID လိုနိုင်ပါတယ်။',
        ],
      },
    ],
    callout: '✓ သော့ ၃ ခုလုံး အဆင်သင့်ဖြစ်မှ အောက်ပါ installation ကို စပါ။ Cloudflare token သည် deployment credential ဖြစ်ပြီး Worker application secret မဟုတ်ပါ။',
    checkLabel: 'Cloudflare token နှင့် workers.dev ကို ပြင်ဆင်ပြီးပါပြီ',
  },
  {
    id: 'environment',
    num: '04',
    title: 'ပတ်ဝန်းကျင်ကို စစ်ဆေးပါ',
    sub: 'လိုအပ်တဲ့ ကိရိယာတွေ အဆင်သင့်ဖြစ်နေပြီလား?',
    chapter: 2,
    instructions: [
      {
        type: 'text',
        text: 'Assistant ကို repository ကို local တွင် ရှိကြောင်း၊ project လိုအပ်ချက်နှင့် ကိုက်ညီသော Node.js၊ npm၊ PowerShell/Terminal နှင့် လုံခြုံစွာရရှိနိုင်သော Cloudflare credential တို့ကို စစ်ခိုင်းပါ။ တစ်ခုခုပျောက်နေပါက ပြင်ဆင်ပြီးမှ ဆက်ပါ။',
      },
      {
        type: 'grid2',
        gridItems: [
          { title: 'Node.js', desc: 'Project ကို run ဖို့ လိုတဲ့ runtime (Node 18+ / 20+)' },
          { title: 'npm', desc: 'Project မှီခိုသော package များ ထည့်သွင်းရန်' },
        ],
      },
    ],
    checkLabel: 'Assistant နဲ့ ပတ်ဝန်းကျင် စစ်ဆေးပြီးပါပြီ',
  },
  {
    id: 'install',
    num: '05',
    title: 'လိုအပ်တာတွေ ထည့်သွင်းပါ',
    sub: 'Dependencies ကို install လုပ်ပြီး Cloudflare ချိတ်ဆက်မှုကို စစ်မယ်',
    chapter: 2,
    instructions: [
      {
        type: 'text',
        text: 'Repository folder အတွင်းမှာ assistant က အောက်ပါ command များကို အစဉ်လိုက် run ပါမယ်။ Dependencies ဆိုတာ project အလုပ်လုပ်ဖို့ လိုအပ်တဲ့ အကူအညီပေး software အစိတ်အပိုင်းလေးတွေပါ။',
      },
    ],
    commands: [
      { cmd: 'npm install' },
      { cmd: 'npx wrangler whoami' },
    ],
    callout: '✓ Install အောင်မြင်ပြီး Cloudflare account ကို ပြသနိုင်ရပါမယ်။ Authentication မအောင်မြင်ပါက error ကို assistant နဲ့ ဖြေရှင်းပါ။ Token တန်ဖိုးကို မပြပါနှင့်။',
    checkLabel: 'Install နှင့် Cloudflare စစ်ဆေးမှု အောင်မြင်ပါပြီ',
  },
  {
    id: 'deploy',
    num: '06',
    title: 'Worker ကို deploy လုပ်ပါ',
    sub: 'Cloudflare ပေါ်မှာ bot ရဲ့ အလုပ်လုပ်ရာနေရာ ဖန်တီးမယ်',
    chapter: 2,
    instructions: [
      {
        type: 'text',
        text: 'Assistant က deploy လုပ်ပြီး ထွက်လာသော တကယ့် Worker URL ကို မှတ်ထားပါမယ်။ ခန့်မှန်းထားသော URL ကို မသုံးပါနှင့်။',
      },
    ],
    commands: [
      { cmd: 'npx wrangler deploy', desc: 'Cloudflare Workers ပေါ်သို့ ကုဒ်လွှင့်တင်ခြင်း' },
      { cmd: 'npx wrangler secret put BOT_TOKEN', desc: 'Telegram bot token ကို worker secret အဖြစ် ထည့်ခြင်း' },
      { cmd: 'npx wrangler secret put GEMINI_API_KEY', desc: 'Gemini API key ကို worker secret အဖြစ် ထည့်ခြင်း' },
    ],
    callout: '✓ Deploy အောင်မြင်ပြီး Worker URL အစစ် ရရှိကာ secrets နှစ်ခု ထည့်ပြီးဖြစ်ရပါမယ်။ (Command များတွင် တန်ဖိုးကို တိုက်ရိုက် မရေးပါနှင့်၊ prompt input မှ ပေးပါ)',
    checkLabel: 'Worker နှင့် secrets အဆင်သင့်ဖြစ်ပါပြီ',
  },
  {
    id: 'webhook',
    num: '07',
    title: 'Telegram နဲ့ ချိတ်ဆက်ပါ',
    sub: 'Webhook · Telegram က message ကို Worker ဆီ ပို့ပေးမယ့် လိပ်စာ',
    chapter: 2,
    instructions: [
      {
        type: 'text',
        text: 'Assistant ကို တကယ့် Worker URL နောက်တွင် /webhook ပါသော endpoint ကို Telegram setWebhook API ဖြင့် လုံခြုံစွာ မှတ်ပုံတင်ခိုင်းပါ။ Telegram token ပါသော URL များကို chat၊ log သို့မဟုတ် report တွင် မပြပါနှင့်။ Optional WEBHOOK_SECRET သုံးပါက လုံခြုံစွာ generate လုပ်ပြီး Worker နှင့် Telegram နှစ်ဖက်တွင် တူညီစွာ သတ်မှတ်ရပါမယ်။',
      },
    ],
    callout: 'ပုံစံသာ ဖြစ်သည်: https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev/webhook — အမှန်တကယ် URL ကို deploy output မှ ယူပါ။',
    checkLabel: 'Webhook မှတ်ပုံတင်မှု အောင်မြင်ပါပြီ',
  },
  {
    id: 'health',
    num: '08',
    title: 'Worker နဲ့ webhook ကို စစ်ပါ',
    sub: 'လိပ်စာမှန်သလား၊ Telegram က ဆက်သွယ်နိုင်သလား?',
    chapter: 3,
    instructions: [
      {
        type: 'ordered',
        items: [
          'Worker health: တကယ့် Worker root URL ကို ဖွင့်ပါ။ HTTP 200 နှင့် project ၏ healthy status message ကို တွေ့ရပါမယ်။',
          'Telegram webhook: Assistant ကို getWebhookInfo လုံခြုံစွာ စစ်ခိုင်းပါ။ Success ဖြစ်ရမည်၊ URL သည် တကယ့် /webhook endpoint နှင့် တူရမည်။ ကျန်ရှိသော updates များ ဖြေရှင်းပြီးနောက် pending_update_count သည် 0 ဖြစ်ရမည်၊ မဖြေရှင်းရသေးသော delivery error မရှိရပါ။',
        ],
      },
    ],
    checkLabel: 'Worker health နှင့် webhook စစ်ဆေးမှု အောင်မြင်ပါပြီ',
  },
  {
    id: 'geminitest',
    num: '09',
    title: 'Gemini ကို စမ်းပါ',
    sub: 'AI က တုံ့ပြန်နိုင်ပြီလား?',
    chapter: 3,
    instructions: [
      {
        type: 'text',
        text: 'တကယ့် Worker URL နောက်မှာ /test-gemini?text=Say%20OK ထည့်ပြီး browser သို့မဟုတ် curl ဖြင့် ဖွင့်ပါ။ HTTP 200 နှင့် "OK" ရရှိရပါမယ်။',
      },
    ],
    callout: 'Secrets ထည့်ပြီးချက်ချင်း HTTP 500 ဖြစ်လျှင် ၁၀ စက္ကန့်စောင့်ပြီး တစ်ကြိမ် ပြန်စမ်းပါ။ မအောင်မြင်သေးလျှင် assistant နှင့် တကယ့် error ကို စစ်ဆေးပါ။',
    checkLabel: 'Gemini API test အောင်မြင်ပါပြီ',
  },
  {
    id: 'voice',
    num: '10',
    title: 'သင့်အသံနဲ့ နောက်ဆုံးစမ်းမယ် 🎙️',
    sub: 'လုပ်ထားသမျှကို Telegram မှာ လက်တွေ့ကြည့်ရအောင်',
    chapter: 3,
    instructions: [
      {
        type: 'ordered',
        items: [
          'Telegram မှာ သင့် bot ကိုဖွင့်ပြီး /start ပို့ပါ။',
          'မြန်မာလို voice message တိုတိုလေး တစ်ခု ပို့ပါ။',
          'Bot က English စာသားဖြင့် ပြန်ဖြေကြောင်းနှင့် မူရင်း watermark ပါကြောင်း စစ်ပါ။',
        ],
      },
    ],
    callout: 'မူရင်း watermark:\nDesigned by gilgeekify programming\nhttps://www.youtube.com/@gilgeekify',
    checkLabel: 'Telegram မှာ ကိုယ်တိုင် voice test အောင်မြင်ပါပြီ',
  },
];
