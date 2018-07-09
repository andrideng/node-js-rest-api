/**
 * Example UDP clint
 * Sending message to a UDP server on port 6000
 * 
 */

// Dependencies
const dgram = require('dgram');

// Create the client
const client = dgram.createSocket('udp4');

// Define the message an pull in into a buffer
const messageString = 'This is a message';
const messageBuffer = Buffer.from(messageString);

// Send off the message
client.send(messageBuffer, 6000, 'localhost', (err) => {
    client.close();
});
