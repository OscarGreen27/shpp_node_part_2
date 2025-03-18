import http from "http";

//data sent to server
const requestData = "Kapibara";

//server request option
const options = {
  host: "localhost",
  port: "8080",
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
};

//we form a request to the server
const req = http.request(options, (res) => {
    //variable to store the response from the server
  let responseData = "";

  //add the response from the server to responseData
  res.on("data", (chunk) => {
    responseData += chunk.toString();
  });

  //when the connection is completed, we output the received data to the console
  res.on("end", () => {
    console.log(`server response: ${responseData}`);
  });
});

//send a request to the server and close the connection
req.write(requestData);
req.end();
