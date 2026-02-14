// ==========================
// GLOBAL VARIABLES
// ==========================

let progress = 0;

// change this date to your actual anniversary if you want
const startDate = new Date("2024-01-01");


// ==========================
// RUN AFTER PAGE LOAD
// ==========================

window.onload = function () {

    // ensure final letter is hidden at start
    const finalLetter = document.getElementById("final-letter");
    if (finalLetter) {
        finalLetter.style.display = "none";
    }

    startStars();
    startCounter();
};


// ==========================
// PASSWORD SYSTEM
// ==========================

function checkPassword() {

    const password = document.getElementById("passwordInput").value;

    if (password === "iloveyou") {

        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("universe").style.display = "block";

    }
    else {

        document.getElementById("errorMessage").innerText =
            "Wrong password";

    }
}


// ==========================
// STAR BACKGROUND
// ==========================

function startStars() {

    const canvas = document.getElementById("stars");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];

    for (let i = 0; i < 200; i++) {

        stars.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            speed: Math.random() * 0.5

        });

    }

    function drawStars() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ff99cc";

        stars.forEach(star => {

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();

            star.y += star.speed;

            if (star.y > canvas.height) {
                star.y = 0;
            }

        });

        requestAnimationFrame(drawStars);

    }

    drawStars();
}


// ==========================
// LOVE PROGRESS SYSTEM
// ==========================

function increaseProgress(amount) {

    progress += amount;

    if (progress > 100) progress = 100;

    const bar = document.getElementById("progress-bar");
    const text = document.getElementById("progress-text");

    if (bar) bar.style.width = progress + "%";
    if (text) text.innerText = "Love Energy: " + progress + "%";

    // ONLY SHOW FINAL LETTER AT EXACTLY 100%
    if (progress === 100) {

        const finalLetter =
            document.getElementById("final-letter");

        if (finalLetter) {

            finalLetter.style.display = "flex";

        }

    }
}


// ==========================
// FLOATING HEARTS SYSTEM
// ==========================

const messages = [

    "You are my forever 💕",
    "You are my safe place 💗",
    "I love you endlessly 💖",
    "You complete my universe 💞",
    "I choose you in every lifetime 💘",
    "You are my home 💓"

];

function createHeart() {

    const container =
        document.getElementById("heart-container");

    if (!container) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💗";

    heart.style.left =
        Math.random() * 100 + "vw";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    heart.onclick = function () {

        showMessage();

        increaseProgress(10);

        heart.remove();

    };

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}

// create hearts continuously
setInterval(createHeart, 1500);


// ==========================
// MESSAGE POPUP
// ==========================

function showMessage() {

    const popup =
        document.getElementById("message-popup");

    const text =
        document.getElementById("love-message");

    if (!popup || !text) return;

    const msg =
        messages[Math.floor(Math.random() * messages.length)];

    text.innerText = msg;

    popup.style.display = "flex";

}

function closeMessage() {

    const popup =
        document.getElementById("message-popup");

    if (popup)
        popup.style.display = "none";

}


// ==========================
// TIME COUNTER
// ==========================

function startCounter() {

    setInterval(() => {

        const now = new Date();

        const diff = now - startDate;

        const days =
            Math.floor(diff / (1000 * 60 * 60 * 24));

        const counter =
            document.getElementById("time-counter");

        if (counter)
            counter.innerText =
                days + " days";

    }, 1000);

}


// ==========================
// REASON GENERATOR
// ==========================

const reasons = [

    "You make me smile every day 💕",
    "You understand me 💗",
    "You make my world brighter 💖",
    "You are my happiness 💞",
    "You are my forever 💘"

];

function generateReason() {

    const output =
        document.getElementById("reason-output");

    if (!output) return;

    const reason =
        reasons[Math.floor(Math.random() * reasons.length)];

    output.innerText = reason;

    increaseProgress(5);

}
