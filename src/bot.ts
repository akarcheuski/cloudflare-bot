import Env from "./environment.d";
//import { Bot } from "grammy";
//import { MenuMiddleware, MenuTemplate } from 'grammy-inline-menu';
import { UserFromGetMe } from "grammy/types";
import { Bot, type Context as BaseContext } from 'grammy';
import { Menu } from '@grammyjs/menu';

export const initBot = (env: Env): Bot => {

    // Check out https://grammy.dev/guide/context.html and Context flavours
    type MyContext = BaseContext;
    const BOT_TOKEN: string = env.BOT_TOKEN;
    const BOT_INFO: UserFromGetMe = env.BOT_INFO;
    const bot = new Bot(BOT_TOKEN, { botInfo: BOT_INFO });
    //const bot = new Bot<MyContext>(process.env['BOT_TOKEN']!);
    // const bot = new Bot<MyContext>(BOT_TOKEN, { botInfo: BOT_INFO });
    // Handle the /start command.
    // bot.command("start", async (ctx) => await ctx.reply("Бот Андрея и Марии. Напишите сообщение"));

    // Creating a simple menu
    const menu = new Menu("my-menu-identifier")
        .text("Order Mini App", (ctx) => ctx.reply("You selected Order Mini App")).row()
        .text("Order Bot", (ctx) => ctx.reply("You selected Order Bot"));

    // Make it interactive
    bot.use(menu);

    bot.command("start", async (ctx) => {
        // Send the menu:
        await ctx.reply("Меню:", { reply_markup: menu });
    });

    // Handle other messages.
    bot.on("message", async (ctx) => await ctx.reply("Сообщение получено. Спасибо"));

    // const menuTemplate = new MenuTemplate<MyContext>((ctx) =>
    //     `Hi`
    // );

    // menuTemplate.interact('unique', {
    //     text: 'I am excited!',
    //     do: async (ctx) => {
    //         await ctx.reply('As am I!');
    //         return false;
    //     },
    // });

    // const menuMiddleware = new MenuMiddleware('/', menuTemplate);
    // bot.command('start', (ctx) => menuMiddleware.replyToContext(ctx));
    // bot.use(menuMiddleware);

    // bot.start();

    return bot;
}