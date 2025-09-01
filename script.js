// Get buttons and message container
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Formspree endpoint
const FORMSPREE_URL = "https://formspree.io/f/mldwlkzg"; // <-- replace with your endpoint

// Function to send answer via POST
async function sendAnswer(answer) {
  try {
    await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ choice: answer })
    });
  } catch (error) {
    console.error("Error sending answer:", error);
  }
}

// Index page: Yes/No buttons
if (yesBtn && noBtn) {
  let yesScale = 1;
  const sadMessages = [
    "😢 That hurts...",
    "💔 Please reconsider...",
    "😭 You're breaking my heart...",
    "🥺 Give me a chance...",
    "😞 Ouch..."
  ];

  yesBtn.addEventListener("click", async () => {
    await sendAnswer("Yes");            // Send "Yes" to Formspree
    window.location.href = "happy.html"; // Continue to happy page
  });

  noBtn.addEventListener("click", async () => {
    await sendAnswer("No");             // Send "No" to Formspree
    message.textContent = sadMessages[Math.floor(Math.random() * sadMessages.length)];

    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    // Wiggle No button
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
}

// Activities page: choice cards
document.querySelectorAll(".choice-card").forEach(card => {
  card.addEventListener("click", async () => {
    const activity = card.dataset.activity;   // e.g., "Movie", "Ice Cream"
    await sendAnswer(activity);               // Send choice to Formspree
    window.location.href = card.dataset.page; // Continue to local page
  });
});
