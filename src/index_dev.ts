import { initBot } from "./bot";
import { run } from "@grammyjs/runner";

// read the environment variables from the .dev.vars file
import { config } from "dotenv";
config({ path: ".dev.vars" });

/**
 * Development Using Long Polling Steps: Just run this file (after compiling npx tsc).
 */
const env = process.env;
const bot = initBot(env);

process.once("SIGINT", () => bot.stop());
process.once("SIGTERM", () => bot.stop());

run(bot);