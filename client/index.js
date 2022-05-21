const topLeftSq = document.querySelector('.top-left');
const topMiddleSq = document.querySelector('.top-middle');
const topRightSq = document.querySelector('.top-right');
const middleLeftSq = document.querySelector('.middle-left');
const middleMiddleSq = document.querySelector('.middle-middle');
const middleRightSq = document.querySelector('.middle-right');
const bottomLeftSq = document.querySelector('.bottom-left');
const bottomMiddleSq = document.querySelector('.bottom-middle');
const bottomRightSq = document.querySelector('.bottom-right');
const gameMarker = document.querySelectorAll('.game-marker');
const resetBtn = document.querySelector('.restart-btn');
const xScore = document.querySelector('.x-score');
const oScore = document.querySelector('.o-score');
const turnDisplay = document.querySelector('.turn');

let xPoints = 0;
let oPoints = 0;

const tlMarker = (evt) => {
    gameMarker[0].textContent = 'X';
    oTurn();
}

const tmMarker = (evt) => {
    gameMarker[1].textContent = 'X';
    oTurn();
}

const trMarker = (evt) => {
    gameMarker[2].textContent = 'X';
    oTurn();
}

const mlMarker = (evt) => {
    gameMarker[3].textContent = 'X';
    oTurn();
}

const mmMarker = (evt) => {
    gameMarker[4].textContent = 'X';
    oTurn();
}

const mrMarker = (evt) => {
    gameMarker[5].textContent = 'X';
    oTurn();
}

const blMarker = (evt) => {
    gameMarker[6].textContent = 'X';
    oTurn();
}

const bmMarker = (evt) => {
    gameMarker[7].textContent = 'X';
    oTurn();
}

const brMarker = (evt) => {
    gameMarker[8].textContent = 'X';
    oTurn();
}

const restart = (evt) => {
    xWins();
    oWins();
    for (let i = 0; i < gameMarker.length; i++) {
        gameMarker[i].textContent = '';
    }
}

const xWins = () => {
    if (gameMarker[0].textContent === 'X' && gameMarker[1].textContent === 'X' && gameMarker[2].textContent === 'X') {
        xPoints = xPoints + 1;
        xScore.textContent = xPoints;
        alert('X Wins!');
    } else if (gameMarker[3].textContent === 'X' && gameMarker[4].textContent === 'X' && gameMarker[5].textContent === 'X') {
        xPoints = xPoints + 1;
        xScore.textContent = xPoints;
        alert('X Wins!');
    } else if (gameMarker[6].textContent === 'X' && gameMarker[7].textContent === 'X' && gameMarker[8].textContent === 'X') {
        xPoints = xPoints + 1;
        xScore.textContent = xPoints;
        alert('X Wins!');
    } else if (gameMarker[0].textContent === 'X' && gameMarker[3].textContent === 'X' && gameMarker[6].textContent === 'X') {
        xPoints = xPoints + 1;
        xScore.textContent = xPoints;
        alert('X Wins!');
    } else if (gameMarker[1].textContent === 'X' && gameMarker[4].textContent === 'X' && gameMarker[7].textContent === 'X') {
        xPoints = xPoints + 1;
        xScore.textContent = xPoints;
        alert('X Wins!');
    } else if (gameMarker[2].textContent === 'X' && gameMarker[5].textContent === 'X' && gameMarker[8].textContent === 'X') {
        xPoints = xPoints + 1;
        xScore.textContent = xPoints;
        alert('X Wins!');
    } else if (gameMarker[0].textContent === 'X' && gameMarker[4].textContent === 'X' && gameMarker[8].textContent === 'X') {
        xPoints = xPoints + 1;
        xScore.textContent = xPoints;
        alert('X Wins!');
    } else if (gameMarker[2].textContent === 'X' && gameMarker[4].textContent === 'X' && gameMarker[6].textContent === 'X') {
        xPoints = xPoints + 1;
        xScore.textContent = xPoints;
        alert('X Wins!');
    }
}

const oWins = () => {
    if (gameMarker[0].textContent === 'O' && gameMarker[1].textContent === 'O' && gameMarker[2].textContent === 'O') {
        oPoints = oPoints + 1;
        oScore.textContent = oPoints;
        alert('O Wins!');
    } else if (gameMarker[3].textContent === 'O' && gameMarker[4].textContent === 'O' && gameMarker[5].textContent === 'O') {
        oPoints = oPoints + 1;
        oScore.textContent = oPoints;
        alert('O Wins!');
    } else if (gameMarker[6].textContent === 'O' && gameMarker[7].textContent === 'O' && gameMarker[8].textContent === 'O') {
        oPoints = oPoints + 1;
        oScore.textContent = oPoints;
        alert('O Wins!');
    } else if (gameMarker[0].textContent === 'O' && gameMarker[3].textContent === 'O' && gameMarker[6].textContent === 'O') {
        oPoints = oPoints + 1;
        oScore.textContent = oPoints;
        alert('O Wins!');
    } else if (gameMarker[1].textContent === 'O' && gameMarker[4].textContent === 'O' && gameMarker[7].textContent === 'O') {
        oPoints = oPoints + 1;
        oScore.textContent = oPoints;
        alert('O Wins!');
    } else if (gameMarker[2].textContent === 'O' && gameMarker[5].textContent === 'O' && gameMarker[8].textContent === 'O') {
        oPoints = oPoints + 1;
        oScore.textContent = oPoints;
        alert('O Wins!');
    } else if (gameMarker[0].textContent === 'O' && gameMarker[4].textContent === 'O' && gameMarker[8].textContent === 'O') {
        oPoints = oPoints + 1;
        oScore.textContent = oPoints;
        alert('O Wins!');
    } else if (gameMarker[2].textContent === 'O' && gameMarker[4].textContent === 'O' && gameMarker[6].textContent === 'O') {
        oPoints = oPoints + 1;
        oScore.textContent = oPoints;
        alert('O Wins!');
    }
}

const xTurn = () => {
    turnDisplay.textContent = 'X Turn';
}

const oTurn = () => {
    turnDisplay.textContent = 'O Turn';
}

topLeftSq.addEventListener('dblclick', () => {
    gameMarker[0].textContent = 'O';
    xTurn();
});

topMiddleSq.addEventListener('dblclick', () => {
    gameMarker[1].textContent = 'O';
    xTurn();
});

topRightSq.addEventListener('dblclick', () => {
    gameMarker[2].textContent = 'O';
    xTurn();
});

middleLeftSq.addEventListener('dblclick', () => {
    gameMarker[3].textContent = 'O';
    xTurn();
});

middleMiddleSq.addEventListener('dblclick', () => {
    gameMarker[4].textContent = 'O';
    xTurn();
});

middleRightSq.addEventListener('dblclick', () => {
    gameMarker[5].textContent = 'O';
    xTurn();
});

bottomLeftSq.addEventListener('dblclick', () => {
    gameMarker[6].textContent = 'O';
    xTurn();
});

bottomMiddleSq.addEventListener('dblclick', () => {
    gameMarker[7].textContent = 'O';
    xTurn();
});

bottomRightSq.addEventListener('dblclick', () => {
    gameMarker[8].textContent = 'O';
    xTurn();
});


topLeftSq.addEventListener('click', tlMarker);
topMiddleSq.addEventListener('click', tmMarker);
topRightSq.addEventListener('click', trMarker);
middleLeftSq.addEventListener('click', mlMarker);
middleMiddleSq.addEventListener('click', mmMarker);
middleRightSq.addEventListener('click', mrMarker);
bottomLeftSq.addEventListener('click', blMarker);
bottomMiddleSq.addEventListener('click', bmMarker);
bottomRightSq.addEventListener('click', brMarker);
resetBtn.addEventListener('click', restart);








// const square = document.querySelectorAll('.square')


// const addMarker = () => {
//     for (let i = 0; i < square.length; i++) {
//         const move = document.createElement('p');
//         move.textContent = 'X';
//         square[i].appendChild(move);
//         square[i].addEventListener('click', addMarker)
//     }
// }

