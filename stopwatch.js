let hh = 0;
let mm = 0;
let ss = 0;
let stopwatch_timer = null;
let countdown_timer = null;
let state = "init";
let count_down = 5;

function CountdownTimer() {
    speak(count_down, {
        rate: 1,
        pitch: 1.2,
        lang: "ko-KR"
    })

    count_down--;

    if(count_down==0) {

        window.setTimeout(function() {
            speak("시 작", {
                rate: 1,
                pitch: 1.2,
                lang: "ko-KR"
            })
    
            window.clearInterval(countdown_timer);
            countdown_timer = null;
            count_down = 0;
    
            stopwatch_timer = window.setInterval(StopwatchTimer, 1000);
            state = "started";
            document.getElementById("start_stop").innerText = "Stop";
            document.getElementById("start_stop").disabled = false;
        }, 1000);

        
    }
}

function StopwatchTimer() {
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
        text += "시간";
    }

    if (mm != 0) {
        text += mm
        text += "분";
    }

    if (ss != 0) {
        text += ss
        text += " 초";
    }

    //text = hh+":"+mm+":"+ss;

    if (ss % 5 == 0) {
        speak(text, {
            rate: 1,
            pitch: 1.2,
            lang: "ko-KR"
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
    if(state=="init") {
        countdown_timer = window.setInterval(CountdownTimer, 1000);
        this.disabled = true;
    }
    else if (state == "stopped") {
        stopwatch_timer = window.setInterval(StopwatchTimer, 1000);
        state = "started";
        this.innerText = "Stop";
    } else {
        window.clearInterval(stopwatch_timer);
        state = "stopped";
        stopwatch_timer = null;
        this.innerText = "Start";
    }
});

document.getElementById("reset").addEventListener("click", function () {
    init();
});

function init() {
    state = "init";
    
    window.clearInterval(stopwatch_timer);
    window.clearInterval(countdown_timer);
    stopwatch_timer = null;
    countdown_timer = null;
    
    document.getElementById("start_stop").innerText = "Start";
    document.getElementById("start_stop").disabled = false;

    document.getElementById("hh").textContent = "00";
    document.getElementById("mm").textContent = "00";
    document.getElementById("ss").textContent = "00";

    hh = 0;
    mm = 0;
    ss = 0;
    count_down = 5;
}