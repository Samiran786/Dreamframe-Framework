import { sendCommand } from "./protocol.js";

export async function openUrl(url){
    await sendCommand("OPEN_URL", {url});
}