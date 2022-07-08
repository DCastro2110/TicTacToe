import "./modules/playerName";
import "./assets/css/style.scss";

const qs = document.querySelectorAll(".q");

let start = 0;
let xWinners = 0;
let oWinners = 0;
let wasAWinner = false;

const left = document.querySelector(".left span");
const right = document.querySelector(".right span");
const btn = document.querySelector(".restart-btn");

document.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("q") && el.innerText === "" && !wasAWinner) {
    el.innerText = addSymbol();
    const status = verifyWinner();
    if (status === true) {
      alert(el.innerText + " ganhou.");
    } else if (status === "Empate") {
      alert("Empatou");
      setTimeout(() => {
        restart();
      }, 2000);
      btn.setAttribute("disabled", "disabled");
    }
  }

  if (el.classList.contains("restart-btn")) {
    restart();
  }
});

function restart() {
  qs.forEach((q) => {
    q.innerText = "";
    start = 0;
    wasAWinner = false;
    if (q.classList.contains("active")) q.classList.remove("active");
  });

  if (btn.disabled === true) {
    btn.removeAttribute("disabled");
  }
}

function addSymbol() {
  const symbols = ["X", "O"];
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
    [6, 7, 8],
  ];

  let checkeds = [];

  for (let i in qs) {
    checkeds.push(qs[i].innerText);
  }

  checkeds = checkeds.slice(0, 9);

  let totalChecked = checkeds.filter((item) => item === "");

  for (let positions of winnerPositions) {
    if (
      qs[positions[0]].innerText &&
      qs[positions[1]].innerText &&
      qs[positions[2]].innerText
    )
      if (
        qs[positions[0]].innerText === qs[positions[1]].innerText &&
        qs[positions[1]].innerText === qs[positions[2]].innerText
      ) {
        if (qs[positions[0]].innerText === "X") left.innerHTML = ++xWinners;
        else right.innerHTML = ++oWinners;

        wasAWinner = true;
        positions.forEach((p) => qs[p].classList.add("active"));
      }
  }

  if (!wasAWinner && totalChecked.length === 0) return "Empate";
  return wasAWinner;
}
