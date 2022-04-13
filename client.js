const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host:'165.227.47.243',
    port:50541
  });

  conn.setEncoding("utf8");
  //conn.on("Ethelbert incoming",() => {
  //  console.log("ETB");
  //})

  conn.on('connect', () => {
    console.log("connected to server!");
    conn.write('Name: ETB');
    //setInterval(() =>{conn.write("Move: up");},1000);
  });
  return conn;
};



module.exports = {net,connect};

