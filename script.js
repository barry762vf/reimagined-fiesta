const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

if (yesBtn && noBtn) {
  let yesScale = 1;
  const sadMessages = ["😢 That hurts...", "💔 Please reconsider...", "😭 You're breaking my heart...", "🥺 Give me a chance...", "😞 Ouch..."];

  // Replace these with your Google Form pre-fill links
  const googleFormYes = "https://docs.google.com/forms/d/e/1FAIpQLSdK2mDJLaXIRihWWRACpqZzb4jEdLSzEu0UdH6j7x7wj21HUA/viewform?usp=pp_url&entry.1998309822=Yes";
  const googleFormNo = "https://docs.google.com/forms/d/e/1FAIpQLSdK2mDJLaXIRihWWRACpqZzb4jEdLSzEu0UdH6j7x7wj21HUA/viewform?usp=pp_url&entry.1998309822=No";
 // When "Yes" clicked
  yesBtn.addEventListener("click", () => {
    // Send to Google Form in background
    iframe.src = googleFormYes;

    // Continue with website
    window.location.href = "happys.html";
  });

  // When "No" clicked
  noBtn.addEventListener("click", () => {
    // Send "No" to Google Form in background
    iframe.src = googleFormNo;

    // Display sad message
    message.textContent = sadMessages[Math.floor(Math.random() * sadMessages.length)];

    // Make Yes button grow
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    // Wiggle No button
    noBtn.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-10px)" }, { transform: "translateX(10px)" }, { transform: "translateX(0)" }],
      { duration: 300 }
    );
  });
}
