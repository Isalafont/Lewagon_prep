// Excercice VOTE - Javascript 
// Using Contidional execution  If Else 

let age = Number(prompt("What's your age?"));

if (age >= 21) {
  console.log("You can be elected as President!");
  } else if (age >= 18) {
    console.log("You can vote.");
  } else {
    console.log("Sorry, you're too young to vote!");
  }
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

var age = Number(prompt("What's your age?"));
console.log(votingAge(age));