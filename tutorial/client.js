console.log("Hello world")

const ws = new WebSocket("ws://52.89.101.165/")


ws.onopen = () => {
    console.log("In 'open' handler, before send()");
    ws.send("Hello from the client");
    console.log("After send()");
};

ws.onerror = (err) => {
    console.log("WebSocket error: "+err.data);
};

ws.onclose = () => {
    console.log("WebSocket closed.");
};

ws.onmessage = (msg) => {
    console.log("received: "+msg.data);
};

