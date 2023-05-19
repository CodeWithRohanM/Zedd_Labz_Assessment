const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);

const PORT = 8000;

const inputOutput = socketIO(server);

inputOutput.on("connection", (socket)=>{
    console.log("User Connected..");
});

server.listen(PORT, ()=>{
    console.log("Server Successfully Runing on PORT 8000");
});




