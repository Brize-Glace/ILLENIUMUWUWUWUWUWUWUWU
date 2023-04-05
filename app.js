// Date de fin du décompte
var countDownDate = new Date("Oct 18, 2023 20:00:00").getTime();

// Mettre à jour le décompte toutes les secondes
var x = setInterval(function () {

  // Obtenir la date et l'heure actuelles
  var now = new Date().getTime();

  // Calculer la différence entre la date de fin et la date actuelle
  var distance = countDownDate - now;

  // Calculer les jours, heures, minutes et secondes restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher les jours, heures, minutes et secondes restantes dans les éléments HTML correspondants
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Si le compte à rebours est terminé, afficher un message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "C'est l'heure les enfants!";
  }
}, 1000);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  // calculer la luminosité de la couleur
  var r = parseInt(color.substring(1, 3), 16);
  var g = parseInt(color.substring(3, 5), 16);
  var b = parseInt(color.substring(5, 7), 16);
  var luminosity = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return {
    color: color,
    luminosity: luminosity
  };
}

document.addEventListener("DOMContentLoaded", function () {
  var randomColor = getRandomColor();
  var navbarColor = document.querySelectorAll("ul li a")
  var navbarPortfolio = document.querySelectorAll(".navbarPortfolio")
  var footerColor = document.querySelectorAll("p")
  var icons = document.querySelectorAll("i");
  document.body.style.backgroundColor = randomColor.color;
  document.body.style.color = randomColor.luminosity < 0.5 ? "white" : "black";
  navbarColor.forEach(function(item) {
    item.style.color = randomColor.luminosity < 0.5 ? "white" : "black";
  });
  footerColor.forEach(function(item) {
    item.style.color = randomColor.luminosity < 0.5 ? "white" : "black";
  });
  navbarPortfolio.forEach(function(item) {
    item.style.color = randomColor.luminosity < 0.5 ? "white" : "black";
    item.style.border =  randomColor.luminosity < 0.5 ? "white 1px solid" : "black 1px solid";
  });
  icons.forEach(function(item) {
    item.style.color = randomColor.luminosity < 0.5 ? "white": "black";
  })
});

window.addEventListener("beforeunload", function () {
  var randomColor = getRandomColor();
  var navbarColor = document.querySelectorAll("ul li a");
  var navbarPortfolio = document.querySelector(".navbarPortfolio");
  var footerColor = document.querySelectorAll("p a");
  var icons = document.querySelectorAll("i");
  document.body.style.backgroundColor = randomColor.color;
  document.body.style.color = randomColor.luminosity < 0.5 ? "white" : "black";
  navbarColor.forEach(function(item) {
    item.style.color = randomColor.luminosity < 0.5 ? "white" : "black";
  });
  footerColor.forEach(function(item) {
    item.style.color = randomColor.luminosity < 0.5 ? "white" : "black";
  });
  navbarPortfolio.forEach(function(item) {
    item.style.color = randomColor.luminosity < 0.5 ? "white" : "black";
  });
  icons.forEach(function(item) {
    item.style.color = randomColor.luminosity < 0.5 ? "white": "black";
  })
});

const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("dropdownMenu");

menuButton.addEventListener("click", function() {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

