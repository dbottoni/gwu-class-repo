const fs = require('fs');
// Install the `inquirer` dependency HERE
const inquirer = require('inquirer');

// Prompt the user for their name, preferred method of communication, and known languages
// YOUR CODE HERE
//
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])

// Write the user response to a file by chaining the below callback method to the prompt above.
.then(function(data) {

  // Bonus: Generate the name of your user file from their input
  // Your bonus code here
  //
  const filename=
  data.name
  .toLowerCase()
  .split(' ')
  .join('') + '.json';


  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
