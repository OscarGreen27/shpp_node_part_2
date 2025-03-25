import dgram from "dgram";

//create a new server socket
const server = dgram.createSocket("udp4");

//server port and host
const HOST = "localhost";
const PORT = 8080;

//a function that returns a date, used for logs
function getTime() {
  return new Date().toISOString();
}

//message event listener, prints messages received by the server to the console
server.on("message", (msg, rinfo) => {
  console.log(
    `[${getTime()}] Resived: ${msg} from ${rinfo.address}:${rinfo.port}`
  );

  //we send the message received from the client back and notify that the connection is closed
  server.send(msg, rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.log(`[${getTime()}] Error: ${err.message}`);
    } else {
      console.log(`[${getTime()}] Session closed`);
    }
  });
});

//shutdown event listener, prints a message to the console that the server is closed
process.on("SIGINT", () => {
  server.close(() => {
    console.log(`[${getTime()}] Server has been closed`);
    process.exit(0);
  });
});

//we display a message in the console that the server has started working
server.on("listening", () => {
  const address = server.address();
  console.log(
    `[${getTime()}] Server listening ${address.address}:${address.port}`
  );
});

server.bind({
  address: HOST,
  port: PORT,
  exclusive: true,
});
