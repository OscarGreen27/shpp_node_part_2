import { getMyIp } from "./2.2.js";

function getIp(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ip = getMyIp();
      resolve(ip);
    }, 1000);
  });
}

async function fucntionTwo(callback: (ip: string) => void) {
  getIp().then((ip) => {
    callback(ip);
  });
}

fucntionTwo((ip) => {
  console.log(ip);
});
