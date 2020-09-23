const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541, 
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    conn.write("Name: MSB")
    console.log("Connected succesfully")})
//received data from server and console.logging it 
  conn.on('data', (data) => console.log(data))
  // conn.on('data', () => console.log("Successfully connected to game server"))
  return conn;
}




module.exports = { connect }; 