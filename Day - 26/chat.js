const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to WebSocket server');
};

ws.onmessage = (event) => {
    const messages = document.getElementById('messages');
    messages.value += `${event.data}\n`;
};

document.getElementById('sendButton').addEventListener('click', () => {
    const input = document.getElementById('messageInput');
    ws.send(input.value);
    input.value = '';
});
