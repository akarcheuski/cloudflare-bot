import Env from "./environment.d";
import { Bot } from "grammy";
import { UserFromGetMe } from "grammy/types";

export const initBot = (env: Env): Bot => {
    const BOT_TOKEN: string = env.BOT_TOKEN;
    const BOT_INFO: UserFromGetMe = env.BOT_INFO;
    const bot = new Bot(BOT_TOKEN, { botInfo: BOT_INFO });
    
    // Handle the /start command.
    bot.command("start", async (ctx) => await ctx.reply("Welcome! Up and running."));
    // Handle other messages.
    bot.on("message", async (ctx) => await ctx.reply("Got message!"));

    return bot;
}