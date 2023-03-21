const connection = new WebSocket('ws://localhost:8000/ws');
const messages = document.getElementById('messages');
const send = document.querySelector('#send');
const sendForm = document.querySelector('#chat-form');

connection.onmessage = (event) => {
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
    connection.send(JSON.stringify(data));
    messageInput.value = '';
});