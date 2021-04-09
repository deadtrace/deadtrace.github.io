const simulateAttackButton = document.getElementById('simulate-attack');
const simulateQuarterButton = document.getElementById('simulate-quarter');
const simulateGameButton = document.getElementById('simulate-game');

const homeScore = document.getElementById('home-score');
const awayScore = document.getElementById('away-score');
const timeLeft = document.getElementById('time-left');
const quarterNumber = document.getElementById('quarter');

const initialPossession = Boolean(Math.floor(Math.random() * 2));
let currentPossession = initialPossession;
let quarter = 1;
let endOfGame = false;

let time = moment().set('minute', 12).set('second', 0);
const initialTime = moment(time);
const timeControl = moment(time).subtract(720, 'seconds');

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

function subtractTime(seconds) {
    time = time.subtract(seconds, 'seconds');
    if (time <= timeControl) {
        if (quarter === 4) {
            endOfGame = true;
            timeLeft.innerText = 'FINAL';
            quarterNumber.style.display = 'none';
            return;
        }

        quarter++;
        time = moment(initialTime);
        quarterNumber.innerText = quarter + ' quarter';

        if (quarter === 4) {
            currentPossession = initialPossession;
        } else {
            currentPossession = !initialPossession;
        }
    }
    timeLeft.innerText = time.format('mm:ss');
}

function addScore(points) {
    if (!endOfGame) {
        if (currentPossession) {
            let oldScore = Number(homeScore.innerText);
            homeScore.innerText = oldScore + points;
        } else {
            let oldScore = Number(awayScore.innerText);
            awayScore.innerText = oldScore + points;
        }
    } else {
        alert('The game is over');
    }
}

function simulateAttack() {
    let attackTime = 6 + Math.floor(Math.random() * 19);
    let scoredPoints = Math.max(Math.floor(Math.random() * 5) - 1, 0);
    addScore(scoredPoints);
    subtractTime(attackTime);
    currentPossession = !currentPossession;
}

function simulateQuarter() {    
    if (!endOfGame) {
        let currentQuarter = quarter;
        while (!endOfGame && quarter === currentQuarter) {
            simulateAttack();
        }
    } else {
        alert('The game is over');
    }

}

function simulateGame() {
    if (!endOfGame) {
        while (!endOfGame) {
            simulateAttack();
        }
    } else {
        alert('The game is over');
    }
}

simulateAttackButton.addEventListener("click", simulateAttack, false);
simulateQuarterButton.addEventListener("click", simulateQuarter, false);
simulateGameButton.addEventListener("click", simulateGame, false);