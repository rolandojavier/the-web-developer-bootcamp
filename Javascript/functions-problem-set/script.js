// Write a function isEven() which takes a single numeric argument
// and returns true if the number is even, and false otherwise
function isEven(x){
    return x % 2 === 0;
}

// Write a function factorial() which takes a single numeric argument
// and returns the factorial of that number
function factorial(x){
    let res = 1;
    for(let i = 2; i <= x; i++){
        res = res * i;
    }
    return res;
}

// Write a function kebabToSnake() which takes a single kebab-cased
// string argument and returns the snaked_cased version
function kebabToSnake(str){
    return str.replace('-', '_');
}