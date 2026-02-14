
// PASSWORD

function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password==="iloveyou"){

document.getElementById("lockScreen").classList.add("hidden");

document.getElementById("universe").classList.remove("hidden");

}
else{
document.getElementById("error").innerText="Wrong password";
}

}


// OPEN MEMORY LANE

function openMemoryLane(){

document.getElementById("universe").classList.add("hidden");

document.getElementById("memoryLane").classList.remove("hidden");

createTimeline();

}


// CLOSE MEMORY LANE

function closeMemoryLane(){

document.getElementById("memoryLane").classList.add("hidden");

document.getElementById("universe").classList.remove("hidden");

}


// CREATE TIMELINE

function createTimeline(){

const container=document.getElementById("timeline");

container.innerHTML="";

for(let i=1;i<=32;i++){

const div=document.createElement("div");

div.className="memory " + (i%2==0?"right":"left");

div.innerHTML=`<img src="images/memory_${i}.jpeg">`;

container.appendChild(div);

}

}
