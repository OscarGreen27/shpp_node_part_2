import dgram from "dgram";

//create a new socket for the client
const client = dgram.createSocket("udp4");

//host and port of the server to which the client will connect to will be sent
const HOST = "localhost";
const PORT = 8080;

//message sent to the server
const message = "Hello, world!";

//send a message to the server
client.send(message, PORT, HOST);

//create an event listener that listens for responses for the client
client.on("message", (msg, rinfo) => {
  //output the response and close the client
  console.log(`Resived from server ${msg}`);
  client.close();
});

//error event listener.if an error occurs, we output an error message to the console and close the client
client.on("error", (err) => {
  console.log(`Client error ${err.message}`);
  client.close();
});
