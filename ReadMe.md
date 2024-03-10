# Starter Template For Grammy Telegram Bot With Cloudflare Workers Hosting

# Resources
- [Grammy - Hosting: Cloudflare Workers (Node.js)](https://grammy.dev/hosting/cloudflare-workers-nodejs)
- [Grammy - Hosting: Cloudflare Workers (Deno)](https://grammy.dev/hosting/cloudflare-workers)
- [Cloudflare Environment Variables](https://developers.cloudflare.com/workers/configuration/environment-variables/)
- [Cloudflare Secrets Variables](https://developers.cloudflare.com/workers/configuration/secrets/)

# Initiation Setup
1. Install dependencies.
```bash
npm install
```
2. Edit `package.json`, repalce `name`, `version`, and `description` with your bot's information.
3. Edit `wrangler.toml`, replace `name` to your workers app name, and `account_id` with your Cloudflare account ID. Access it at [Cloudflare Workers Dashboard](https://dash.cloudflare.com/?account=workers).
4. Edit `.dev.vars`, replace:
    - `BOT_TOKEN` with your bot's token. (See [Grammy - Getting Started](https://grammy.dev/guide/getting-started)).
    - `BOT_INFO` with your json bot info, make it one line like below. Get it by accessing `https://api.telegram.org/bot<BOT_TOKEN>/getMe`.
    ```json
    {"id": 1234567890,"is_bot": true,"first_name": "BotName","username": "BotNameBot","can_join_groups": true,"can_read_all_group_messages": false,"supports_inline_queries": false}
    ```
5. Edit `.gitignore`, uncomment the line `# .dev.vars` and `wrangler.toml` to exclude the file in the repository.

# Development Setup (Local - Long Polling)
1. Open `index_dev.ts`.
2. Compile the TypeScript file `npx tsc`.
3. Run the `index_dev.ts` file. It will use long polling to get updates from Telegram by calling bot.start().

# Development Setup (Local - Webhook)
1. Open `index.ts`.
2. Compile the TypeScript file `npx tsc`.
3. Run the command line `npm run start`.
4. From VS Code panel (``Ctrl + ` `` or `Ctrl + J`), open PORTS tab.
5. Click Forward a Port, then enter the port number from 3rd step, example: `8787`.
6. Right click the row, then change the port forwarding to Public.
7. Set webhook by accessing `https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=https://<PORTS_FORWARDING_LINK>` from your browser.
8. Test by sending message to Bot.
9. If you want to stop the server, press `Ctrl + C` in the terminal. Don't forget to private the port forwarding.
10. If you want to remove the webhook, access `https://api.telegram.org/bot<BOT_TOKEN>/setWebhook` from your browser. Blank url will delete the webhook.

# Deployment Setup
1. Open `index.ts`.
2. Compile the TypeScript file `npx tsc`.
3. Run the command line `npm run deploy`.
4. Set webhook to deployed URL by accessing `https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=https://<MY_BOT>.<MY_SUBDOMAIN>.workers.dev/` from your browser.
5. Test by sending message to Bot.
---

**Good Luck!**