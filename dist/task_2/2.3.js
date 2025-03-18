//2.3
/**
 * waiting time between requests
 */
/**
 * an array of links to which queries need to be made
 */
const urls = [
    "https://random-data-api.com/api/name/random_name",
    "https://random-data-api.com/api/name/random_name",
    "https://random-data-api.com/api/name/random_name",
];
/**
 * The function processes responses from the server using Promise.all and prints the usernames to the screen.
 * @param urls - array of links
 * @returns - array of usernames
 */
async function getNamePromiseAll(urls) {
    const result = [];
    try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        for (let i = 0; i < responses.length; i++) {
            const resInText = await responses[i].text();
            result.push(findName(resInText));
        }
        console.log(`result from getNamePromiseAll:`);
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }
    catch (e) {
        console.log(e);
    }
    return result;
}
/**
 * The function processes responses from the server without Promise.all and displays the usernames on the screen
 * @param urls - array of links
 * @returns - array of usernames
 */
async function getNameAsyncAwait(urls) {
    const result = [];
    try {
        for (let i = 0; i < urls.length; i++) {
            const resp = await fetch(urls[i]);
            result.push(findName(await resp.text()));
        }
    }
    catch (e) {
        console.log(e);
    }
    console.log(`result from getNameAsyncAwait:`);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
    return result;
}
function getNamePromise(urls) {
    const result = [];
    function getName(urls) {
        return new Promise((resolve) => {
            fetch(urls)
                .then((response) => {
                return response.text();
            })
                .then((data) => {
                return findName(data);
            })
                .then((name) => {
                result.push(name);
                resolve(name);
            });
        });
    }
    const name = getName(urls[0]);
    console.log(name);
}
/**
 * The function searches for a part of a string that matches a regular expression.
 * @param str - a string in which you want to find the part that contains the name
 * @returns - username if the input string contains a match to the regular expression if no match is found then return the input string
 */
function findName(str) {
    const regx = /"name":\s*([^,]+)/;
    const names = str.match(regx);
    if (names) {
        return names[1];
    }
    return str;
}
getNamePromise(urls);
export {};
