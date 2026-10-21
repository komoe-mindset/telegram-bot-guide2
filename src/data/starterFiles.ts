export const STARTER_FILES: Record<string, string> = {
  "bot.py": `"""A small private-chat Telegram bot for learning. Stop with Ctrl+C."""

import logging
import os
from pathlib import Path

from dotenv import load_dotenv
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes, MessageHandler, filters

logger = logging.getLogger(__name__)


async def allow_user(update: Update, context: ContextTypes.DEFAULT_TYPE) -> bool:
    """Optionally restrict access to the owner's numeric Telegram user ID."""
    owner_id = context.bot_data.get("owner_id")
    if owner_id is not None and (
        update.effective_user is None or update.effective_user.id != owner_id
    ):
        if update.effective_message:
            await update.effective_message.reply_text("ဒီ bot ကို ပိုင်ရှင်ပဲ အသုံးပြုနိုင်ပါတယ်။")
        return False
    return True


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if await allow_user(update, context) and update.effective_message:
        await update.effective_message.reply_text(
            "မင်္ဂလာပါ။ သင့်ရဲ့ Python bot အလုပ်လုပ်နေပါပြီ။\\n"
            "စာတစ်ကြောင်း ပို့ကြည့်ပါ။ အဲဒီစာကို ပြန်ပို့ပေးပါမယ်။\\n"
            "/help နဲ့ အကူအညီကြည့်နိုင်ပါတယ်။"
        )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if await allow_user(update, context) and update.effective_message:
        await update.effective_message.reply_text(
            "/start - စတင်ရန်\\n/help - အကူအညီ\\n/whoami - သင့် user ID ကြည့်ရန်\\n"
            "သာမန်စာပို့ရင် အဲဒီစာကိုပဲ ပြန်ပို့ပေးပါတယ်။"
        )


async def whoami(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if await allow_user(update, context) and update.effective_message and update.effective_user:
        await update.effective_message.reply_text(f"Your Telegram user ID: {update.effective_user.id}")


async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if await allow_user(update, context) and update.effective_message and update.effective_message.text:
        await update.effective_message.reply_text(update.effective_message.text)


async def on_error(update: object, context: ContextTypes.DEFAULT_TYPE) -> None:
    # Avoid printing request URLs, tokens, or user message contents to logs.
    logger.error("An update failed (%s).", type(context.error).__name__)


def build_app(token: str, owner_id: int | None = None) -> Application:
    app = Application.builder().token(token).build()
    app.bot_data["owner_id"] = owner_id
    private = filters.ChatType.PRIVATE
    app.add_handler(CommandHandler("start", start, filters=private))
    app.add_handler(CommandHandler("help", help_command, filters=private))
    app.add_handler(CommandHandler("whoami", whoami, filters=private))
    app.add_handler(MessageHandler(private & filters.TEXT & ~filters.COMMAND, echo))
    app.add_error_handler(on_error)
    return app


def main() -> None:
    logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
    logging.getLogger("httpx").setLevel(logging.WARNING)
    load_dotenv(Path(__file__).with_name(".env"))
    token = os.getenv("BOT_TOKEN", "").strip()
    if not token or token == "PASTE_BOTFATHER_TOKEN_HERE":
        raise SystemExit("Copy .env.example to .env and set BOT_TOKEN locally first.")
    owner_text = os.getenv("OWNER_USER_ID", "").strip()
    if owner_text and (not owner_text.isdecimal() or int(owner_text) <= 0):
        raise SystemExit("OWNER_USER_ID must be empty or a positive numeric Telegram user ID.")
    app = build_app(token, int(owner_text) if owner_text else None)
    logger.info("Bot starting. Open your bot in Telegram and send /start. Stop with Ctrl+C.")
    app.run_polling(allowed_updates=[Update.MESSAGE])


if __name__ == "__main__":
    main()
`,
  "requirements.txt": `python-telegram-bot==22.8
python-dotenv>=1.0,<2.0
`,
  ".env.example": `# Paste the token locally. Never send it to a chat or commit the .env file.
BOT_TOKEN=PASTE_BOTFATHER_TOKEN_HERE

# Optional: run /whoami, then paste your numeric user ID here and restart.
# Empty means any user can use this learning bot in a private chat.
OWNER_USER_ID=
`,
  ".gitignore": `.env
.env.*
!.env.example
.venv/
.setup-tmp/
__pycache__/
*.pyc
*.session
*.session-*
cookies*.txt
`,
  "check_offline.py": `"""Check bot behavior with mocked replies; never connects to Telegram."""

import asyncio
from datetime import datetime, timezone
from types import SimpleNamespace
from unittest.mock import AsyncMock

from telegram import Chat, Message, Update, User

import bot


async def main() -> None:
    reply = AsyncMock()
    message = SimpleNamespace(text="offline example", reply_text=reply)
    update = SimpleNamespace(effective_message=message, effective_user=SimpleNamespace(id=77))
    context = SimpleNamespace(bot_data={"owner_id": None})

    await bot.start(update, context)
    assert reply.await_count == 1
    reply.reset_mock()
    await bot.help_command(update, context)
    assert "/whoami" in reply.await_args.args[0]
    reply.reset_mock()
    await bot.whoami(update, context)
    assert reply.await_args.args[0].endswith("77")
    reply.reset_mock()
    await bot.echo(update, context)
    reply.assert_awaited_once_with(message.text)

    context.bot_data["owner_id"] = 77
    reply.reset_mock()
    assert await bot.allow_user(update, context)
    reply.assert_not_awaited()
    context.bot_data["owner_id"] = 88
    reply.reset_mock()
    await bot.echo(update, context)
    assert reply.await_count == 1
    assert reply.await_args.args[0] != message.text
    print("PASS: start, help, whoami, echo, owner access and denied access.", flush=True)

    app = bot.build_app("123456789:OFFLINE_TEST_TOKEN", owner_id=77)
    assert app.bot_data["owner_id"] == 77
    echo_handler = app.handlers[0][-1]

    def telegram_update(chat_type: str) -> Update:
        return Update(
            update_id=1,
            message=Message(
                message_id=1,
                date=datetime.now(timezone.utc),
                chat=Chat(id=77, type=chat_type),
                from_user=User(id=77, first_name="Offline", is_bot=False),
                text="hello",
            ),
        )

    assert echo_handler.check_update(telegram_update("private"))
    assert not echo_handler.check_update(telegram_update("group"))
    print("PASS: application construction and private/group message filters.", flush=True)


if __name__ == "__main__":
    asyncio.run(main())
`,
  "SKILL.md": `---
name: telegram-bot-python
description: Create or modify Python Telegram bots, explain their setup in Myanmar, and troubleshoot their handlers or deployment. Use for BotFather and Bot API projects; use MTProto user sessions only when the requested design needs them.
---

Explain user-facing steps in Myanmar, retaining command names and code identifiers in English.

For a new bot, establish the requested behavior and inspect the existing project if present. Prefer a small python-telegram-bot application with long polling for initial local learning. Read the current official library examples before choosing dependency versions or handler APIs. Reuse the project's established framework when editing an existing bot.

Explain that BotFather creates a separate bot identity owned by the user's Telegram account. Guide the user through /newbot and local token configuration. Ordinary Bot API bots require a bot token, not a personal Telegram login or API_ID/API_HASH.

Use an isolated virtual environment, a requirements file, .env.example with placeholders, and a .gitignore covering .env, virtual environments, sessions, and cookies. Never request real tokens, OTPs, 2FA passwords, session strings, or cookies in chat. Do not print them or embed them in source code, URLs shown to the user, or skill files. The user enters credentials locally.

Provide the smallest runnable behavior that meets the request, then explain how to extend it. For personal bots, offer a numeric Telegram user-ID allowlist. Keep group access consistent with the requested behavior and Telegram privacy settings.

For downloaders, check current yt-dlp and ffmpeg requirements, bound file sizes and concurrent work, clean temporary files, and avoid blocking the async event loop. Handle untrusted URLs without shell interpolation and reject private-network destinations. Use material the user owns or has permission to download; do not promise every site or link will work.

If the user chooses lumawaung/multi-platform-video-downloader, inspect its actual README, requirements, config.py, setup_session.py, bot.py, and uploader.py at a recorded commit. It combines Bot API handlers with a Pyrogram user uploader and a private relay channel. BOT_TOKEN alone is insufficient. Its ADMIN_IDS setting exempts users from limits; it is not an access allowlist. The deployment files target Linux/systemd. Verify dependency maintenance before proposing production use.

For that relay design, distinguish BOT_TOKEN, API_ID/API_HASH, RELAY_CHANNEL_ID, and uploader.session. Explain that the session authorizes a personal account. Guide interactive login only on the user's machine. Do not create a login session, upload files, post to a relay channel, or deploy merely because this skill was invoked; those actions need authorization in the user's task.

Validate syntax and handler behavior with offline mocks first. Claim successful live operation only after an authorized real Telegram check. Report files created, exact local run commands, validation performed, and remaining user actions. Installation of this draft skill is a separate user choice.

References, read only as relevant:
- Telegram bot creation: https://core.telegram.org/bots/features#botfather
- Telegram API limits and update modes: https://core.telegram.org/bots/api
- Python bot examples: https://docs.python-telegram-bot.org/en/stable/examples.html
- Downloader reference: https://github.com/lumawaung/multi-platform-video-downloader
- Pyrogram maintenance notice: https://docs.pyrogram.org/
`,
  "README-MM.md": `# Mingalar Bot Lab — Python Telegram Bot Starter Kit

Telegram bot ကို Python နဲ့ မြန်မာလို အဆင့်ဆင့် လေ့လာနိုင်မည့် အသင့်သုံး Starter Kit ဖြစ်ပါတယ်။

## ပါဝင်သောဖိုင်များ

- \`bot.py\` : ပထမဆုံး စာပြန် Telegram bot (commands, echo, owner access filter)
- \`requirements.txt\` : လိုအပ်သော Python libraries (\`python-telegram-bot\`, \`python-dotenv\`)
- \`.env.example\` : Token နှင့် configuration အတွက် ဥပမာ ပုံစံ
- \`.gitignore\` : Token နှင့် virtual environment များ Git ထဲ မပါစေရန် ကာကွယ်မှု
- \`check_offline.py\` : Telegram သို့ အင်တာနက်မချိတ်ဘဲ bot handlers စမ်းသပ်သည့် offline test
- \`SKILL.md\` : AI Agent (Codex/ChatGPT) အတွက် ပြန်လည်အသုံးပြုနိုင်သော workflow

## စတင်ရန် လမ်းညွှန်

### အဆင့် ၁ - Bot ဖန်တီးခြင်း
Telegram တွင် \`@BotFather\` ဆီသို့ သွား၍ \`/newbot\` ဖြင့် သင့် bot ကို ဖန်တီးပြီး Bot Token ရယူပါ။

### အဆင့် ၂ - Virtual Environment ပြင်ဆင်ခြင်း
\`\`\`bash
# Windows
python -m venv .venv
.\\.venv\\Scripts\\python.exe -m pip install -r requirements.txt

# macOS / Linux
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
\`\`\`

### အဆင့် ၃ - Token ထည့်သွင်းခြင်း
\`.env.example\` ဖိုင်ကို \`.env\` အဖြစ် copy ကူးပြီး BotFather မှ ရရှိသော token ကို ထည့်ပါ။

### အဆင့် ၄ - Bot Run ခြင်း
\`\`\`bash
# Windows
.\\.venv\\Scripts\\python.exe bot.py

# macOS / Linux
.venv/bin/python bot.py
\`\`\`
`
};
