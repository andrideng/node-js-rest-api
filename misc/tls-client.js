/**
 * Example TLS Client
 * Connects to port 6000 and send the word 'ping' to the server
 * 
 */

// Dependencies
const tls = require('tls');
const fs = require('fs');
const path = require('path');

// certificate options
const options = {
    // Only required because we're using self-signed certificate
    ca : fs.readFileSync(path.join(__dirname, '/../https/cert.pem')) 
};

// Define the message to send
const outboundMessage = 'ping';

// Create the client
const client = tls.connect(6000, options, () => {
    // Send the message
    client.write(outboundMessage);
});

// When the server writes back, log what it says then kill the client
client.on('data', (inboundMessage) => {
    const messageString = inboundMessage.toString();
    console.log('I Wrote', outboundMessage, 'and they said', messageString);
    client.end();
});
