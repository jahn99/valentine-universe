// RUN AFTER PAGE LOAD
window.onload = function() {
    startStars();
    startCounter();
};

// PASSWORD UNLOCK
function checkPassword() {

    const password = document.getElementById("passwordInput").value;

    if (password === "iloveyou") {

        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("universe").style.display = "block";

    } else {

        document.getElementById("errorMessage").innerText = "Wrong password";

    }
}

// STAR BACKGROUND
function startStars() {

    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];

    for (let i = 0; i < 200; i++) {

        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5,
            speed: Math.random() * 0.5
        });

    }

    function drawStars() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";

        stars.forEach(star => {

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
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

// LOVE PROGRESS SYSTEM
let progress = 0;

function increaseProgress(amount) {

    progress += amount;

    if (progress > 100) progress = 100;

    document.getElementById("progress-bar").style.width = progress + "%";

    document.getElementById("progress-text").innerText =
        "Love Energy: " + progress + "%";

    if (progress === 100) {

        document.getElementById("final-letter").classList.remove("hidden");

    }
}

// FLOATING HEARTS
const messages = [
    "You are my favorite person.",
    "You are home.",
    "I love being yours.",
    "You make everything better.",
    "I choose you always.",
    "You are my universe."
];

function createHeart() {

    const container = document.getElementById("heart-container");

    if (!container) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    const duration = Math.random() * 5 + 5;
    heart.style.animationDuration = duration + "s";

    heart.onclick = function() {

        showMessage();
        increaseProgress(10);

        heart.remove();

    };

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

}

setInterval(createHeart, 1500);

// MESSAGE POPUP
function showMessage() {

    const msg =
        messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("love-message").innerText = msg;

    document.getElementById("message-popup")
        .classList.remove("hidden");

}

function closeMessage() {

    document.getElementById("message-popup")
        .classList.add("hidden");

}

// TIME COUNTER
const startDate = new Date("2024-01-01");

function startCounter() {

    setInterval(() => {

        const now = new Date();

        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        document.getElementById("time-counter").innerText =
            days + " days";

    }, 1000);

}

// REASON GENERATOR
const reasons = [
    "You make me happy.",
    "You understand me.",
    "You care for me.",
    "You exist.",
    "You are you."
];

function generateReason() {

    const reason =
        reasons[Math.floor(Math.random() * reasons.length)];

    document.getElementById("reason-output").innerText = reason;

    increaseProgress(5);

}
