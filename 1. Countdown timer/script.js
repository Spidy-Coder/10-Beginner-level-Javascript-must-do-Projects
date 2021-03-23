const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const mins1 = document.getElementById("minutes");
const seconds1 = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    var totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    days1.innerHTML = days;
    hours1.innerHTML = hours;
    mins1.innerHTML = minutes;
    seconds1.innerHTML = seconds;
    
}



countDown();

setInterval(countDown, 1000);