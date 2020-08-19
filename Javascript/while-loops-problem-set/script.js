console.log('1. ALL NUMBERS BETWEEN -10 AND 19');
let x = -10;
while(x <= 19){
    console.log(x);
    x++;
}

console.log('2. ALL EVEN NUMBERS BETWEEN 10 AND 40');
x = 10;
while(x <= 40){
    console.log(x);
    x+=2;
}

console.log('2. ALL ODD NUMBERS BETWEEN 300 AND 333');
x = 300;
while(x <= 333){
    if(x % 2 !== 0){
        console.log(x);
    }
    x++;
}

console.log('2. ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50');
x = 5;
while(x <= 50){
    if(x % 5 === 0 && x % 3 === 0){
        console.log(x);
    }
    x++;
}