const { connect } = require('./client');
let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};


const handleUserInput = function (key) {
    if (key === "w") {
      connection.write('Move: up');
      console.log("moving up!")
    }
    if (key ==="a") {
      connection.write("Move: left");
      console.log("moving left!");
    }
    if (key === "s") {
      connection.write("Move: down");
      console.log("moving down!");
    }
    if (key === "d") {
      connection.write("Move: right");
      console.log("Moving right")
    }
    if (key === '\u0003') {
      process.exit();
    }
    if (key === "f") {
      connection.write("Say: uwu");
    }
};

module.exports = {setupInput};