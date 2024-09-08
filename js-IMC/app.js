const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];
const form = document.querySelector(".form");
const inputSize = document.querySelector("#size");
const inputWeight = document.querySelector("#weight");
const incomplete = document.querySelector(".incomplete");
const invalide = document.querySelector(".invalide");

// Ajouter un écouteur d'événements au formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Empêche le rechargement de la page
  // Collecter les inputs
  let size = inputSize.value;
  let weight = inputWeight.value;

  // Valider les valeurs
  if (size === "" || weight === "") {
    incomplete.style.display = "inline"; // Affiche un message d'erreur
  } else if (size <= 0 || weight <= 0) {
    invalide.style.display = "inline";
  } else {
    // Calculer l'IMC
    let imc = calculImc(weight, size); // Appeler la fonction de calcul de l'IMC
    const imcScore = document.querySelector(".imc-score");
    imcScore.textContent = `Votre IMC est : ${imc}`; // Afficher l'IMC
    // Déterminer et afficher le rang de l'IMC
    range(imc);
    // Réinitialisation des valeurs des inputs
    inputSize.value = "";
    inputWeight.value = "";
  }
});

// Fonction pour calculer l'IMC
function calculImc(valWeight, valSize) {
  let resultImc = (valWeight / Math.pow(valSize / 100, 2)).toFixed(1);
  return resultImc; // Retourne l'IMC
}

function range(imc) {
  BMIData.forEach((obj) => {
    // Accédez directement aux plages
    if ((imc >= obj.range[0] && imc < obj.range[1]) || imc >= 40) {
      const comment = document.querySelector(".comment");
      const wait = document.querySelector(".wait");
      wait.style.display = "none";
      comment.style.display = "inline"; // Affiche le commentaire
      comment.textContent = `Vous êtes en : ${obj.name}`; // Affiche le rang
      comment.style.color = obj.color; // Change la couleur du texte
    }
  });
}

inputSize.addEventListener("input", () => {
  incomplete.style.display = "none";
});

inputWeight.addEventListener("input", () => {
  incomplete.style.display = "none";
});
