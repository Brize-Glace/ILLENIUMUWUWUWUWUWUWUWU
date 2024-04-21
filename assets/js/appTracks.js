// Tableau des tracks avec leurs noms, dates d'anniversaire et noms à afficher dans la page HTML
var tracks = [
    { name: "Starfall", birthday: new Date("Apr 28, 2024").getTime(), displayName: "Starfall" },
    { name: "Lifeline", birthday: new Date("Apr 28, 2024").getTime(), displayName: "Lifeline" },
    { name: "Eyes Wide Shut", birthday: new Date("Apr 28, 2024").getTime(), displayName: "Eyes Wide Shut" },
    { name: "You Were Right", birthday: new Date("Apr 28, 2024").getTime(), displayName: "You Were Right" },
    { name: "Other Side", birthday: new Date("Apr 28, 2024").getTime(), displayName: "Other Side" },
    { name: "I Want You 2 (Stay)", birthday: new Date("Apr 28, 2024").getTime(), displayName: "I Want You 2 (Stay)" },
    { name: "Back To You", birthday: new Date("Apr 28, 2024").getTime(), displayName: "Back To You" },
    { name: "Nothing Ever After", birthday: new Date("Apr 28, 2024").getTime(), displayName: "Nothing Ever After" },
    { name: "All That Really Matters", birthday: new Date("July 29, 2024").getTime(), displayName: "All That Really Matters" },
    { name: "Worst Day", birthday: new Date("Oct 21, 2024").getTime(), displayName: "Worst Day" },
    { name: "From The Ashes", birthday: new Date("Sept 16, 2024").getTime(), displayName: "From The Ashes" },
    { name: "Shivering", birthday: new Date("May 13, 2024").getTime(), displayName: "Shivering" },
    { name: "Insanity", birthday: new Date("Mar 03, 2024").getTime(), displayName: "Insanity" },
    { name: "Luv Me A Little", birthday: new Date("Jan 20, 2024").getTime(), displayName: "Luv Me A Little" },
];

var isPaused = false;

function findNearestTrackIndex() {
    var now = new Date().getTime();
    var nearestIndex = 0;
    var nearestDifference = Math.abs(tracks[0].birthday - now);

    for (var i = 1; i < tracks.length; i++) {
        var difference = Math.abs(tracks[i].birthday - now);
        if (difference < nearestDifference) {
            nearestIndex = i;
            nearestDifference = difference;
        }
    }

    return nearestIndex;
}

function findTracksWithSameBirthday(trackIndex) {
    var sameBirthdayTracks = [];
    var targetBirthday = tracks[trackIndex].birthday;

    for (var i = 0; i < tracks.length; i++) {
        if (i !== trackIndex && tracks[i].birthday === targetBirthday) {
            sameBirthdayTracks.push(tracks[i].displayName);
        }
    }

    return sameBirthdayTracks;
}

var currentTrackIndex = findNearestTrackIndex();

function updateCountdown(trackIndex) {
    var target_mili_sec = tracks[trackIndex].birthday;

    var now_mili_sec = new Date().getTime();
    var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000);

    if (isPaused) return;

    if (remaining_sec <= 0) {
        currentTrackIndex++;
        if (currentTrackIndex >= tracks.length) {
            currentTrackIndex = 0; 
        }
        updateCountdown(currentTrackIndex);
        return;
    }

    var day = Math.floor(remaining_sec / (3600 * 24));
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    var min = Math.floor((remaining_sec % 3600) / 60);
    var sec = Math.floor(remaining_sec % 60);

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;

    var descriptionElement = document.querySelector(".description");
    var sameBirthdayTracks = findTracksWithSameBirthday(currentTrackIndex);
    if (sameBirthdayTracks.length > 0) {
        descriptionElement.innerHTML = "Tracks with same birthday: " + sameBirthdayTracks.join(", ");
    } else {
        descriptionElement.innerHTML = "";
    }
    document.querySelector(".heading").innerHTML = "Countdown before " + tracks[trackIndex].displayName + " birthday";
    document.querySelector("title").innerHTML = "Countdown before " + tracks[trackIndex].displayName + " birthday";
}

updateCountdown(currentTrackIndex);


setInterval(function() {

    updateCountdown(currentTrackIndex);
}, 1000);