function openForm(event) {
  // Empêcher le rechargement de la page ou le comportement par défaut
  event.preventDefault();

  // Récupération des valeurs
  let distance = parseFloat(document.getElementById("distance").value);
  let joursTravailles = parseInt(
    document.getElementById("jours-travaillés").value
  );

  // Vérification et calcul des émissions de CO2
  if (
    isNaN(distance) ||
    isNaN(joursTravailles) ||
    distance <= 0 ||
    joursTravailles <= 0
  ) {
    let modal = document.getElementById("modal");
    let modalMessage = document.getElementById("modalMessage");
    modalMessage.innerHTML =
      "Veuillez entrer des valeurs valides pour la distance et les jours travaillés.";
    modal.style.display = "block";
    return; // Arrêter le code ici si les valeurs sont incorrectes
  }

  // Calcul des émissions de CO2
  let emissionsCO2 = distance * joursTravailles * 0.12;

  // Affichage du message dans la modale
  let modal = document.getElementById("modal");
  let modalMessage = document.getElementById("modalMessage");
  modalMessage.innerHTML = `Les émissions de CO2 pour votre trajet domicile/travail sont de ${emissionsCO2.toFixed(
    2
  )} kg par semaine.`;
  modal.style.display = "block"; // Afficher la modale
}

function closeForm() {
  // Masquer la modale
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Si l'utilisateur clique en dehors de la modale, elle se ferme
window.onclick = function (event) {
  let modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
