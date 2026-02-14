// PASSWORD

function checkPassword(){

let password=document.getElementById("passwordInput").value;

if(password==="iloveyou"){

document.getElementById("lockScreen").style.display="none";
document.getElementById("universe").style.display="block";

}
}

// STARS

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

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(star=>{

ctx.beginPath();
ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
ctx.fill();

star.y+=star.s;

if(star.y>canvas.height)
star.y=0;

});

requestAnimationFrame(drawStars);

}

drawStars();

// HEARTS

let progress=0;

const messages=[

"You are my favorite person.",
"You are home.",
"I love being yours.",
"You make everything better.",
"I choose you always.",
"You are my universe."

];

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.onclick=function(){

showMessage();

increaseProgress();

heart.remove();

};

document.getElementById("heart-container").appendChild(heart);

}

setInterval(createHeart,1000);

function showMessage(){

let msg=messages[Math.floor(Math.random()*messages.length)];

document.getElementById("love-message").innerText=msg;

document.getElementById("message-popup").classList.remove("hidden");

}

function closeMessage(){

document.getElementById("message-popup").classList.add("hidden");

}

// PROGRESS

function increaseProgress(){

progress+=10;

if(progress>100)progress=100;

document.getElementById("progress-bar").style.width=progress+"%";

document.getElementById("progress-text").innerText="Love Energy: "+progress+"%";

if(progress===100){

document.getElementById("final-letter").classList.remove("hidden");

}

}

// TIME COUNTER

const startDate=new Date("2024-01-01");

function updateCounter(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/86400000);

document.getElementById("time-counter").innerText=days+" days";

}

setInterval(updateCounter,1000);

// REASONS

const reasons=[

"You make me happy.",
"You understand me.",
"You care for me.",
"You exist.",
"You are you."

];

function generateReason(){

let reason=reasons[Math.floor(Math.random()*reasons.length)];

document.getElementById("reason-output").innerText=reason;

increaseProgress();

}
