const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let yesSize = 1;
const sadMessages = [
  "😢 That hurts...",
  "💔 Please reconsider...",
  "😭 You're breaking my heart...",
  "🥺 Give me a chance...",
  "😞 Ouch..."
];

// When "Yes" is clicked
yesBtn.addEventListener("click", async () => {
  message.textContent = "Yay! 🎉 Let's plan something fun!";

  try {
    await fetch("http://localhost:5000/choice", {   // change later if hosted
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ choice: "yes" }),
    });
    window.location.href = "happy.html"; // <-- make sure you have happy.html
  } catch (err) {
    console.error("Error sending to backend:", err);
    message.textContent = "But I couldn't reach the server 😅";
  }
});

// When "No" is clicked
noBtn.addEventListener("click", () => {
  // Random sad message
  const randomMsg = sadMessages[Math.floor(Math.random() * sadMessages.length)];
  message.textContent = randomMsg;

  // Make Yes button bigger
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Wiggle the No button
  noBtn.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-10px)" },
      { transform: "translateX(10px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 300 }
  );
});
