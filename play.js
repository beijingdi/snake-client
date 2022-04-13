const { ok } = require("assert");
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host:'165.227.47.243',
    port:50541
  });

  conn.setEncoding("utf8");
 

  return conn;
  conn.on("Ethelbert incoming",() => {
    console.log("ok");
  })
};

console.log("Connecting ...");
connect();