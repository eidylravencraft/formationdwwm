// blocage aujourd'hui

// Le but de ce projet est de coder un quiz qui affiche des messages et des couleurs différents en fonction des résultats.

// A. Coder une interface basique
// > Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... <br>
// > Rajoutez un peu de style si besoin est.
// >
// > Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérez le formulaire.
// 2. Testez les résultats.
// 3. Ajoutez un message dans le bloc de fin en fonction des résultats.
// 4. Ajoutez des couleurs en fonction des résultats.
// 5. Gérez la possibilité de tentative de correction de la part de l'utilisateur (changer une valeur et re-valider).

//  C. Ajoutez du style à l'interface afin de terminer le projet.

const form = document.querySelector("form");
const questionsBlock = document.querySelectorAll(".mcq");
let responses = [
  "c",
  "b",
  "c",
  "b",
  "a",
]; /* on stock les bonnes réponses grâce à leur value qui est a, b et c pour chaque question*/
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let score = 0;
  const userResponse = document.querySelectorAll("input:checked");
  let colorBackground = [];
  userResponse.forEach((inp, index) => {
    if (inp.value === responses[index]) {
      colorBackground.push("green");
      score++;
    } else {
      colorBackground.push("red");
    }
  });
  addColor(colorBackground);
  addMessages(score);
}

//   Envoyer les messages spécifiques + nombres de bonnes réponses
function addMessages(count) {
  const click = document.querySelector(".click");
  const announceScore = document.querySelector(".announce-score");
  const numberScore = document.querySelector(".score");
  const comment = document.querySelector(".comment");
  const cheer = document.querySelector(".cheer");
  click.style.display = "none";
  announceScore.style.display = "inline";
  numberScore.textContent = `${count}`;
  switch (count) {
    case 0:
      comment.textContent = "Peut mieux faire !";
      cheer.textContent =
        "Retentez une autre réponse danse les cases rouges puis re-validez !";
      setTimeout(() => {
        window.close();
      }, 2000);
      break;
    case 1:
      comment.textContent = "Ne vous découragez pas, réessayez !";
      cheer.textContent =
        "Retentez une autre réponse dans les cases rouges puis re-validez !";
      break;
    case 2:
      comment.textContent = "Vous pouvez encore mieux faire";
      cheer.textContent =
        "Retentez une autre réponse dans les cases rouges puis re-validez !";
      break;
    case 3:
      comment.textContent = "Vous y êtes presque ! ";
      comment.textContent += "Vous pouvez faire encore mieux !";
      cheer.textContent =
        "Retentez une autre réponse dans les cases rouges puis re-validez !";
      break;
    case 4:
      comment.textContent = "Vous y êtes presque !";
      cheer.textContent =
        "Retentez une autre réponse dans les cases rouges puis re-validez !";
      break;
    case 5:
      comment.textContent = "Bravo, c'est un sans faute !";
      cheer.textContent = "Quelle culture !";
      break;
  }
}

//   Ajout de la couleur
function addColor(arr) {
  arr.forEach((color, index) => {
    questionsBlock[index].style.backgroundColor = color;
  });
}

//   Réinitialiser la couleur de fond
const inputs = document.querySelectorAll("input[type='radio']");
inputs.forEach((radio) => radio.addEventListener("input", resetColor));
function resetColor(e) {
  let inputIndex = e.target.getAttribute("name").match(/\d/g) - 1;
  let resetBlock = questionsBlock[inputIndex];
  resetBlock.style.backgroundColor = "#f1f1f1";
}
