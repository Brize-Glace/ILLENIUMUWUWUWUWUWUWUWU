const countDownDate = moment("2024-02-02T16:30:00-08:00");

const x = setInterval(function () {
    const now = moment();

    const duration = moment.duration(countDownDate.diff(now));

    document.getElementById("days").textContent = duration.days();
    document.getElementById("hours").textContent = duration.hours();
    document.getElementById("minutes").textContent = duration.minutes();
    document.getElementById("seconds").textContent = duration.seconds();

    // Si le compte à rebours est terminé, affiche un message
    if (duration.asMilliseconds() < 0) {
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


function verifierProxy() {
  var testImage = new Image();
  testImage.onerror = function() {
    document.getElementById('errorOnIFrame').style.display =  "block"
    document.getElementById('steamIframe').style.display = "none"
  };
  testImage.src = "https://cdn.akamai.steamstatic.com/steam/apps/2604420/ss_caa9ff774ecb67bb04d75293e52509f62db62e1b.600x338.jpg?t=1698862475"; // URL de la ressource à charger
}

verifierProxy();

function verifierProxy() {
  var testImage = new Image();
  testImage.onload = function() {

    console.log("L'image s'est chargée avec succès !");
  };
  testImage.onerror = function() {

    console.error("Erreur de chargement de l'image !");
    document.getElementById('errorOnIFrame').style.display = "block"
    document.getElementById('steamIframe').style.display = "none"
  };
  testImage.src = "https://cdn.akamai.steamstatic.com/steam/apps/2604420/ss_caa9ff774ecb67bb04d75293e52509f62db62e1b.600x338.jpg?t=1698862475"; // URL de la ressource à charger
}

verifierProxy();