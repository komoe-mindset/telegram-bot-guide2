export interface CourseModule {
  id: string;
  name: string;
  en: string;
  desc: string;
  icon: string;
}

export const modules: CourseModule[] = [
  { id: 'overview', name: 'မိတ်ဆက်', en: 'Start here', desc: 'သင့် bot စတင်မယ့် လမ်းကြောင်း', icon: 'plane' },
  { id: 'requirements', name: 'မစခင် ပြင်ဆင်မယ်', en: 'Before you begin', desc: 'System နှင့် knowledge requirements', icon: 'laptop' },
  { id: 'basics', name: 'Bot အလုပ်လုပ်ပုံ', en: 'Understand the basics', desc: 'Account၊ API၊ handlers နဲ့ polling', icon: 'layers' },
  { id: 'setup', name: 'ပထမဆုံး Bot ဖန်တီးမယ်', en: 'Build your first bot', desc: 'BotFather ကနေ Python အထိ', icon: 'code' },
  { id: 'playground', name: 'Bot နဲ့ စမ်းကြည့်မယ်', en: 'Interactive playground', desc: 'Telegram မချိတ်ဘဲ အရင်စမ်းမယ်', icon: 'chat' },
  { id: 'downloader', name: 'Video Downloader', en: 'Explore the reference', desc: 'GitHub repo ရဲ့ နောက်ကွယ်', icon: 'download' },
  { id: 'troubleshoot', name: 'အခက်အခဲ ဖြေရှင်းမယ်', en: 'Tips & troubleshooting', desc: 'တွေ့ရတတ်တဲ့ errors နဲ့ အဖြေများ', icon: 'tool' },
  { id: 'skills', name: 'AI Agent အတွက် Skill', en: 'Make it repeatable', desc: 'အလုပ်လုပ်တဲ့ workflow ကို သိမ်းမယ်', icon: 'spark' },
];

export const readyItems = [
  { id: 'telegram', title: 'Telegram account ရှိပြီ', desc: 'Official Telegram app မှာ login ဝင်ထားပါတယ်။' },
  { id: 'computer', title: 'PC / laptop တစ်လုံး အသုံးပြုနိုင်ပြီ', desc: 'အစမှာ local Python program ကို run ပါမယ်။' },
  { id: 'python', title: 'Python ကို စစ်နိုင်ပြီ', desc: 'Terminal မှာ python --version သို့မဟုတ် python3 --version စမ်းပြီးပါပြီ။' },
  { id: 'internet', title: 'Internet နဲ့ Telegram API ရနိုင်ပြီ', desc: 'Telegram app ရတာနဲ့ Python API connection ရတာ တူညီမယ်လို့ မယူဆပါနဲ့။' },
  { id: 'editor', title: 'ဖိုင်တွေကို ဖွင့်ပြင်နိုင်ပြီ', desc: 'Notepad သို့မဟုတ် VS Code နဲ့ UTF-8 စာသားဖိုင် save လုပ်နိုင်ပါတယ်။' },
  { id: 'local', title: 'Secret ကို locally ထည့်ဖို့ နားလည်ပြီ', desc: 'Token ကို .env ထဲမှာပဲ ထည့်ပြီး chat / GitHub မှာ မမျှဝေပါဘူး။' },
];

export const journeyData = [
  {
    icon: 'user',
    name: 'သင်',
    sub: 'Bot chat ထဲ message ပို့',
    detail: 'သင်က bot ရဲ့ private chat ထဲ /start သို့မဟုတ် စာတစ်ကြောင်း ပို့ပါတယ်။ Bot က သင့် personal account ရဲ့ အခြား chat တွေကို လိုက်ဖတ်တာ မဟုတ်ပါဘူး။',
  },
  {
    icon: 'globe',
    name: 'Telegram',
    sub: 'Message ကို API က သိမ်းပေး',
    detail: 'Telegram က message ကို update အဖြစ် ပြင်ဆင်ပေးပါတယ်။ BotFather ကတော့ bot name၊ username နဲ့ token စီမံပေးတဲ့ tool ပါ။',
  },
  {
    icon: 'laptop',
    name: 'Python',
    sub: 'Polling နဲ့ updates ယူ',
    detail: 'သင့် PC ပေါ်က program က run_polling() နဲ့ updates စောင့်ယူပါတယ်။ Public website URL တစ်ခု မရှိသေးလည်း polling နဲ့ စမ်းနိုင်ပါတယ်။',
  },
  {
    icon: 'code',
    name: 'Handler',
    sub: 'ဘယ်လိုဖြေရမလဲ ဆုံးဖြတ်',
    detail: 'CommandHandler က /start လို commands ကို ရွေးကိုင်တယ်။ MessageHandler က သာမန်စာတွေကို ကိုင်ပါတယ်။ သင်ရေးထားတဲ့ function က အဖြေကို ဆုံးဖြတ်ပါတယ်။',
  },
  {
    icon: 'bot',
    name: 'Bot reply',
    sub: 'Telegram က အဖြေပြပေး',
    detail: 'reply_text() က Bot API ဆီ အဖြေပြန်ပို့ပြီး user ရဲ့ chat ထဲမှာ bot နာမည်နဲ့ ပေါ်လာပါတယ်။ AI model မချိတ်ထားရင် code ထဲက သတ်မှတ်ထားတဲ့ behavior အတိုင်းပဲ ဖြေပါတယ်။',
  },
];

export const glossaryData: [string, string][] = [
  ['Bot token', 'Bot API ကို သုံးခွင့်ပေးတဲ့ credential။ BotFather က ရယူပြီး .env ထဲ locally သိမ်းပါ။'],
  ['API', 'Program နှစ်ခုကြား ဆက်သွယ်နိုင်တဲ့ interface။ Bot API ကို library ကနေ ခေါ်သုံးပါတယ်။'],
  ['Handler', 'Message သို့မဟုတ် command ရလာတဲ့အခါ အလုပ်လုပ်မယ့် function ကို ချိတ်ပေးတဲ့အရာ။'],
  ['Polling', 'Program က Telegram ဆီ message အသစ်ရှိလား ဆက်တိုက်စောင့်မေးတဲ့ပုံစံ။'],
  ['Webhook', 'Update ရလာရင် Telegram က သင့် HTTPS endpoint ဆီ ပို့ပေးတဲ့ပုံစံ။ Polling နဲ့ တစ်ပြိုင်တည်း မသုံးရပါဘူး။'],
  ['Virtual environment (.venv)', 'Project တစ်ခုချင်းစီအတွက် Python packages သီးသန့်ထားတဲ့နေရာ။'],
  ['.env', 'Token နဲ့ settings ကို source code အပြင်ဘက်မှာ သိမ်းတဲ့ local configuration ဖိုင်။'],
  ['async / await', 'Network အဖြေကို စောင့်ချိန်မှာ event loop က အခြားအလုပ်ကို ဆက်လုပ်နိုင်အောင် ရေးတဲ့ Python ပုံစံ။'],
  ['User ID', 'Telegram user ရဲ့ numeric ID။ Access control မှာ username ထက် သင့်တော်ပါတယ်။'],
  ['MTProto session', 'Telegram user account login ကို ထိန်းထားတဲ့ session။ ရိုးရိုး Bot API token ထက် account access ပိုကျယ်ပါတယ်။'],
];

export const setupSteps = [
  'BotFather',
  'Project ပြင်မယ်',
  'Token ထည့်မယ်',
  'Run လုပ်မယ်',
  'စမ်းသပ်မယ်',
  'Owner သတ်မှတ်မယ်',
];

export const pipelineData = [
  {
    icon: 'chat',
    title: '1. Bot receives a link',
    sub: 'User ရဲ့ video link',
    desc: 'bot.py က URL ကို လက်ခံပြီး video info ရယူတယ်။ Quality၊ MP3 / FLAC ရွေးစရာ buttons နဲ့ ခန့်မှန်း file size ပြပေးတယ်။',
  },
  {
    icon: 'download',
    title: '2. yt-dlp downloads',
    sub: 'Quality အလိုက် download',
    desc: 'downloader.py က ရွေးထားတဲ့ format ကို download လုပ်တယ်။ Queue၊ per-user limits၊ cancellation နဲ့ disk space တို့ကိုလည်း ကိုင်တွယ်တယ်။',
  },
  {
    icon: 'layers',
    title: '3. ffmpeg prepares',
    sub: 'Merge / convert / thumbnail',
    desc: 'လိုအပ်တဲ့အခါ audio နဲ့ video ပေါင်းတယ်၊ Telegram နဲ့ကိုက်တဲ့ codec/container ပြောင်းတယ်၊ thumbnail ထုတ်တယ်။ Source ထက် quality ပိုကောင်းလာတာတော့ မဟုတ်ပါဘူး။',
  },
  {
    icon: 'user',
    title: '4. User account uploads',
    sub: 'Pyrogram / MTProto',
    desc: 'uploader.py က login ဝင်ထားတဲ့ Telegram user account နဲ့ ဖိုင်ကို private channel ထဲ upload လုပ်တယ်။ ရိုးရိုး Bot API upload နဲ့ မတူတဲ့အပိုင်းပါ။',
  },
  {
    icon: 'server',
    title: '5. Private relay channel',
    sub: 'ဖိုင်သိမ်းထားတဲ့ ကြားခံ',
    desc: 'Bot နဲ့ uploader account နှစ်ခုလုံး ဝင်ရောက်ခွင့်ရှိတဲ့ private channel ပါ။ Cached media တွေ ဒီနေရာမှာ ဆက်ရှိနိုင်ပါတယ်။',
  },
  {
    icon: 'bot',
    title: '6. Bot copies to the user',
    sub: 'copy_message + cache',
    desc: 'Bot API ရဲ့ copy_message နဲ့ user ဆီ ပြန်ပို့တယ်။ ထပ်တူ video/format ကို တောင်းရင် cache က ပြန်ပို့လို့ download ထပ်လုပ်စရာ မလိုနိုင်ပါဘူး။',
  },
];

export interface ProblemItem {
  title: string;
  tag: string;
  keywords: string;
  body: string;
  code: string | null;
}

export const problems: ProblemItem[] = [
  {
    title: 'Bot ကို စာပို့ပေမယ့် အဖြေမလာဘူး',
    tag: 'NO REPLY',
    keywords: 'start not responding မဖြေ',
    body: 'ပထမဆုံး Terminal မှာ Python program run နေလား စစ်ပါ။ BotFather ပေးတဲ့ username မှန်လား၊ bot chat ကို Start လုပ်ပြီးပြီလား၊ internet ရလား စစ်ပါ။ ဒီ starter က private chat မှာပဲ အလုပ်လုပ်ပါတယ်။',
    code: null,
  },
  {
    title: 'python command ကို မတွေ့ဘူး',
    tag: 'PYTHON',
    keywords: 'not recognized command not found install',
    body: 'Windows မှာ py -3 --version နဲ့ စမ်းပါ။ မရသေးရင် official Python installer သုံးပြီး terminal ကို ပြန်ဖွင့်ပါ။ macOS / Linux မှာ python3 --version နဲ့ စစ်ပါ။ Version က ဒီသင်ခန်းစာအတွက် 3.11+ ဖြစ်သင့်ပါတယ်။',
    code: 'py -3 --version',
  },
  {
    title: 'ModuleNotFoundError: telegram',
    tag: 'PACKAGES',
    keywords: 'no module dependency pip dotenv import',
    body: 'Packages ထည့်တဲ့ Python နဲ့ bot run တဲ့ Python မတူနေတာ ဖြစ်နိုင်ပါတယ်။ Windows မှာ အောက်ကနှစ်ခုစလုံးကို .venv ထဲက Python နဲ့ပဲ run ပါ။ macOS / Linux မှာ .venv/bin/python ကို သုံးပါ။',
    code: '.\\.venv\\Scripts\\python.exe -m pip install -r requirements.txt\n.\\.venv\\Scripts\\python.exe bot.py',
  },
  {
    title: 'Unauthorized / invalid token လို့ ပြတယ်',
    tag: 'TOKEN',
    keywords: '401 botfather .env auth',
    body: '.env ထဲက BOT_TOKEN ကို locally စစ်ပါ။ Placeholder အတိုင်း ကျန်နေလား၊ token ပြတ်နေလား၊ .env.txt ဖြစ်နေလား စစ်ပါ။ Token ပေါက်သွားရင် BotFather မှာ revoke / regenerate လုပ်ပြီး .env ကို ပြင်ကာ restart လုပ်ပါ။ Token အစစ်ကို support chat ထဲ မကူးပါနဲ့။',
    code: null,
  },
  {
    title: 'Conflict / another getUpdates request',
    tag: 'CONFLICT',
    keywords: '409 two instance polling webhook',
    body: 'Token တူတဲ့ polling program နောက်တစ်ခုကို အခြား Terminal၊ PC၊ server မှာ run ထားလား စစ်ပါ။ တစ်ခုကိုပဲ run ပါ။ Webhook တပ်ထားပြီးသားဆို polling နဲ့ တစ်ပြိုင်တည်း မရလို့ အရင် configuration ကို စစ်ပါ။',
    code: null,
  },
  {
    title: 'Owner ပဲသုံးနိုင်တယ်လို့ ကိုယ့်ကို ပြောနေတယ်',
    tag: 'ACCESS',
    keywords: 'user id owner denied allowlist permission',
    body: 'OWNER_USER_ID မှားနေနိုင်ပါတယ်။ .env မှာ အဲဒီ setting ကို locally blank ပြန်ထား၊ restart၊ /whoami နဲ့ သင့် ID ပြန်ယူပြီး ထည့်ပါ။ Telegram username ကို မထည့်ပါနဲ့။ နံပါတ် ID ကိုပဲ ထည့်ရပါတယ်။',
    code: null,
  },
  {
    title: 'Network error / connection timeout',
    tag: 'NETWORK',
    keywords: 'internet vpn firewall telegram blocked',
    body: 'Internet connection၊ firewall နဲ့ Python က api.telegram.org ကို ဆက်သွယ်နိုင်မှု စစ်ပါ။ Telegram app ရပေမယ့် Python connection မရတာ ဖြစ်နိုင်ပါတယ်။ Error စာသား မျှဝေမယ်ဆို token ပါတဲ့ URL နဲ့ credentials တွေကို ဖယ်ပြီးမှ မျှဝေပါ။',
    code: null,
  },
  {
    title: 'ffmpeg / ffprobe ကို မတွေ့ဘူး',
    tag: 'DOWNLOADER',
    keywords: 'video conversion merge audio binary',
    body: 'Downloader အတွက် ffmpeg executable နဲ့ ffprobe ကို system မှာ install လုပ်ထားပြီး PATH ထဲရောက်ဖို့ လိုပါတယ်။ pip install ffmpeg လုပ်တာနဲ့ အဲဒီ tools ရမသွားပါဘူး။',
    code: 'ffmpeg -version\nffprobe -version',
  },
  {
    title: 'Relay channel မတွေ့ဘူး / upload မရဘူး',
    tag: 'RELAY',
    keywords: 'peer id invalid channel pyrogram session admin',
    body: 'RELAY_CHANNEL_ID မှန်လား၊ uploader account နဲ့ bot နှစ်ခုစလုံး channel ထဲရှိလား စစ်ပါ။ Repo README အတိုင်း bot admin rights ပေးပါ။ Login session အသစ်လုပ်မယ်ဆို bot ကို အရင်ရပ်ပြီး setup_session.py ကို locally run ပါ။',
    code: null,
  },
  {
    title: 'YouTube / TikTok download မရတော့ဘူး',
    tag: 'YT-DLP',
    keywords: 'unsupported video 403 429 bot check site rate',
    body: 'Site behavior ပြောင်းသွားတာ၊ server IP ကို block လုပ်တာ၊ login လိုတာ ဖြစ်နိုင်ပါတယ်။ yt-dlp ရဲ့ official release notes နဲ့ dependencies ကို စစ်ပါ။ Link တိုင်းကို အမြဲ download ရမယ်လို့ မယူဆပါနဲ့။ Request များစွာ ထပ်ပို့မယ့်အစား error အမျိုးအစားကို အရင်ခွဲပါ။',
    code: null,
  },
  {
    title: 'Rate limit / FloodWait ဖြစ်နေတယ်',
    tag: 'RATE LIMIT',
    keywords: 'too many requests retry after 429',
    body: 'ပြထားတဲ့ retry time ကို လေးစားပြီး requests၊ simultaneous jobs နဲ့ progress message edits ကို လျှော့ပါ။ အမြန် retry loop နဲ့ ထပ်ပို့တာက ပြဿနာကို ပိုကြီးစေနိုင်ပါတယ်။',
    code: null,
  },
];

export const sourceLinks = [
  { name: 'BotFather & bot features', desc: 'Telegram official documentation', url: 'https://core.telegram.org/bots/features#botfather', icon: 'plane' },
  { name: 'Python echo bot example', desc: 'python-telegram-bot official example', url: 'https://docs.python-telegram-bot.org/en/stable/examples.echobot.html', icon: 'code' },
  { name: 'Telegram Bot API', desc: 'Upload limits, polling & webhooks', url: 'https://core.telegram.org/bots/api', icon: 'book' },
  { name: 'Reference GitHub repository', desc: 'lumawaung / multi-platform-video-downloader', url: 'https://github.com/lumawaung/multi-platform-video-downloader', icon: 'github' },
  { name: 'Python download', desc: 'Official Python installers', url: 'https://www.python.org/downloads/', icon: 'laptop' },
  { name: 'Telegram application credentials', desc: 'API_ID / API_HASH for MTProto', url: 'https://core.telegram.org/api/obtaining_api_id', icon: 'key' },
  { name: 'Pyrogram documentation', desc: 'Read the maintenance notice', url: 'https://docs.pyrogram.org/', icon: 'info' },
  { name: 'yt-dlp dependencies', desc: 'ffmpeg, JavaScript runtime and more', url: 'https://github.com/yt-dlp/yt-dlp#dependencies', icon: 'download' },
  { name: 'Build an AI skill', desc: 'Official OpenAI skill documentation', url: 'https://learn.chatgpt.com/docs/build-skills', icon: 'spark' },
];
