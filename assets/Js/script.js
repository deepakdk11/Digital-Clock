const date = document.querySelector(".date");
const hr = document.querySelector(".hr");
const mins = document.querySelector(".mins");
const sec = document.querySelector(".sec") 
const ampm = document.querySelector("h3")


let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function displayTime() {
    let currentDate = new Date();
    date.innerHTML = `${day[currentDate.getDay()]},  ${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    let hours = addZero(currentDate.getHours());
    let minutes = addZero(currentDate.getMinutes());
    let seconds = addZero(currentDate.getSeconds());
    
    mins.textContent = minutes;
    sec.textContent = seconds;
    if(hours>12){
        hours = hours - 12
        ampm.textContent = "PM"
    } 
    else{
        ampm.textContent = "AM"
    }
    hr.textContent = hours
}

function addZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime,500)