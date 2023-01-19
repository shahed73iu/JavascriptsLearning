
let secreteNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if(!guess){
            displayMessage('😒 No Number!');
        }
        else if(guess === secreteNumber){
            displayMessage('😍 Correct Number!');
            document.querySelector('.number').textContent = secreteNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if(guess !== secreteNumber){
            if(score > 1){
                // document.querySelector('.message').textContent =
                // guess > secreteNumber ? '🍟 Too high!' : '🍸 Too low!';
                displayMessage(guess > secreteNumber ? '🍟 Too high!' : '🍸 Too low!');
                score--;
                document.querySelector('.Score').textContent = score;
            }
            else {
                displayMessage('☠ You lost the game!');
                document.querySelector('.Score').textContent = 0;
            }
        }
    });

document.querySelector('.again').addEventListener
('click', function(){
    score = Number(20);
    secreteNumber =  Math.trunc(Math.random() * 20) + 1; 
    displayMessage('🧐 Start guessing...');
    document.querySelector('.Score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';


});