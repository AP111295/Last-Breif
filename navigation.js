const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

// Fonction pour changement d'état de l'icone et du menu
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

//Ouvrir et fermer le menu quand l'îcone est cliquée
hamburger.addEventListener("click", toggleMenu);

//Fermer le menu burger quand un lien est cliqué
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
