console.log("Hello world")

const ws = new WebSocket("ws://elastic.ec2.private/");


ws.onopen = () => {
    console.log("In 'open' handler, before send()");
    ws.send("Hello from the client");
    console.log("After send()");
};

ws.onerror = (err) => {
    console.log("WebSocket error: "+error);
};

ws.onmessage = (msg) => {
    console.log("received: "+msg.data);
};

