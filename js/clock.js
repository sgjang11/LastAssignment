const currentTime = document.querySelector("div#currentTime");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    currentTime.innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`
}

getClock();
setInterval(getClock, 1000);