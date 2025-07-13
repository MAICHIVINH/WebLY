
const text = "Em ơi, anh có điều này muốn nói...";
const typingText = document.getElementById("typing-text");
let i = 0;
function type() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();

const slideshowImages = [
    "images/love1.jpg",
    "images/love2.jpg",
    "images/love3.jpg"
];
let current = 0;
setInterval(() => {
    current = (current + 1) % slideshowImages.length;
    document.getElementById("slideshow-img").src = slideshowImages[current];
}, 2500);

document.getElementById("love-btn").addEventListener("click", () => {
    document.getElementById("love-btn").style.display = "none";
    document.querySelector(".slideshow").style.display = "none";
    const confessionLines = [
        "🌸 Anh biết rằng tình cảm này đã lớn dần từng ngày...",
        "✨ Từ cái nhìn đầu tiên, đến từng nụ cười em dành cho anh.",
        "",
        "💖 Anh muốn bên em mỗi sáng, mỗi tối.",
        "💬 Làm chỗ dựa cho em những khi yếu lòng.",
        "🕯️ Là người kể chuyện mỗi đêm, và là người em tựa vào mãi mãi...",
        "",
        "🥹 Làm người yêu anh nhé? ❤️"
    ];
    const container = document.getElementById("confession-content");
    container.innerHTML = "";
    document.getElementById("confession-popup").style.display = "block";
    let i = 0;
    function typeLine() {
        if (i < confessionLines.length) {
            const p = document.createElement("p");
            p.textContent = confessionLines[i];
            p.style.opacity = 0;
            p.style.transition = "opacity 0.6s";
            container.appendChild(p);
            setTimeout(() => (p.style.opacity = 1), 100);
            i++;
            setTimeout(typeLine, 700);
        }
    }
    typeLine();
});

function showLovePopup() {
    document.getElementById("confession-popup").style.display = "none";
    document.getElementById("love-popup").style.display = "block";
}

function acceptLove() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('confession-popup').style.display = 'none';
    document.getElementById('love-popup').style.display = 'none';

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "white";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 1s ease";
    overlay.style.zIndex = "9999";
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.style.opacity = "0.8";
    }, 10);
    for (let i = 0; i < 50; i++) createExplosionHeart();
    const msg = document.createElement("div");
    msg.innerHTML = "🎉 Em đã đồng ý rồi!<br><br>💖 Cảm ơn em đã tin anh.<br>Anh hứa sẽ bên em mãi mãi.";
    msg.style.position = "fixed";
    msg.style.top = "50%";
    msg.style.left = "50%";
    msg.style.transform = "translate(-50%, -50%)";
    msg.style.background = "white";
    msg.style.padding = "30px";
    msg.style.borderRadius = "20px";
    msg.style.fontSize = "1.4em";
    msg.style.color = "#e84118";
    msg.style.boxShadow = "0 0 30px rgba(0,0,0,0.2)";
    msg.style.zIndex = "99999";
    msg.style.textAlign = "center";
    document.body.appendChild(msg);
    let shake = 0;
    const interval = setInterval(() => {
        document.body.style.transform = `translate(${Math.sin(shake) * 5}px, ${Math.cos(shake) * 5}px)`;
        shake += 0.2;
        if (shake > 6.3) {
            clearInterval(interval);
            document.body.style.transform = "translate(0,0)";
        }
    }, 20);
}

function denyLove() {
    document.getElementById("love-popup").innerHTML = "<p>Huhu anh buồn lắm đó 😭</p>";
}

const canvas = document.getElementById("heart-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hearts = [];
function createHeart() {
    const size = Math.random() * 20 + 10;
    hearts.push({ x: Math.random() * canvas.width, y: -size, size, speed: Math.random() * 2 + 1, opacity: Math.random() });
}
function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < hearts.length; i++) {
        let h = hearts[i];
        ctx.globalAlpha = h.opacity;
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(h.x, h.y);
        ctx.bezierCurveTo(h.x - h.size / 2, h.y - h.size / 2, h.x - h.size, h.y + h.size / 3, h.x, h.y + h.size);
        ctx.bezierCurveTo(h.x + h.size, h.y + h.size / 3, h.x + h.size / 2, h.y - h.size / 2, h.x, h.y);
        ctx.fill();
        h.y += h.speed;
        if (h.y > canvas.height) hearts.splice(i, 1);
    }
}
setInterval(() => { createHeart(); drawHearts(); }, 30);

function createExplosionHeart() {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.opacity = "1";
    heart.style.transition = "all 2s ease-out";
    heart.style.zIndex = "99999";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.style.transform = `translate(${(Math.random() - 0.5) * 300}px, ${(Math.random() - 0.5) * 300}px) scale(2)`;
        heart.style.opacity = "0";
    }, 100);
    setTimeout(() => { heart.remove(); }, 2100);
}

function createFloatingEmoji() {
    const emoji = document.createElement("div");
    emoji.textContent = "💖";
    emoji.style.position = "fixed";
    emoji.style.fontSize = "24px";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = "100%";
    emoji.style.animation = "flyUp 3s linear forwards";
    emoji.style.zIndex = "9999";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
}
setInterval(createFloatingEmoji, 500);