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

document.getElementById("memory-lane").style.display="block";

createTimeline();

}


// CLOSE MEMORY LANE

function closeMemoryLane(){

document.getElementById("memory-lane").style.display="none";

document.getElementById("universe").style.display="flex";

}


// CREATE TIMELINE

function createTimeline(){

const container=
document.getElementById("memory-container");

container.innerHTML="";

memories.forEach((memory,index)=>{

const card=document.createElement("div");

card.className=
"memory-card "+
(index%2===0?"left":"right");

card.innerHTML=
`
<img src="${memory.image}">
<p>${memory.text}</p>
`;

container.appendChild(card);

});

}
