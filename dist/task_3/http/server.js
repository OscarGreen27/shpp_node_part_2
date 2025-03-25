import http from "http";

//port on which the server listens
const PORT = 8080;

//the function returns the current time
function getTime() {
  return new Date().toISOString();
}

//form the server body
const server = http.createServer((req, res) => {

  //outputs data received from the client to the console
  console.log(`[${getTime()}]: request received ${req.method} ${req.url}`);

  //the variable stores the data received from the client
  let body = "";

  //add the data received from the client to the body variable
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  //completing the connection
  req.on("end", () => {

    //we output the data received from the client and the time of receipt to the console
    console.log(`[${getTime()}]: received from client ${body}`);

    //response to the client
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(body);
  });
});

//server startup
server.listen(PORT, () => {
  console.log("Sever listen on http://localhost:8080");
});
