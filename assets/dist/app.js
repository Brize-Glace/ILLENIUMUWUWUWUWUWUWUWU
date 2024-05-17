// TypeScript file for the countdown timer
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function countdown() {
    return __awaiter(this, void 0, void 0, function* () {
        let targetMiliSec = new Date("May 17, 2024 14:30:00 UTC-7").getTime();
        const daysElement = document.querySelector("#day");
        const hoursElement = document.querySelector("#hour");
        const minutesElement = document.querySelector("#min");
        const secondsElement = document.querySelector("#sec");
        const subTimerElement = document.querySelectorAll(".sub_timer");
        while (true) {
            let remainingSec = Math.floor((targetMiliSec - new Date().getTime()) / 1000);
            if (remainingSec <= 0) {
                if (daysElement && hoursElement && minutesElement && secondsElement) {
                    daysElement.innerHTML = "0";
                    hoursElement.innerHTML = "0";
                    minutesElement.innerHTML = "0";
                    secondsElement.innerHTML = "0";
                    subTimerElement.forEach(element => element.classList.add("shake"));
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
            yield delay(1000);
        }
    });
}
countdown();
