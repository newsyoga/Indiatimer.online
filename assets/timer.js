let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
const dateObj = {
    hour: 0,
    minute: 0,
    second: 0
};
var range = document.getElementById('myRange');

let countTimer = false;

const hourdv = document.getElementById('hr');
const mindv = document.getElementById('mn');
const secdv = document.getElementById('sc');

setInterval(incrementSecCount, 1000);


range.addEventListener("input", setValue());




  
  
function setValue(){
    document.getElementById("myAudio").pause();
    updateReadings(range.value);
}

function startTimer(){
    countTimer = true;   
    document.getElementById("myAudio").pause();
}

function stopTimer(){
    countTimer = false;  
    document.getElementById("myAudio").pause();
}

function resetTimer(){
    document.getElementById("myAudio").pause();
    updateReadings(0);  
}

function readTime(){
    let retObj = Object.create(dateObj);

    retObj.hour = parseInt(hourdv.innerHTML);
    retObj.minute = parseInt(mindv.innerHTML);
    retObj.second = parseInt(secdv.innerHTML);
    let tmp = toSec(retObj);
    return (tmp);
}

function toSec(inobj){
    let secsOp = parseInt((inobj.hour * 60 * 60)) + parseInt(inobj.minute * 60) + parseInt(inobj.second);
    return secsOp;
}

function toTime(secInp){
    let timeObjRet = Object.create(dateObj);

    timeObjRet.hour = Math.floor(secInp / 3600);
    let hrmx = secInp % 3600;

    timeObjRet.minute = Math.floor(hrmx / 60);
    timeObjRet.second = hrmx % 60;

    return timeObjRet;
}

function updateReadings(secs){
    let readings = toTime(secs);
    
    hourdv.innerHTML = readings.hour;
    mindv.innerHTML = readings.minute;
    secdv.innerHTML = readings.second;
}

function incrementSecCount(){
    let audioIn = document.getElementById("myAudio");

    if(countTimer ){
        let timeVal = readTime();
        
        if(timeVal <= 0){
            countTimer = false;
            audioIn.play();
            range.value = timeVal;
        }else{
            updateReadings(--timeVal);
            
        }
    }

}