//2.2
/**
 * The function returns the user's IP.
 * @returns - user ip (type string)
 */
export async function getMyIp(): Promise<string> {
  const resp: Response = await fetch("https://api.ipify.org?format=json");
  const data: {ip: string} = await resp.json();
  return data.ip;
}