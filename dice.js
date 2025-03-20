const modal = document.getElementById("modal");
const reset = document.getElementById("reset");

const pOne = document.getElementById("playerOne-1");
const playerOnebut = document.getElementById("buttonOne");

const ptwo = document.getElementById("playerTwo-2");
const playerTwobut = document.getElementById("buttonTwo");

const dice = [
  "dice/1.jpeg",
  "dice/2.jpeg",
  "dice/3.jpeg",
  "dice/4.jpeg",
  "dice/5.jpeg",
  "dice/6.jpeg",
];

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneRolled = false;
let playerTwoRolled = false;

playerOnebut.addEventListener("click", () => {
  if (!playerOneRolled) {
    const index = Math.floor(Math.random() * 6);
    pOne.src = dice[index];
    playerOneScore = index;
    playerOneRolled = true;
  }
});

playerTwobut.addEventListener("click", () => {
  if (!playerTwoRolled) {
    const index = Math.floor(Math.random() * 6);
    ptwo.src = dice[index];
    playerTwoScore = index;
    playerTwoRolled = true;
  }
  checkWinner();
});

const checkWinner = () => {
  if (playerOneRolled && playerTwoRolled) {
    const winnerText = modal.querySelector("p");

    if (playerOneScore > playerTwoScore) {
      winnerText.textContent = "Player One wins";
    } else if (playerOneScore < playerTwoScore) {
      winnerText.textContent = "Player Two wins";
    } else {
      winnerText.textContent = "It's a tie, please play again!";
    }
  }

  modal.classList.add("open-modal");
};
reset.addEventListener("click", () => {
  pOne.src = "";
  ptwo.src = "";
  const winnerText = modal.querySelector("p");
  winnerText.textContent = "";
  playerOneRolled = false;
  playerTwoRolled = false;
  modal.classList.remove("open-modal");
});
