//link from which we get random users
const url = "https://random-data-api.com/api/users/random_user";

//waiting time between requests
const timeOutTime = 2000;

let count = 0;
/**
 * implementation without async/await
 *
 * The function recursively sends a request to the server to get the female user.
 * The function also changes the data in the count variable to display the number of requests
 * on the screen when a user with user.gender === "Female" is successfully found.
 *
 * @param url - link to which the request is sent
 */
function getGender(url: string): void {
  count++;
  console.log(`Starting attempt: ${count}`);
  new Promise<string | void>((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((resp) => {
          return resp.json();
        })
        .then((user: { gender: string }) => {
          console.log(`User gender: ${JSON.stringify(user.gender)}`);
          if (user.gender === "Female") {
            console.log(`Number of attempts ${count}`);
            resolve(user.gender);
          } else {
            getGender(url);
          }
        })
        .catch((e) => {
          console.log(`Error ${e}`);
          reject(e);
        });
    }, timeOutTime);
  });
}

getGender(url);

/**
 * implementation with async/await
 *
 * The function recursively sends a request to the server to get the female user.
 * The function also changes the data in the count variable to display the number of requests
 * on the screen when a user with user.gender === "Female" is successfully found.
 *
 * @param url - link to which the request is sent
 */
function getGenderAsync(url: string): void {
  count++;
  console.log(`Starting attempt: ${count}`);
  setTimeout(async () => {
    try {
      const resp = await fetch(url);
      const user: { gender: string } = await resp.json();
      console.log(`User gender: ${JSON.stringify(user.gender)}`);
      if (user.gender === "Female") {
        console.log(`Number of attempts ${count}`);
      } else {
        getGenderAsync(url);
      }
    } catch (e) {
      console.log(e);
    }
  }, timeOutTime);
}

getGenderAsync(url);
