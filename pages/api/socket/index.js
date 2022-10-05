import { Server } from "socket.io";

const handler = async (req, res) => {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  // const onConnection = (socket) => {
  //     //To do
  // }

  io.on("connection", (socket) => {
    //emitted functions
    // socket.on("new-message",(data) => {
    //     console.log(data,"Sever Side")
    //     socket.broadcast.emit("new-incoming-message",{
    //         content:data.content,
    //         convoID: data.convoID
    //     })
    // })

    const newMessage = (data) => {
      socket.broadcast.emit("new-incoming-message", data);
    };

    socket.on("new-message", newMessage);
  });

  console.log("Setting up socket");
  res.end();
};

export default handler;
