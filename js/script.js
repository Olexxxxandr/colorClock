const clock = document.querySelector('.clock');

const hex = document.querySelector('.hexColor');

const hexToClock = () => {
    let date = new Date();

    let hour = date.getHours().toString();
    let minute = date.getMinutes().toString();
    let second = date.getSeconds().toString();

    if(hour.length < 2){
        hour = '0' + hour;
    }

    if(minute.length < 2){
        minute = '0' + minute;
    }

    if(second.length < 2){
        second = '0' + second;
    }

    const timeAtTheMoment = hour + ":" + minute + ":" + second;

    clock.textContent = timeAtTheMoment;

    const timeToHex = "#" + hour + minute + second;

    hex.textContent = timeToHex;

    document.body.style.background = timeToHex;
}

hexToClock();

setInterval(hexToClock, 1000);