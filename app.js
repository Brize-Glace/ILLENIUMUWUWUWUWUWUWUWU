// Date de fin du décompte
var countDownDate = new Date("Oct 18, 2023 20:00:00").getTime();

// Mettre à jour le décompte toutes les secondes
var x = setInterval(function() {

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

