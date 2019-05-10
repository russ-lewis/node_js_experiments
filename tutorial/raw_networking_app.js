// https://nodejs.org/en/docs/guides/getting-started-guide/



const http   = require("http");
const crypto = require("crypto");



// utility functions
function generateAcceptValue(key) {
    return crypto.createHash("sha1")
                 .update(key + "258EAFA5-E914–47DA-95CA-C5AB0DC85B11", "binary")
                 .digest("base64")
}



const hostname = "";
const port = 80;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



server.on("upgrade", (req,socket) => {
    console.log("New connection accepted!");

    // make sure we only handle WebSocket upgrade requests
    if (req.headers["upgrade"] != "websocket") {
      socket.end("HTTP/1.1 400 Bad Request");
      return;
    }

    // read the websockets key, and produce the correct reply
    const acceptVal = generateAcceptValue(req.headers["sec-websocket-key"]);

    const responseHeaders = ["HTTP/1.1 101 Switching Protocols",
                             "Upgrade: WebSocket",
                             "Connection: Upgrade",
                             "Sec-Websocket-Accept: "+acceptVal];

    console.log("Sending the WebSocket protocol response");

    // writing the headers to the socket, manually
    socket.write(responseHeaders.join("\r\n") + "\r\n\r\n");

    console.log("Response sent, what happens next?");



    // set up a listener for all incoming Websocket messages!
    socket.on("data", buffer => 	{
        console.log("Received "+len(buffer)+" bytes");
    });
})

