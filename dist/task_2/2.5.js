import { getMyIp } from "./2.2.js";

//gets an IP address
const ip = await getMyIp();

//function 1 accepts a callback and calls it after 1 second
function callIp(callback) {
    setTimeout(() => {
        callback(ip);
    }, 1000);
}

//function 2 which uses function 1
function getIp() {
    return new Promise((resolve) => {
        callIp(() => {
            resolve(ip);
        });
    });
}

//function for demonstrating work
(async () => {
    const ip = await getIp();
    console.log(ip);
})();
