const handleUserInput = function (key) {
  // console.log(key); 
  if (key === "w") {
    //going up instruction to the server 
  }
  if (key === "\u0003") {
    //stop the program 
    process.exit();
  }
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)

  return stdin;
}
setupInput(); 

module.exports = { setupInput}; 