// Date de fin du décompte
var countDownDate = new Date("Feb 2, 2024 16:30:00");
countDownDate.setUTCHours(countDownDate.getUTCHours() - 7);

// Met à jour le décompte toutes les secondes
var x = setInterval(function () {

  // Obtient la date et l'heure actuelles
  var now = new Date().getTime();

  // Calcule la différence entre la date de fin et la date actuelle
  var distance = countDownDate - now;

  // Calcule les jours, heures, minutes et secondes restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher les jours, heures, minutes et secondes restantes dans les éléments HTML correspondants
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Si le compte à rebours est terminé, affiche un message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<p>C'est l'heure les enfants!</p>";
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

const codeInput = document.getElementById("code_beta"); // Récupère l'élément d'entrée du code bêta
const confirmButton = document.getElementById("confirm_button"); // Récupère le bouton de confirmation
const headerBetaH3 =  document.getElementById("BETA_H3")
var betaFeaturingDiv = document.getElementById("betaFeaturing"); // Sélectionne l'élément de la div "betaFeaturing"
const bgColorBeta = document.getElementById("background"); 

confirmButton.addEventListener("click", () => {
  const enteredCode = codeInput.value; // Récupère la valeur saisie par l'utilisateur

  // Effectue une requête GET pour récupérer le contenu du fichier JSONBin
  fetch("https://api.jsonbin.io/v3/b/647b3a378e4aa6225ea891b7/latest", {
    headers: {
      "X-Master-Key": "$2b$10$3LAJC/h3ZR4euvKhXUECpOG5fFd8DRH89xCInUlVFdLhFkI7GyrZK" // Remplace "TON_API_KEY" par ta clé d'API JSONBin
    }
  })
    .then(response => response.json())
    .then(data => {
      const codesBeta = data.record.codes_beta; // Récupère les codes bêta du fichier JSON

      if (codesBeta.includes(enteredCode)) {
        console.log("Code bêta valide !");
        headerBetaH3.style.display = "block"
        betaFeaturingDiv.innerHTML = "Code valide!"
        bgColorBeta.style.display = "block"
        // Effectue les actions nécessaires si le code est valide
      } else {
        console.log("Code bêta invalide !");
        betaFeaturingDiv.innerHTML = "Code invalide!"
        // Effectue les actions nécessaires si le code est invalide
      }
    })
    .catch(error => {
      console.error("Erreur lors de la requête :", error);
      // Gère les erreurs de requête
    });
});
var typedText = "";
document.addEventListener("keydown", function(event) {
  var key= event.key.toLowerCase();

  if (key=== "b" && typedText.length === 0) {
    typedText += key;
  } else if (key === "e" && typedText.length === 1){
    typedText += key;
  } else if (key === "t"  && typedText.length === 2) {
    typedText += key;
  } else if (key === "a" && typedText.length === 3) {
    typedText += key;
    console.log(typedText)
  } else {
    typedText = ""
  }

  if (typedText === "beta") {
    betaFeaturingDiv.style.display = "block";
  } else {
    betaFeaturingDiv.style.display = "none";
  }
});