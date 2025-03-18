import { getMyIp } from "./2.2.js";
const ip = await getMyIp();
function callIp(callback) {
    setTimeout(() => {
        callback(ip);
    }, 1000);
}
function getIp() {
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
