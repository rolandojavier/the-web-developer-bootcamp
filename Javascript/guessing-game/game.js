const secretNumber = 7;
const guess = prompt('Guess a number:');

if(Number(guess) === secretNumber){
    alert('You guessed the correct number!');
}
else if(guess > secretNumber){
    alert('Too high, guess again!');
}
else {
    alert('Too low, guess again!');
}