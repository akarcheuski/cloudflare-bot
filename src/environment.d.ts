import { UserFromGetMe } from "grammy/types";
export default interface Env {
    BOT_TOKEN: string;
    BOT_INFO: UserFromGetMe;
}

declare global {
    namespace NodeJS {
        interface ProcessEnv extends Env {}
    }
}