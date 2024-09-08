// Réussiii
const shifumi = document.querySelector(".shifumi");
const pierre = document.querySelector(".pierre");
const feuille = document.querySelector(".feuille");
const ciseau = document.querySelector(".ciseau");
const announceChoices = document.querySelector(".choice");
const announcePlayer = document.querySelector(".player");
const announceRobot = document.querySelector(".robot");
const announceEqual = document.querySelector(".equal");
const announceWin = document.querySelector(".win");
const announceLose = document.querySelector(".lose");
const announceScore = document.querySelector(".score");
const announceFinal = document.querySelector(".finished");
const announceWinner = document.querySelector(".winorlose");
let playerScore = 0;
let robotScore = 0;
let robotChoices = ["pierre", "feuille", "ciseaux"];
let player = "";
let robot = "";
let round = 0;

pierre.addEventListener("click", () => {
  player = "pierre";
});
feuille.addEventListener("click", () => {
  player = "feuille";
});
ciseau.addEventListener("click", () => {
  player = "ciseaux";
});
shifumi.addEventListener("click", () => {
  play();
});

// Faire apparaître les bons éléments en fonctions du gagnant et incrémenter le score du joueur ou du robot
// Si c'est à égalité
// Si le joueur perd
// Si le joueur gagne
function result() {
  announcePlayer.textContent = player;
  announceRobot.textContent = robot;
  announceChoices.style.display = "inline";
  if (player == robot) {
    announceEqual.style.display = "inline";
    announceLose.style.display = "none";
    announceWin.style.display = "none";
  } else if (
    (player == "pierre" && robot == "feuille") ||
    (player == "feuille" && robot == "ciseau") ||
    (player == "ciseau" && robot == "pierre")
  ) {
    robotScore++;
    announceEqual.style.display = "none";
    announceLose.style.display = "inline";
    announceWin.style.display = "none";
  } else {
    playerScore++;
    announceEqual.style.display = "none";
    announceLose.style.display = "none";
    announceWin.style.display = "inline";
  }
}

// Faire appaitre le block d'annonce de fin de jeu et le bouton pour relancer
function final() {
  announceFinal.style.display = "block";
  if (playerScore === robotScore) {
    announceWinner.textContent = "Vous êtes ex-equos";
    announceWinner.style.color = "gray";
  } else if (playerScore < robotScore) {
    announceWinner.textContent = "Vous avez perdu";
    announceWinner.style.color = "red";
  } else {
    announceWinner.textContent = "Vous avez gagné";
    announceWinner.style.color = "green";
  }
}

// Démarre le tour au click
// Le robot choisi aléatoirement
// Affiche le résultat
// Annonce du score
// Incrémente le nombre de tour
// Au bout de 10 tours, on affiche la fin et le résultat final
// Si on reclick ça réinitialise
function play() {
  robot = robotChoices[Math.floor(Math.random() * robotChoices.length)];
  result();
  announceScore.textContent = `Le score est de ${playerScore} (vous) à ${robotScore} (le robot)`;
  round++;
  if (round === 10) {
    final();
  }
  if (round === 11) {
    reset();
  }
}

// Tout remettre à 0 et faire disparaitre les éléments d'annonces pour relancer le jeu
function reset() {
  playerScore = 0;
  robotScore = 0;
  player = "";
  robot = "";
  round = 0;
  announceChoices.style.display = "none";
  announceEqual.style.display = "none";
  announceLose.style.display = "none";
  announceWin.style.display = "none";
  announceFinal.style.display = "none";
  announceScore.textContent = "";
}
