import { createServer } from "net";

//creating a server
const server = createServer((socket) => {
  //output a message when the client is connected
  console.log("Client conected");

  //event listener "date". processes incoming messages from the client
  socket.on("data", (data) => {
    //when we receive a message from a client, we display data about the client and their message
    console.log(
      `Сlient connected. Time: ${new Date()}, IP: ${
        socket.remoteAddress
      }, received from client: ${data}`
    );

    //we send the client his message
    socket.write(`${data}`);

    //event listener "end". reports to the console when the connection to the client is lost
    socket.on("end", () => {
      console.log(`Client disconected`);
    });
  });
});

//server startup
server.listen(8080, () => {
  console.log("TCP server listening on port 8080");
});
