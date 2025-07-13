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

document.getElementById("love-btn").addEventListener("click", () => {
  document.getElementById("love-btn").style.display = "none";
  document.getElementById("typing-text").style.display = "none";
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
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "linear-gradient(to bottom right, #ffe6f0, #fff0f5)";
  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 1s ease";
  overlay.style.zIndex = "9999";
  document.body.appendChild(overlay);
  setTimeout(() => overlay.style.opacity = "1", 10);

  const containerDiv = document.createElement("div");
  containerDiv.style.position = "fixed";
  containerDiv.style.top = "50%";
  containerDiv.style.left = "50%";
  containerDiv.style.transform = "translate(-50%, -50%)";
  containerDiv.style.zIndex = "10000";
  containerDiv.style.padding = "30px";
  containerDiv.style.borderRadius = "30px";
  containerDiv.style.background = "#fff0f5";
  containerDiv.style.boxShadow = "0 0 50px rgba(255, 105, 180, 0.4)";
  containerDiv.style.textAlign = "center";
  containerDiv.style.maxWidth = "90vw";
  containerDiv.style.width = "400px";
  containerDiv.style.fontSize = "1.1em";
  containerDiv.style.color = "#e84393";
  containerDiv.id = "popup-container";

  const stickers = document.createElement("div");
  stickers.innerHTML = `
    <div class="stickers top-left"><img src="sticker/My Love Flower GIF by cintascotch.gif" width="60" /></div>
    <div class="stickers top-right"><img src="sticker/I Love You GIF.gif" width="60" /></div>
    <div class="stickers bottom-left"><img src="sticker/Heart Love GIF.gif" width="60" /></div>
    <div class="stickers bottom-right"><img src="sticker/In Love Hearts GIF by Zhot.gif" width="60" /></div>
  `;
  containerDiv.appendChild(stickers);

  const popupText = document.createElement("p");
  popupText.style.fontFamily = "'Segoe UI', cursive";
  popupText.style.margin = "0";
  popupText.innerHTML = `
    💖 <strong style="font-size: 1.6em;">Em đã đồng ý rồi!</strong><br><br>
    Từ khoảnh khắc này, anh biết mình là người hạnh phúc nhất trên đời</span> 🥹<br><br>
    Cảm ơn em đã đến bên anh.<br>
    🌸 Anh hứa sẽ yêu thương em mãi mãi 💑
  `;
  containerDiv.appendChild(popupText);

  const dateText = document.createElement("p");
  const today = new Date();
  const formattedDate = today.toLocaleDateString('vi-VN', {
    weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'
  });
  dateText.textContent = `📅 ${formattedDate}`;
  dateText.style.marginTop = "20px";
  dateText.style.color = "#555";
  dateText.style.fontStyle = "italic";
  dateText.style.fontSize = "0.9em";
  containerDiv.appendChild(dateText);

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "📸 Lưu kỷ niệm";
  saveBtn.style.marginTop = "15px";
  saveBtn.style.padding = "10px 20px";
  saveBtn.style.fontSize = "1em";
  saveBtn.style.border = "none";
  saveBtn.style.borderRadius = "10px";
  saveBtn.style.background = "#ff6b81";
  saveBtn.style.color = "white";
  saveBtn.style.cursor = "pointer";
  saveBtn.onclick = () => savePopupAsImage(containerDiv);
  containerDiv.appendChild(saveBtn);

  document.body.appendChild(containerDiv);

  for (let i = 0; i < 60; i++) createExplosionHeart();

  let shake = 0;
  const interval = setInterval(() => {
    document.body.style.transform = `translate(${Math.sin(shake) * 2}px, ${Math.cos(shake) * 2}px)`;
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

function savePopupAsImage(popupElement) {
  html2canvas(popupElement, {
    useCORS: true,
    scale: 2
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "ky-niem-cua-chung-ta.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
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
