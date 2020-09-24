// create secretNumber
var secretNum = 4;
// ask user for guess
var guess =Number(prompt("Guess a number"));
while(isNaN(guess)) {
    guess = Number(prompt("Guess a number"));
}

// check if guess is right
if(guess == secretNum) {
    alert("You got it right!"); 
}
// otherwise check if higher 
else if(guess > secretNum ) {
    alert("Too high, Guess again!");
}
// otherwise check if lower
else {
    alert("Too low, guess again!");
}


