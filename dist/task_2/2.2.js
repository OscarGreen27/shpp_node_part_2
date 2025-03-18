//2.2
/**
 * The function returns the user's IP.
 * @returns - user ip (type string)
 */
export async function getMyIp() {
    const resp = await fetch("https://api.ipify.org?format=json");
    const data = await resp.json();
    return data.ip;
}
