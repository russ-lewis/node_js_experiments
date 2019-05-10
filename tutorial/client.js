console.log("Hello world")

const ws = new WebSocket("ws://localhost:3000/");


ws.addEventListener("open", () => {
    console.log("In 'open' handler, before send()");
    ws.send("Hello!");
    console.log("After send()");
});

