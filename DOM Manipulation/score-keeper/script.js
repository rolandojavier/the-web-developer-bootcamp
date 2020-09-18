const scoreOne = document.querySelector('#score-one');
const scoreTwo = document.querySelector('#score-two');
const playingTo = document.querySelector('#playing-to-text');
const playingToSelector = document.querySelector('#playing-to-selector');

function addScore(score) {
    if(scoreOne.textContent < playingTo.textContent && scoreTwo.textContent < playingTo.textContent){
        score.textContent++;
        if(score.textContent == playingTo.textContent){
            score.style.color = 'green';
        }
    }
};

function reset() {
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    scoreOne.style.color = 'black';
    scoreTwo.style.color = 'black';
};

document.querySelector('#player-one').addEventListener('click', () => addScore(scoreOne));
document.querySelector('#player-two').addEventListener('click', () => addScore(scoreTwo));

document.querySelector('#reset').addEventListener('click', function(){
    reset();
});

playingToSelector.addEventListener('input', function(){
    playingTo.textContent = this.value;
    reset();
});