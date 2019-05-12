
const websockets_server = require("ws");

// this fails, I think because of lack of certificates?
// server = new websockets_server.Server({ port: 443, ssl: true });

// fallback to unencrypted sockets
server = new websockets_server.Server({ port: 80 });



server.on("connection", (conn) => {
    conn.send("Hello from the server");

    conn.on("message", (msg) => {
        console.log("received: "+msg);
        conn.send("sender-reply-to: "+msg);
        console.log("Response sent!");
    });
});


