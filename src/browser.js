import { openPageUrl } from "./protocol.js";

export async function openUrl(url){
    await openPageUrl(url);
}