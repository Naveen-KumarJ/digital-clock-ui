let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let amPm = document.querySelector(".am-pm");
let day = document.querySelector(".day");
let body = document.querySelector("body");
function digitalClockUI(){
    let now = new Date();
    let currentHour = now.getHours();
    if(currentHour>=12 && currentHour<=16)
        body.style.background = 'url("./assets/afternoon.jpg")';
    else if(currentHour>16 && currentHour<19)
        body.style.background = 'url("./assets/evening.jpg")';
    else if(currentHour>=19)
        body.style.background = 'url("./assets/night.jpg")';

    let currentAmPm = currentHour>=12?"PM":"AM";
    currentHour = currentHour>12?currentHour%12:currentHour;
    let currentMin = now.getMinutes();
    let currentSec = now.getSeconds();
    let currentDay = now.toLocaleString('en',{weekday:'long'});
    
    hour.innerText = currentHour.toString().padStart(2, '0');
    min.innerText = currentMin.toString().padStart(2, '0');
    sec.innerText = currentSec.toString().padStart(2, '0');  
    amPm.innerText = currentAmPm;
    day.innerText = currentDay;
    amPm.innerText = currentAmPm;
    day.innerText = currentDay;
}

let timeInterval = setInterval(digitalClockUI,1000);

// clearInterval(timeInterval);

