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

document.body.addEventListener("click", (e) => {
  const msg = document.createElement("div");
  msg.className = "love-message";
  msg.innerText = messages[currentMessage];

  msg.style.left = `${e.clientX}px`;
  msg.style.top = `${e.clientY}px`;
  msg.style.transform = "translate(-50%, -50%)"; 

  document.getElementById("message-container").appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 9000);

  currentMessage = (currentMessage + 1) % messages.length;
});
