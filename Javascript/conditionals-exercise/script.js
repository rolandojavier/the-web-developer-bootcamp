const age = prompt('What is your age?');

// If age is negative
if(age < 0){
    console.log('ERROR - You have not been born yet!');
}
// If age is 21
else if(age === 21){
    console.log('Happy 21st birthday!');
}
// If age is odd
else if(age % 2 !== 0){
    console.log('Your age is odd!');
}
// If age is a perfect square
else if(Math.sqrt(age) - Math.floor(Math.sqrt(age)) === 0){
    console.log('Perfect square!');
}