process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

// Handle data event
process.stdin.on('data', (input) => {
  // Trim the input to remove any extra whitespace
  const name = input.trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Exit the process with a closing message
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
  // End the process
  process.exit();
});
