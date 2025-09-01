const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const form = document.getElementById("formspreeForm");
const choiceInput = document.getElementById("choiceInput");

let yesScale = 1;
const sadMessages = [
  "😢 That hurts...",
  "💔 Please reconsider...",
  "😭 You're breaking my heart...",
  "🥺 Give me a chance...",
  "😞 Ouch..."
];

// Function to submit form to Formspree
function submitAnswer(answer) {
  choiceInput.value = answer;  // Set hidden input
  form.submit();                // Submit form
}

// Yes button
yesBtn.addEventListener("click", () => {
  submitAnswer("Yes");           // Send to Formspree
  window.location.href = "happy.html";  // Move to next page
});

// No button
noBtn.addEventListener("click", () => {
  submitAnswer("No");            // Send to Formspree
  message.textContent = sadMessages[Math.floor(Math.random() * sadMessages.length)];

  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

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

// Activity page cards (example for activities.html)
document.querySelectorAll(".choice-card").forEach(card => {
  card.addEventListener("click", () => {
    submitAnswer(card.dataset.activity);   // Send activity choice
    window.location.href = card.dataset.page; // Move to corresponding page
  });
});
