function average(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return Math.round(total / arr.length);
}

const scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));