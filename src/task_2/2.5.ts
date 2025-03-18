import { getMyIp } from "./2.2.js";

const ip: string = await getMyIp();

function callIp(callback: (ip: string) => void) {
  setTimeout(() => {
    callback(ip);
  }, 1000);
}

function getIp(): Promise<string> {
  return new Promise((resolve) => {
    callIp(() => {
      resolve(ip);
    });
  });
}

(async () => {
  const ip = await getIp();
  console.log(ip);
})();
