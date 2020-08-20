console.log('1. ALL NUMBERS BETWEEN -10 AND 19');
for(let x = -10; x <= 19; x++){
    console.log(x);
}

console.log('2. ALL EVEN NUMBERS BETWEEN 10 AND 40');
for(let x = 10; x <= 40; x+=2){
    console.log(x);
}

console.log('2. ALL ODD NUMBERS BETWEEN 300 AND 333');
for(let x = 300; x <= 333; x++){
    if(x % 2 !== 0){
        console.log(x);
    }
}

console.log('2. ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50');
for(let x = 5; x <= 50; x++){
    if(x % 5 === 0 && x % 3 === 0){
        console.log(x);
    }
}