const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



var specialDate = "Feb 12 2024";

function countdown () {
    var newSpecialDate = new Date(specialDate);
    var currentDate = new Date();

    const totalSeconds = (newSpecialDate - currentDate) / 1000;
    
    const years = Math.floor(totalSeconds / 3600 / 24 / 30.417 / 12);
    const months = Math.floor(totalSeconds / 3600 / 24 / 30.417);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    yearsEl.innerHTML = years;
    monthsEl.innerHTML = formatTime(months);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);   
    
}

function formatTime(time) {
    return time < 10 ? (`0${time}`): time;
}



countdown();

setInterval(countdown, 1000);


