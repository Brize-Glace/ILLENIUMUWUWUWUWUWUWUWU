interface Track {
    name: string;
    birthday: number;
    displayName: string;
}

const tracks: Track[] = [
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

let isPaused = false;

function findNearestTrackIndex(): number {
    const now: number = new Date().getTime();
    let nearestIndex: number = 0;
    let nearestDifference: number = Math.abs(tracks[0].birthday - now);

    for (let i = 1; i < tracks.length; i++) {
        const difference: number = Math.abs(tracks[i].birthday - now);
        if (difference < nearestDifference) {
            nearestIndex = i;
            nearestDifference = difference;
        }
    }

    return nearestIndex;
}

function findTtracksWithSameBirthday(trackIndex: number): string[] {
    var sameBirthdayTracks: string[] = [];
    var targetBirthday: number = tracks[trackIndex].birthday;

    for (let i = 0; i < tracks.length; i++) {
        if (i !== trackIndex && tracks[i].birthday === targetBirthday) {
            sameBirthdayTracks.push(tracks[i].displayName);
        }
    }

    return sameBirthdayTracks;
}

var currentTrackIndex = findNearestTrackIndex();

function updateCountdown(trackIndex: number): void {
    const targetMiliSec: number = tracks[trackIndex].birthday;

    const nowMiliSec: number = new Date().getTime();
    const remainingSec: number = Math.floor((targetMiliSec - nowMiliSec) / 1000);

    if (isPaused) return;

    if (remainingSec <= 0) {
        currentTrackIndex++;
        if (currentTrackIndex >= tracks.length) {
            currentTrackIndex = 0;
        }
        updateCountdown(currentTrackIndex);
        return;
    }
    const day: number = Math.floor(remainingSec / (3600 * 24));
    const hour: number = Math.floor((remainingSec % (3600 * 24)) / 3600);
    const minute: number = Math.floor((remainingSec % 3600) / 60);
    const second: number = (remainingSec % 60);

    const daysElement: HTMLElement | null = document.querySelector("#day");
    const hoursElement: HTMLElement | null = document.querySelector("#hour");
    const minutesElement: HTMLElement | null = document.querySelector("#min");
    const secondsElement: HTMLElement | null = document.querySelector("#sec");

    if (daysElement && hoursElement && minutesElement && secondsElement) {
        daysElement.innerHTML = day.toString();
        hoursElement.innerHTML = hour.toString();
        minutesElement.innerHTML = minute.toString();
        secondsElement.innerHTML = second.toString();
    }

    const descriptionElement: HTMLElement | null = document.querySelector(".description");
    const sameBirthdayTracks: string[] = findTtracksWithSameBirthday(currentTrackIndex);
    if(sameBirthdayTracks.length > 0) {
        descriptionElement.innerHTML = "Tracks With Same Birthday: " + sameBirthdayTracks.join(", ");
    } else {
        descriptionElement.innerHTML = "";
    }
    document.querySelector(".heading").innerHTML = "Countdown before " + tracks[trackIndex].displayName + " birthday";
    document.querySelector("title").innerHTML = "Countdown before " + tracks[trackIndex].displayName + " birthday";
}

updateCountdown(currentTrackIndex);

setInterval(() => {
    updateCountdown(currentTrackIndex);
}, 1000);