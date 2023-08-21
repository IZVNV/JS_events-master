// Sélectionne l'élément du footer
let footerElement = document.querySelector("footer");

// Ajoute un écouteur d'événement pour le clic sur le footer
footerElement.addEventListener("click", function () {
  console.log("clique");
  window.alert("clique");
});

// Sélection du bouton de menu
const hamburgerButton = document.querySelector(".navbar-toggler");

// Sélection de l'élément de la navbar
const navbarHeader = document.getElementById("navbarHeader");

// Ajout d'un gestionnaire d'événement au clic du bouton
hamburgerButton.addEventListener("click", () => {
  // Utilisation de toggle pour ajouter ou supprimer la classe "collapse"
  navbarHeader.classList.toggle("collapse");
});

// Sélection de la première carte
const firstCard = document.querySelector(".card");

// Sélection du bouton "Edit" dans la première carte
const editButton = firstCard.querySelector(".btn-outline-secondary");

// Ajout d'un gestionnaire d'événement au clic du bouton "Edit"
editButton.addEventListener("click", () => {
  // Changer la couleur du texte de la première carte en rouge
  firstCard.style.color = "red";
});

// Sélection de la deuxième carte
const secondCard = document.querySelectorAll(".card")[1];

// Sélection du bouton "Edit" dans la deuxième carte
const editButtonSecondCard = secondCard.querySelector(".btn-outline-secondary");

// Ajout d'un gestionnaire d'événement au clic du bouton "Edit"
editButtonSecondCard.addEventListener("click", () => {
  // Vérification de la couleur actuelle du texte
  if (secondCard.style.color === "green") {
    // Si le texte est vert, le remettre à la couleur par défaut
    secondCard.style.color = "";
  } else {
    // Sinon, changer la couleur du texte en vert
    secondCard.style.color = "green";
  }
});

// Sélection de la navbar
const navbar = document.querySelector(".navbar");

// Variable pour garder une trace de l'état des styles
let stylesDisabled = false;

// Fonction pour désactiver ou réactiver les styles CSS de Bootstrap
function toggleStyles() {
  const links = document.querySelectorAll("link[rel='stylesheet']");

  if (stylesDisabled) {
    links.forEach((link) => {
      link.removeAttribute("disabled");
    });
  } else {
    links.forEach((link) => {
      link.setAttribute("disabled", "true");
    });
  }

  // Inversion de l'état des styles
  stylesDisabled = !stylesDisabled;
}

// Ajout d'un gestionnaire d'événement au double-clic sur la navbar
navbar.addEventListener("dblclick", toggleStyles);

// Sélection du bouton gris "==>"
const rotateButton = document.querySelector(".btn-secondary");

// Ajout d'un gestionnaire d'événements au clic sur le bouton "==> "
rotateButton.addEventListener("click", () => {
  // Sélection de la dernière carte
  const lastCard = document.querySelector(".col-md-4:last-child");

  // Sélection de son parent (la row)
  const row = lastCard.parentElement;

  // Déplace la dernière carte en premier
  row.insertBefore(lastCard, row.firstElementChild);
});

// Sélection du bouton bleu "<=="
const rotateBackButton = document.querySelector(".btn-primary");

// Ajout d'un gestionnaire d'événements au clic sur le bouton "<=="
rotateBackButton.addEventListener("click", (event) => {
  // Empêche le comportement par défaut du lien
  event.preventDefault();

  // Sélection de la première carte
  const firstCard = document.querySelector(".col-md-4:first-child");

  // Sélection de son parent (la row)
  const row = firstCard.parentElement;

  // Insère la première carte après la dernière carte
  row.insertBefore(firstCard, row.lastElementChild.nextSibling);
});
