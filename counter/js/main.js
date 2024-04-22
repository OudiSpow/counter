var count = 0;
var counterHeading = document.getElementById("counter-heading")
counterHeading.innerText = count;

var redButton = document.getElementById("button-red")
redButton.onclick = function () {
    if (count > -10)
        count -= 1;
    else {
        count = 0;
    }
    counterHeading.innerText = count;
}

var greenButton = document.getElementById("button-green")
greenButton.onclick = function () {
    if (count < 10)
        count += 1;
    else {
        count = 0;
    }
    counterHeading.innerText = count;
}



//stopwatch 
var mseconds = 0;
var seconds = 0;
var minutes = 0;
var everyMsecond;
var watch = document.getElementById("stopwatch");
watch.innerText = "0" + minutes + ":" + "0" + seconds + "." + "0" + mseconds;

var start = document.getElementById("button-start");
start.onclick = function () {
    everyMsecond = setInterval(() => {
        mseconds += 1;
        if (mseconds > 99) {
            mseconds = 0;
            seconds += 1;
        }

        if (mseconds > 9) {
            watch.innerText = "0" + minutes + ":" + "0" + seconds + "." + mseconds;
        }
        else {
            watch.innerText = "0" + minutes + ":" + "0" + seconds + "." + "0" + mseconds;

        }

        if (seconds > 59) {
            seconds = 0;
            minutes += 1;
        }

        if (seconds > 9) {
            watch.innerText = "0" + minutes + ":" + seconds + "." + mseconds;
        }
        else {
            watch.innerText = "0" + minutes + ":" + "0" + seconds + "." + mseconds;

        }

    }, 10)
}


var stop = document.getElementById("button-stop");
stop.onclick = function () {
    clearInterval(everyMsecond);
}


