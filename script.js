let progress=0;

const startDate=new Date("2024-01-01");

window.onload=function(){

startStars();

startCounter();

};


// PASSWORD

function checkPassword(){

const password=
document.getElementById("passwordInput").value;

if(password==="iloveyou"){

document.getElementById("lockScreen").style.display="none";

document.getElementById("universe").style.display="block";

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


// MEMORY LANE SYSTEM

const memories=[];

for(let i=1;i<=32;i++){

memories.push({

image:`images/memory_${i}.jpeg`,
text:`Memory ${i} 💕`

});

}


function openMemoryLane(){

document.getElementById("memory-lane").style.display="flex";

const container=document.getElementById("memory-container");

container.innerHTML="";

memories.forEach(memory=>{

const card=document.createElement("div");

card.className="memory-card";

card.innerHTML=
`<img src="${memory.image}">
<p>${memory.text}</p>`;

container.appendChild(card);

});

}


function closeMemoryLane(){

document.getElementById("memory-lane").style.display="none";

}


// COUNTER

function startCounter(){

setInterval(()=>{

let now=new Date();

let diff=now-startDate;

let days=Math.floor(diff/(1000*60*60*24));

document.getElementById("time-counter").innerText=
days+" days";

},1000);

}
