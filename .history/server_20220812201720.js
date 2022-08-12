const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
/*app.set("views", "Views");
app.use(express.static("Views"));
/*app.get("/", (req, res) => {
  return res.render("index.html");
});*/
app.get("/", (req, res) => res.sendFile(__dirname + "/Views/index.html"));

io.on("connection", (socket) => {
  console.log("socket connected");
  socket.on("send-msg", (data) => {
    console.log(data);
    io.sockets.emit("send-msg", data);
  });
});
http.listen(5000, () => console.log("listening on http://localhost:5000"));
