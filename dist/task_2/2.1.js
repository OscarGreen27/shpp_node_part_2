//2.1
async () => {
    const data = await fetch("https://api.ipify.org?format=json");
    console.log(data.json());
};
export {};
