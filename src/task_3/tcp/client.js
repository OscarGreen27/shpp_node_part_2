import { createConnection } from "net";

//message from the client that will be sent to the server
const clientMasage = "Hello, world!";

//variable to store the connection start time
let startTime;

//create a connection on port 8080
const client = createConnection({ port: 8080 }, () => {
  //record the connection start time
  startTime = Date.now();
  //send a message to the server
  client.write(`${clientMasage}`);
});

//date event listener
client.on("data", (data) => {
  //translate the message received from the server into string format
  const serverMasage = data.toString();
  //record the connection completion time
  const endTime = Date.now();

  //output the string received from the server to the console
  console.log(`Recive data: ${serverMasage}`);

  //we check if the server sent us the same message that we sent it
  if (serverMasage === clientMasage) {
    console.log("Similar text received from the server");
  }

  //we output a message to the console with the amount of time spent connecting and receiving data
  console.log(`Time spent: ${endTime - startTime} ms`);

  //completing the connection
  client.end();
});

//"end" event listener. prints a message to the console when the connection is broken
client.on("end", () => {
  console.log(`Disconect from server`);
});
