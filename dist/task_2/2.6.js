import { getMyIp } from "./2.2.js";

//function 1 which returns the current user's IP
function getIp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ip = getMyIp();
            resolve(ip);
        }, 1000);
    });
}

//function 2 which uses function 1 to get IP
async function fucntionTwo(callback) {
    getIp().then((ip) => {
        callback(ip);
    });
}


fucntionTwo((ip) => {
    console.log(ip);
});
