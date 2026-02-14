
// PASSWORD

function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password==="iloveyou"){

document.getElementById("lockScreen").style.display="none";

document.getElementById("universe").style.display="flex";

}

else{

document.getElementById("errorMessage").innerText=
"Wrong password";

}

}


// MEMORY DATA

const memories=[];

for(let i=1;i<=32;i++){

memories.push({

image:`images/memory_${i}.jpeg`

});

}


// OPEN MEMORY

function openMemoryLane(){

document.getElementById("universe").style.display="none";

const lane =
document.getElementById("memory-lane");

lane.style.display="block";

createTimeline();

}


// CLOSE MEMORY

function closeMemoryLane(){

document.getElementById("memory-lane").style.display="none";

document.getElementById("universe").style.display="flex";

}


// CREATE TIMELINE

function createTimeline(){

const container =
document.getElementById("memory-container");

container.innerHTML="";

memories.forEach((memory,index)=>{

const card =
document.createElement("div");

card.className =
"memory-card "+
(index%2===0?"left":"right");

card.innerHTML =
`<img src="${memory.image}">`;

container.appendChild(card);

});

}
