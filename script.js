const start = document.getElementById("start");
start.addEventListener("click", startcount)

let value = 00;
let interval;
let hr = 00, mins = 00, secs = 00, milisecs = 00;
function startcount(){
    let hourdiv = document.getElementById("hour");
    let mindiv = document.getElementById("min");
    let secdiv = document.getElementById("sec");
    let milisecdiv = document.getElementById("milisec");
    start.disabled = true;
    
    interval = setInterval(() => {
        if(milisecs<99){
            milisecdiv.innerHTML = milisecs += 1
        } else if(milisecs>=99 && secs<59){
            milisecdiv.innerHTML = 00
            secdiv.innerHTML = secs +=1
            milisecs = 00;
        } else if(secs>=59 && mins<59){
            milisecs = 00;
            mindiv.innerHTML = mins += 1;
            milisecdiv.innerHTML = 00
            secs = 00
            secdiv.innerHTML = "00"
        } else if(mins>=59){
            milisecs == 00;
            secs = 00;
            mins == 00;
            secdiv.innerHTML = "00";
            mindiv.innerHTML = "00";
            milisecdiv.innerHTML = 00;
            hourdiv.innerHTML = hr += 1;
        }
    }, 10);
}


const pause = document.getElementById("pause");
pause.addEventListener("click", pausecount);

function pausecount(){
    clearInterval(interval)
    start.disabled = false;
}

const reset = document.getElementById("reset");
reset.addEventListener("click", resetcount);

let str = "";
let showcast = document.getElementById("castDisplay");

function resetcount(){
    clearInterval(interval);
    let hour = document.getElementById("hour").innerHTML = "00";
    let min = document.getElementById("min").innerHTML = "00";
    let sec = document.getElementById("sec").innerHTML = "00";
    let milisec = document.getElementById("milisec").innerHTML = "00";
    hr =0;
    mins = 0;
    secs = 0;
    milisecs = 0;
    start.disabled = false;
    str = ""
    showcast.innerHTML = str;
}

const cast = document.getElementById("cast");
cast.addEventListener("click", castcount);

function castcount(){
    str = str + `<li>cast: ${hr} hours ${mins} minutes ${secs}seconds ${milisecs} ms</li>`;
    showcast.innerHTML = str;
}