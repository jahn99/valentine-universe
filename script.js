// =================
// GLOBAL VARIABLES
// =================

let progress = 0;

const startDate = new Date("2024-01-01");


// =================
// PAGE LOAD
// =================

window.onload = function(){

startStars();

startCounter();

document.getElementById("final-letter").style.display = "none";

};


// =================
// PASSWORD
// =================

function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "iloveyou"){

document.getElementById("lockScreen").style.display = "none";

document.getElementById("universe").style.display = "block";

}
else{

document.getElementById("errorMessage").innerText =
"Wrong password";

}

}


// =================
// STARS BACKGROUND
// =================

function startStars(){

const canvas =
document.getElementById("stars");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let stars = [];

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

ctx.fillStyle = "#ff99cc";

stars.forEach(star=>{

ctx.beginPath();

ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

ctx.fill();

star.y += star.s;

if(star.y > canvas.height)
star.y = 0;

});

requestAnimationFrame(draw);

}

draw();

}


// =================
// LOVE PROGRESS
// =================

function increaseProgress(amount){

progress += amount;

if(progress > 100)
progress = 100;

document.getElementById("progress-bar").style.width =
progress + "%";

document.getElementById("progress-text").innerText =
"Love Energy: " + progress + "%";

if(progress === 100){

document.getElementById("final-letter").style.display =
"flex";

}

}


// =================
// FLOATING HEARTS
// =================

const messages = [

"You are my forever 💕",

"You are my safe place 💗",

"I love you endlessly 💖",

"You complete my universe 💞",

"I choose you always 💘"

];

function createHeart(){

const container =
document.getElementById("heart-container");

if(!container) return;

const heart =
document.createElement("div");

heart.className = "heart";

heart.innerHTML = "💗";

heart.style.left =
Math.random()*100 + "vw";

const duration =
Math.random()*5 + 5;

heart.style.animationDuration =
duration + "s";

heart.onclick = function(){

showMessage();

increaseProgress(10);

heart.remove();

};

container.appendChild(heart);

setTimeout(()=>heart.remove(),
duration*1000);

}

setInterval(createHeart,1500);


// =================
// POPUP MESSAGE
// =================

function showMessage(){

const popup =
document.getElementById("message-popup");

const text =
document.getElementById("love-message");

const msg =
messages[Math.floor(Math.random()*messages.length)];

text.innerText = msg;

popup.style.display = "flex";

}

function closeMessage(){

document.getElementById("message-popup").style.display =
"none";

}


// =================
// LOVE TIMER
// =================

function startCounter(){

setInterval(()=>{

const now = new Date();

const diff = now - startDate;

const days =
Math.floor(diff/(1000*60*60*24));

document.getElementById("time-counter").innerText =
days + " days";

},1000);

}


// =================
// LOVE REASONS
// =================

const reasons = [

"You make me smile 💕",

"You are my home 💗",

"You are my universe 💖",

"You are my forever 💞",

"You are my heart 💘"

];

function generateReason(){

const reason =
reasons[Math.floor(Math.random()*reasons.length)];

document.getElementById("reason-output").innerText =
reason;

increaseProgress(5);

}


// =================
// MEMORY LANE
// =================

const memories = [];

for(let i=1;i<=32;i++){

memories.push({

image:`images/memory_${i}.jpeg`,

text:`Memory ${i} 💕`

});

}

function openMemoryLane(){

const lane =
document.getElementById("memory-lane");

lane.style.display = "block";

const container =
document.getElementById("memory-container");

container.innerHTML = "";

memories.forEach(memory=>{

const card =
document.createElement("div");

card.className = "memory-card";

card.innerHTML = `
<img src="${memory.image}">
<p>${memory.text}</p>
`;

container.appendChild(card);

});

}

function closeMemoryLane(){

document.getElementById("memory-lane").style.display =
"none";

}
