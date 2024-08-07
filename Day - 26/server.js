import express from 'express';
import WebSocket from 'ws';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8080;

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the current directory
app.use(express.static(__dirname));

// Start HTTP server
const server = app.listen(port, () => {
    console.log(`HTTP server is running on http://localhost:${port}`);
});

// Create WebSocket server and attach to HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected.');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected.');
    });
});
