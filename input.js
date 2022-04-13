const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function () {
    process.stdin.on = function(key) {
      if (key === "w") {
        process.stdout.write('Move: up');
      }
      if (key ==="a") {
        process.stdout.write("Move: left");
      }
      if (key === "s") {
        process.stdout.write("Move down");
      }
      if (key === "d") {
        process.stdout.write("Move: right");
      }
      if (key) {
        console.log(key)
      }
      if (key === '\u0003') {
        process.exit();
      }
    }// your code here
  };
  stdin.on("data",handleUserInput);
  return stdin;
};

module.exports = {setupInput};