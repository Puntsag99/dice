const modal = document.getElementById("modal");

const index = Math.floor(Math.random() * 6);

const dice = [
  "./dice/_(0).jpeg",
  "./dice/_(1).jpeg",
  "./dice/_(2).jpeg",
  "./dice/_(3).jpeg",
  "./dice/_(4).jpeg",
  "./dice/_(5).jpeg",
];

const pOne = document.getElementById("playerOne-1");

pOne.src = dice[index];

const playerOnebut = document.getElementById("buttonOne");

playerOnebut.addEventListener("click", () => {
  modal.classList.add("open-modal");
});
