import sleep from 'sleep-promise'

const WAKEUP_INTERVAL_MS = 100;

export default async function waitUntil(async_condition, max_tries) {
   var tries = 0;
   while (true) {
       if (tries > max_tries) {
           throw "waitUntil: Waiting too long for a condition."
       }
       await sleep(WAKEUP_INTERVAL_MS);
       tries++;
       let res = await async_condition();
       if (res == true) {
           return;
       }
   }
}
