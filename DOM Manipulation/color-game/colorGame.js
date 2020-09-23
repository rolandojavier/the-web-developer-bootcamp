let numSquares = 6;
let colors = [];
let pickedColor;

const h1 = document.querySelector('h1');
const squares = document.querySelectorAll('.square');
const modeButtons = document.querySelectorAll('.mode');
const resetButton = document.querySelector('#reset');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');

resetButton.addEventListener('click', function(){
    reset();
});

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function reset(){
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //Change colors of squares
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }

    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
}

function setUpSquares(){
    for(let i = 0; i < squares.length; i++){
        //Add click event listeners to squares
        squares[i].addEventListener('click', function(){
            //Grab color of clicked square
            const clickedColor = this.style.backgroundColor;
            //Compare color to pickedColor
            if(clickedColor === pickedColor){
                //Correct
                messageDisplay.textContent = 'Correct!';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = 'Play Again?';
            } else {
                //Wrong
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again';
            }
        });
    }
}

function setUpModeButtons(){
    //Mode buttons event listeners
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function changeColors(color){
    //Loop through all squares
    for(let i = 0; i < squares.length; i++){
        //Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Make an array and add num random colors to array
    const arr = [];
    //Repeat num times
    for(let i = 0; i < num; i++){
        //Get random color and push into arr
        arr.push(randomColor());
    }
    //Return that array
    return arr;
}

function randomColor(){
    //Pick a "red" from 0 - 255
    const r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0 - 255
    const g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0 - 255
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}