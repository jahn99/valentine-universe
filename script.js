// PASSWORD

function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password==="iloveyou"){

document.getElementById("lockScreen").style.display="none";

document.getElementById("universe").style.display="block";

}

}


// MEMORY DATA

const memories=[];

for(let i=1;i<=32;i++){

memories.push({

image:`images/memory_${i}.jpeg`,
text:`Memory ${i} 💕`

});

}


// OPEN MEMORY LANE

function openMemoryLane(){

document.getElementById("universe").style.display="none";

const lane =
document.getElementById("memory-lane");

lane.style.display="block";

const container =
document.getElementById("memory-container");

container.innerHTML="";

memories.forEach(memory=>{

const card=document.createElement("div");

card.className="memory-card";

card.innerHTML=`
<img src="${memory.image}">
<p>${memory.text}</p>
`;

container.appendChild(card);

});

}


// CLOSE MEMORY LANE

function closeMemoryLane(){

document.getElementById("memory-lane").style.display="none";

document.getElementById("universe").style.display="block";

}


// TIMER

const startDate=new Date("2024-01-01");

setInterval(()=>{

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("time-counter").innerText=
days+" days since I fell for you 💕";

},1000);
