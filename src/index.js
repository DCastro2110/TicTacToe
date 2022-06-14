import './assets/css/style.scss'

const qs = document.querySelectorAll('.q');
let start = 0;

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('q') && el.innerText === '') {
        el.innerText = addSymbol()   
    }

    if (el.classList.contains('restart-btn')) {
        qs.forEach(q => {
            q.innerText = '';
            start = 0;
        })
    }
})


function addSymbol() {
    const symbols = ['X', 'O'];
    const symbolOfTime = symbols[start];

    if (start === 0) start = 1;
    else start = 0;

    return symbolOfTime;
}

function verifyWinner() {
    
    const winnerPositions = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ]

    let checkeds = [];
    
    for (let i in qs) {
        checkeds.push(qs[i].innerText);
    }
    checkeds = checkeds.slice(0, 9)
    
    let winner = false
    for (let positions of winnerPositions) {
        if (qs[positions[0]].innerText && qs[positions[1]].innerText && qs[positions[2]].innerText)
            if (qs[positions[0]].innerText === qs[positions[1]].innerText && qs[positions[1]].innerText === qs[positions[2]].innerText) {
                winner = true;
            }
    }
    
    return winner
}