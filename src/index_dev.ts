import { initBot } from "./bot";

// read the environment variables from the .dev.vars file
import { config } from "dotenv";
config({ path: ".dev.vars" });

/**
 * Development Using Long Polling Steps: Just run this file (after compiling npx tsc).
 */
const env = process.env;
const bot = initBot(env);
bot.start();
