const messages = [
  "Jorge y Jaqui por Siempre ❤️",
  "Eres mi todo 💕",
  "Te pienso siempre 💭",
  "Mi mundo eres tú 🌍",
  "Tu amor me inspira ✨",
  "Tú haces latir mi corazón ❤️",
  "Contigo todo es mejor 🌈",
  "Eres mi lugar favorito 🏡",
  "Amarte es mi destino 🔐",
  "Tu sonrisa ilumina mis días ☀️",
  "Quiero estar contigo, siempre 🌙",
  "Eres mi Tranquilidad 🕊️",
  "Tu mirada lo cambia todo 👀",
  "En tus abrazos encuentro el hogar 🤗",
  "Mi corazón te eligió sin dudar 💓",
  "Solo tú haces magia en mi vida ✨",
  "Tus besos son mi adicción 😘",
  "Tú + yo = aunque no quieras ♾️",
  "No necesito nada más que a ti 🫶",
  "Eres mi sueño hecho realidad 💭💖",
  "Cada segundo contigo vale oro 🕰️💛"
];

let currentMessage = 0;

function showMessage(x, y) {
  const msg = document.createElement("div");
  msg.className = "love-message";
  msg.innerText = messages[currentMessage];

  msg.style.left = `${x}px`;
  msg.style.top = `${y}px`;
  msg.style.position = "absolute";
  msg.style.transform = "translate(-50%, -50%)";

  document.getElementById("message-container").appendChild(msg);

  setTimeout(() => msg.remove(), 9000);

  currentMessage = (currentMessage + 1) % messages.length;
}

// Detectar si es pantalla táctil
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouch) {
  document.body.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    showMessage(touch.clientX, touch.clientY);
  });
} else {
  document.body.addEventListener("click", (e) => {
    showMessage(e.clientX, e.clientY);
  });
}
