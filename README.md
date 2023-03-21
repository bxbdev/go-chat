# go-chat
Practice chat web app with Golang and Websocket

# Websocket methods

1. `WebSocket()`: Make an instance of the websocket
```javascript
const socket = new WebSocket('ws://localhost:8000')
```

2. `WebSocket.send()`: Send a message to the server
```javascript
socket.send('Hello, server!')
```

3. `WebSocket.onopen`: This event is triggered when the WebSocket connection is successfully opened.
```javascript
socket.onopen = (event) => {
  console.log('WebSocket connection opened!');
};
```

4. ```WebSocket.onmessage```: This event is triggered when a message is received from the server.
```javascript
socket.onmessage = (event) => {
  console.log('Received message from server: ', event.data);
};
```

5. ```WebSocket.onclose```: Triggered when the WebSocket is closed.
```javascript
socket.onclose = (event) => {
  console.log('WebSocket connection closed!');
};
```

6. ```WebSocket.onerror```: This event is triggered when a WebSocket error occurs.
```javascript
socket.onerror = (event) => {
  console.error('WebSocket error: ', event);
};
```