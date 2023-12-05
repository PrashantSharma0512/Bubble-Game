function MakeBubble(){
var clutter = "";
for(var i=1;i<=210;i++){
    clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
document.querySelector(".bbtm").innerHTML = clutter;
}

let timer = 60;
let score = 0;
var rndm =0;
function IncrScore(){
    score+=10;
    document.querySelector("#Scorevalue").textContent = score;
}
function DecrScore() {
    score-=5;
    document.querySelector("#Scorevalue").textContent = score;
}
function runTimer() {
    let TimerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }
        else{
            clearInterval(TimerInt);
            // document.querySelector(".bbtm").innerHTML = `<h1>Game Over</h1>`
            document.querySelector(".bbtm").innerHTML =`<h1>Score</h1> : <h1>${score}</h1>`
        }
    },1000);
}
function getNewhit(){
    rndm = Math.floor(Math.random()*10);
    document.querySelector("#hitScr").textContent = rndm;
}
document.querySelector(".bbtm").addEventListener("click",(dets)=>{
    clickedNum = Number(dets.target.textContent);

    if (clickedNum === rndm) {
        IncrScore();
        getNewhit();
        runTimer();
        MakeBubble();
    }else {
        if(score > 0){
            DecrScore();
            getNewhit();
            runTimer();
            MakeBubble();
        }
    }
    
})
MakeBubble();
getNewhit();
runTimer();


