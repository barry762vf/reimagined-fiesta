const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

if (yesBtn && noBtn) {
  let yesScale = 1;
  const sadMessages = ["😢 That hurts...", "💔 Please reconsider...", "😭 You're breaking my heart...", "🥺 Give me a chance...", "😞 Ouch..."];

  // Replace these with your Google Form pre-fill links
  const googleFormYes = "https://docs.google.com/forms/d/e/1FAIpQLSdK2mDJLaXIRihWWRACpqZzb4jEdLSzEu0UdH6j7x7wj21HUA/viewform?usp=pp_url&entry.1998309822=Yes";
  const googleFormNo = "https://docs.google.com/forms/d/e/1FAIpQLSdK2mDJLaXIRihWWRACpqZzb4jEdLSzEu0UdH6j7x7wj21HUA/viewform?usp=pp_url&entry.1998309822=No";

  yesBtn.addEventListener("click", () => {
    window.open(googleFormYes, "_blank"); // submits "Yes" to Google Form
    window.location.href = "happys.html"; // move to happy page
  });

  noBtn.addEventListener("click", () => {
    message.textContent = sadMessages[Math.floor(Math.random() * sadMessages.length)];
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    // wiggle No button
    noBtn.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-10px)" }, { transform: "translateX(10px)" }, { transform: "translateX(0)" }],
      { duration: 300 }
    );

    // optionally submit "No" to Google Form
    window.open(googleFormNo, "_blank");
  });
}
