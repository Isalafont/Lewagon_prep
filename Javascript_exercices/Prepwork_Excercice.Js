// Excercice VOTE - Javascript 
// Using Contidional execution  If Else 

const age = Number(prompt("What's your age?"));

if (age >= 21) {
  console.log("You can be elected as President!");
  } else if (age >= 18) {
    console.log("You can vote.");
  } else {
    console.log("Sorry, you're too young to vote!");
  }
    
// Using Function 

function votingAge(age){
  if (age >= 21){
    return "You can be elected as President!";
  } else if (age >= 18) {
     return "You can vote.";
  } else { 
      return "Sorry you're too young to vote!";
  }
}

const age = Number(prompt("What's your age?"));
console.log(votingAge(age));

// using const instead of var - 
// Const is a signal that the identifier won't be reassigned

// let is a signal that the variable may be reassigned 
// such as a counter in a loop - tends to be for loops or mathematical algorithms.

// Exercice IMDB LIST / Top 10 rating Movie 

for (i = 0; i < 10; i++) {
  console.log($(".titleColumn a"). get(i).innerHTML)
}