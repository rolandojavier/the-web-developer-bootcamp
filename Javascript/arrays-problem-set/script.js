// Write a function printReverse() that takes an array as
// an argument and prints out the elements in the array in
// reverse order(don't actually reverse the array itself)
function printReverse(arr){
    for(let i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
}

// Write a function isUniform() which takes an array as
// an argument and returns true if all elements in the array
// are identical
function isUniform(arr){
    let uniform = true;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            uniform = false;
        }
    }
    return uniform;
}

// Write a function sumArray() that accepts an array of
// numbers and returns the sum of all numbers in the array
function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total+=arr[i];
    }
    return total;
}

// Write a function max() that accepts an array of numbers
// and returns the maximum number in the array
function max(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        } 
    }
    return max;
}