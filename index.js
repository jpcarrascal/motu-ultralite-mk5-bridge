import { WebSocketServer } from 'ws';
import WebSocket from 'ws';
const ip = "169.254.43.109";
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws2) {
    console.log("Remote CueMix connected.")
    const ws = new WebSocket('ws://'+ip+':1280');
    ws.on('open', function open() {
        console.log("Connected to Ultralite mk5... bridge started!")
    });
    
    ws.on('message', function(data){
        ws2.send(data);
    });
    
    ws2.on('message', function message(data) {
      ws.send(data)
    });
});

