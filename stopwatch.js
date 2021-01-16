let hh = 0;
let mm = 0;
let ss = 0;

window.setInterval(IntervalHandler, 1000);

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
    if(hh!=0) {
        text += hh
        if(hh==1) {
            text += "hour";    
        }
        else {
            text += "hours";    
        }
        
    }

    if(mm!=0) {
        text += mm
        if(mm==1) {
            text += "minute";    
        }
        else {
            text += "minutes";    
        }
    }

    if(ss!=0) {
        text += ss
        if(ss==1) {
            text += "second";    
        }
        else {
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

    document.getElementById("hh").textContent = hh;
    document.getElementById("mm").textContent = mm;
    document.getElementById("ss").textContent = ss;
}