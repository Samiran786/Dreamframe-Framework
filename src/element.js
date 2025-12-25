import { sendCommand } from "./protocol.js";

export function $(selector){
    return{
        async click(){
            await sendCommand("ELEMENT_CLICK", {selector});
        }
    }
}