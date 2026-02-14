window.onload=function(){

startStars();
startCounter();

};

// PASSWORD

function checkPassword(){

let password=document.getElementById("passwordInput").value;

if(password==="iloveyou"){

document.getElementById("lockScreen").style.display="none";
document.getElementById("universe").style.display="block";

}
else{

document.getElementById("errorMessage").innerText="Wrong password";

}

}

// STARS

function startStars(){

const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5,
s:Math.random()*0.5

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff99cc";

stars.forEach(star=>{

ctx.beginPath();
ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
ctx.fill();

star.y+=star.s;

if(star.y>canvas.height)
star.y=0;

});

requestAnimationFrame(draw);

}

draw();

}

// LOVE PROGRESS

let progress=0;

function increaseProgress(amount){

progress+=amount;

if(progress>100)progress=100;

document.getElementById("progress-bar").style.width=progress+"%";

document.getElementById("progress-text").innerText=
"Love Energy: "+progress+"%";

/* FINAL LETTER ONLY AT 100 */

if(progress===100){

setTimeout(()=>{

document.getElementById("final-letter").style.display="flex";

},500);

}

}

// HEARTS

const messages=[

"You are my forever 💕",
"You are my safe place 💗",
"I love you endlessly 💖",
"You complete me 💞",
"I choose you always 💘"

];

function createHeart(){

const container=document.getElementById("heart-container");

if(!container)return;

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💗";

heart.style.left=Math.random()*100+"vw";

let duration=Math.random()*5+5;

heart.style.animationDuration=duration+"s";

heart.onclick=function(){

showMessage();
increaseProgress(10);

heart.remove();

};

container.appendChild(heart);

setTimeout(()=>heart.remove(),duration*1000);

}

setInterval(createHeart,1500);

// MESSAGE POPUP

function showMessage(){

let msg=messages[Math.floor(Math.random()*messages.length)];

document.getElementById("love-message").innerText=msg;

document.getElementById("message-popup").style.display="flex";

}

function closeMessage(){

document.getElementById("message-popup").style.display="none";

}

// COUNTER

const startDate=new Date("2024-01-01");

function startCounter(){

setInterval(()=>{

let now=new Date();

let diff=now-startDate;

let days=Math.floor(diff/(1000*60*60*24));

document.getElementById("time-counter").innerText=
days+" days";

},1000);

}

// REASON GENERATOR

const reasons=[

"You make me happy 💕",
"You are my home 💗",
"You are my universe 💖",
"You are my forever 💞",
"You are my heart 💘"

];

function generateReason(){

let reason=reasons[Math.floor(Math.random()*reasons.length)];

document.getElementById("reason-output").innerText=reason;

increaseProgress(5);

}
