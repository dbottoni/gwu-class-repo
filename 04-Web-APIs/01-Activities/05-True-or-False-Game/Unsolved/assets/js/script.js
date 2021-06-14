// TODO: Create an array with five question objects
var questions = [
  { q: 'The sky is blue.', a: 't'}.
  { q: 'There are 365 days in a year.', a: 't'}.
  { q: 'There are 42 ounces in a pound.', a: 'f'}.
  { q: 'The Declaration of Independence was created in 1745.', a: 'f'}.
  { q: 'Bananas are vegetables', a: 'f'}. 
];

// TODO: Create a variable to keep track of the score

var score = 0;

// TODO: Iterate over the questions array and display each question in a confirmation box
for (var = 0; i < questions.length; i++ ) {
  var answer = confirm(questions[i].q);

};


// TODO: Check the user's answer against the correct answer

// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score
