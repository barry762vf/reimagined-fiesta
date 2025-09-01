const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Only run on index.html
if (yesBtn && noBtn) {
  let yesScale = 1;
  const sadMessages = ["😢 That hurts...", "💔 Please reconsider...", "😭 You're breaking my heart...", "🥺 Give me a chance...", "😞 Ouch..."];

  yesBtn.addEventListener("click", () => {
    window.location.href = "happys.html";
  });

  noBtn.addEventListener("click", () => {
    message.textContent = sadMessages[Math.floor(Math.random() * sadMessages.length)];
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    // Wiggle No
    noBtn.animate([{ transform: "translateX(0)" }, { transform: "translateX(-10px)" }, { transform: "translateX(10px)" }, { transform: "translateX(0)" }], { duration: 300 });
  });
}

// Only run on activities.html
const cards = document.querySelectorAll(".choice-card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    const page = card.dataset.page;
    window.location.href = page;
  });
});
