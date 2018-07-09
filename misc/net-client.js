/**
 * Example TCP (Net) Client
 * Connects to port 6000 and send the word 'ping' to the server
 * 
 */

// Dependencies
const net = require('net');

// Define the message to send
const outboundMessage = 'ping';

// Create the client
const client = net.createConnection({port: 6000}, () => {
    // Send the message
    client.write(outboundMessage);
});

// When the server writes back, log what it says then kill the client
client.on('data', (inboundMessage) => {
    const messageString = inboundMessage.toString();
    console.log('I Wrote', outboundMessage, 'and they said', messageString);
    client.end();
});
