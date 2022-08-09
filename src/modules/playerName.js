let time = 0;
export let playerXName;
export let playerYName;

const playerSelectBox = document.querySelector(".select-player");
const playerTitle = document.querySelector(".player-title");
const selectPlayerBtn = document.querySelector(".select-player-btn");
const playerInput = document.querySelector("#player-name");

const playerX = document.querySelector(".playerX");
const playerY = document.querySelector(".playerY");

selectPlayerBtn.addEventListener("click", () => {
  addName();
});
playerInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addName();
  }
});

function addName() {
  if (time === 0) {
    playerXName = playerInput.value || playerX.innerText;

    playerInput.value = "";
    playerTitle.innerHTML = "Player Y";

    time++;
    return;
  } else {
    playerYName = playerInput.value || playerY.innerText;
    playerSelectBox.style.display = "none";
  }

  playerX.innerText = playerXName;
  playerY.innerText = playerYName;
}
