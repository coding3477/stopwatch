let hh = 0;
let mm = 0;
let ss = 0;
let timer = null;
let state = "stopped";

//window.setInterval(IntervalHandler, 1000);

function IntervalHandler() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;

        if (mm == 60) {
            mm = 0;
            hh++;
        }
    }

    // 1 hour 23 minutes 45 seconds
    text = "";
    if (hh != 0) {
        text += hh
        if (hh == 1) {
            text += "hour";
        } else {
            text += "hours";
        }

    }

    if (mm != 0) {
        text += mm
        if (mm == 1) {
            text += "minute";
        } else {
            text += "minutes";
        }
    }

    if (ss != 0) {
        text += ss
        if (ss == 1) {
            text += "second";
        } else {
            text += "seconds";
        }
    }

    //text = hh+":"+mm+":"+ss;

    if (ss % 5 == 0) {
        speak(text, {
            rate: 1,
            pitch: 1.2,
            lang: "en-US"
        })
    }

    document.getElementById("hh").textContent = fillZero(2, hh.toString());
    document.getElementById("mm").textContent = fillZero(2, mm.toString());
    document.getElementById("ss").textContent = fillZero(2, ss.toString());
}

function fillZero(width, str) {
    return str.length >= width ? str : new Array(width - str.length + 1).join('0') + str;
}

document.getElementById("start_stop").addEventListener("click", function () {
    if (state == "stopped") {
        timer = window.setInterval(IntervalHandler, 1000);
        state = "started";
        this.innerText = "Stop";
    } else {
        window.clearInterval(timer);
        state = "stopped";
        timer = null;
        this.innerText = "Start";
    }
});

document.getElementById("reset").addEventListener("click", function () {
    window.clearInterval(timer);
    state = "stopped";
    timer = null;
    document.getElementById("start_stop").innerText = "Start";

    document.getElementById("hh").textContent = "00";
    document.getElementById("mm").textContent = "00";
    document.getElementById("ss").textContent = "00";
});