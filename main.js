const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function getCurrentPosition(timeObj){
    const {hours, minutes, seconds} = timeObj;
    hourHand.style.transform = `rotate(${hours*30+90}deg)`;
    minuteHand.style.transform = `rotate(${minutes*6+90}deg)`;
    secondHand.style.transform = `rotate(${seconds*6+90}deg)`;
}

function getCurrentTime(){
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours > 12? hours=hours%12 : undefined
    const currentTime = {hours, minutes, seconds}
    return currentTime
}

function tik(){
    const currentHour = Number(hourHand.style.transform.slice(7,-4))
    const currentMinute = Number(minuteHand.style.transform.slice(7,-4))
    const currentSecond = Number(secondHand.style.transform.slice(7,-4))
    hourHand.style.transform = `rotate(${currentHour+0.001041667}deg)`
    minuteHand.style.transform = `rotate(${currentMinute+0.0125}deg)`
    secondHand.style.transform = `rotate(${currentSecond+0.75}deg)`
}

function reset(){
    getCurrentPosition(getCurrentTime())
}

reset();
setInterval(tik, 125);
setInterval(reset, 60000);