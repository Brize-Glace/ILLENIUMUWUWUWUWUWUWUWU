// TypeScript file for the countdown timer

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown() {
    let targetMiliSec = new Date("May 17, 2024 14:30:00 UTC-7").getTime();
    const daysElement: HTMLElement | null = document.querySelector("#day");
    const hoursElement: HTMLElement | null = document.querySelector("#hour");
    const minutesElement: HTMLElement | null = document.querySelector("#min");
    const secondsElement: HTMLElement | null = document.querySelector("#sec");
    const subTimerElement: NodeListOf<HTMLElement> = document.querySelectorAll(".sub_timer")

    while (true) {
        let remainingSec = Math.floor((targetMiliSec - new Date().getTime()) / 1000);
        if(remainingSec <= 0) {
            if (daysElement && hoursElement && minutesElement && secondsElement) {
                daysElement.innerHTML = "0";
                hoursElement.innerHTML = "0";
                minutesElement.innerHTML = "0";
                secondsElement.innerHTML = "0";

                subTimerElement.forEach(element => element.classList.add("shake"))
            }
            break;
        }
        let days = Math.floor(remainingSec / (3600 * 24));
        let hours = Math.floor((remainingSec % (3600 * 24)) / 3600);
        let minutes = Math.floor((remainingSec % 3600) / 60);
        let seconds = (remainingSec % 60);

        if (daysElement && hoursElement && minutesElement && secondsElement) {
            daysElement.innerHTML = days.toString();
            hoursElement.innerHTML = hours.toString();
            minutesElement.innerHTML = minutes.toString();
            secondsElement.innerHTML = seconds.toString();
        }
        await delay(1000);

    }
}
countdown();