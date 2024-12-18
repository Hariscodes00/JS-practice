const readline = require("readline");

// Create an interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for the user's name
rl.question("What is your name? ", function (name) {
  // Ask for the user's age
  rl.question("How old are you? ", function (age) {
    // Print the result
    console.log(`Hello, ${name}! You are ${age} years old.`);

    // Close the readline interface
    rl.close();
  });
});
