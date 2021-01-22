// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");
// const axios = require("axios");
// const corss = require('cors');


// const port = process.env.PORT || 4001;
// const index = require("./routes/index");
// const app = express();

// app.use(index);
// app.use(corss());

// const server = http.createServer(app);
// const io =  socketIo(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"]
//   }
// });

// io.on("connection", socket => {
//   console.log("New client connected"), getApiAndEmit(socket),
//   socket.on("disconnect", () => console.log("Client disconnected"));
// });

// const getApiAndEmit = async socket => {
//   try {
//     const res = await axios.get(
//       "http://api.weatherapi.com/v1/current.json?key=310d3c30ee7e4a4db6b84856212101&q=India"
//     );
//     socket.emit("FromAPI", res.data);
//   } catch (error) {
//     console.error(`Error: ${error.code}`);
//   }
// };

// server.listen(port, () => console.log(`Listening on port ${port}`));