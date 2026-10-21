# Mingalar Bot Lab (React SPA)

Telegram bot ကို မြန်မာလို အဆင့်ဆင့် လေ့လာနိုင်မည့် အပြန်အလှန် လေ့လာရေး ဝဘ်ဆိုက် (React + TypeScript + Vite) ဖြစ်ပါသည်။

## အင်္ဂါရပ်များ

- **အဆင့်ဆင့် သင်ခန်းစာ ၈ ခု (Modules 01 - 08)**
  1. မိတ်ဆက် (Overview)
  2. မစခင် ပြင်ဆင်မယ် (System & Knowledge Requirements + Interactive Readiness Checklist)
  3. Bot အလုပ်လုပ်ပုံ (Understand the Basics + Interactive Journey Step-Through + Glossary Search + Quick Quiz)
  4. ပထမဆုံး Bot ဖန်တီးမယ် (Step-by-step Setup Wizard with OS selector: Windows, macOS, Linux)
  5. Bot နဲ့ စမ်းကြည့်မယ် (Interactive Bot Playground & Telegram Simulator with simulated program controls, owner toggle, identity select)
  6. Video Downloader (Architecture deep-dive for lumawaung/multi-platform-video-downloader)
  7. အခက်အခဲ ဖြေရှင်းမယ် (Searchable Troubleshooting guide with error tags & solutions)
  8. AI Agent အတွက် Skill (SKILL.md workflow & AI instructions)
  9. အရင်းအမြစ်နှင့် ဖိုင်များ (Resources & dynamic file downloads)
- **Interactive Playground**: Token မလိုဘဲ browser ထဲတွင် bot command များနှင့် echo handler များ စမ်းသပ်နိုင်ခြင်း
- **Dynamic Starter Kit Generation**: In-browser JSZip ဖြင့် `telegram-bot-starter.zip` နှင့် သီးခြား Python ဖိုင်များ (`bot.py`, `requirements.txt`, `.env.example`, `SKILL.md`) ကို တိုက်ရိုက် download ဆွဲနိုင်ခြင်း
- **Progress Persistence**: သင်ခန်းစာ ပြီးမြောက်မှုနှင့် readiness checklist များကို browser local storage တွင် သိမ်းဆည်းပေးခြင်း
- **Responsive & Accessible**: Mobile sidebar drawer, keyboard navigation, copy-to-clipboard နှင့် print support

## နည်းပညာအသုံးပြုမှု

- **Framework**: React 18, TypeScript, Vite
- **Styling**: Tailored clean CSS with responsive typography & animations
- **Utilities**: JSZip (dynamic starter kit zip bundling)
- **Deployment**: Vite dev server on port 3000 (`0.0.0.0:3000`)
