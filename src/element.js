import { clickElement, findElement, sendCommand } from "./protocol.js";

export function $(selector){
    return{
        async click(){
            //await sendCommand("ELEMENT_CLICK", {selector});
            const elementId = await findElement(selector);
            await clickElement(elementId);
        }
    }
}