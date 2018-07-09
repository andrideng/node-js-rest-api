/**
 * Example TCP (Net) Server
 * Listens to port 6000 and sends the word "pong" to client
 * 
 */

// Dependencies
const net = require('net');

// Create the server
const server = net.createServer((connection) => {
    // Send the word "pong"
    const outboundMessage = 'pong';
    connection.write(outboundMessage);
    
    // When the client writes something, log it out
    connection.on('data', (inboundMessage) => {
        const messageString = inboundMessage.toString();
        console.log('I Wrote', outboundMessage, 'and they said', messageString);
    });
});

// Listen
console.log('TCP server listen on port :6000');
server.listen(6000);
