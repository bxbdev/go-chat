// const socket = new WebSocket('ws://localhost:8000/ws');
const socket = new WebSocket("ws://" + window.location.host + "/ws");
const messages = document.getElementById('messages');
const send = document.querySelector('#send');
const sendForm = document.querySelector('#chat-form');

socket.onmessage = (event) => {
    let message = JSON.parse(event.data);
    messages.innerHTML += '<p><strong>' + message.username + ': </strong>' + message.message + '</p>';
};

sendForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const messageInput = document.querySelector('#message');
    const message = messageInput.value;
    const username = document.querySelector('#username').value;
    const data = {
        username,
        message
    };
    socket.send(JSON.stringify(data));
    messageInput.value = '';
});