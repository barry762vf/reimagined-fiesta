/* === set this to your Clever Cloud app URL after deploy: === */
const BACKEND_URL = "https://YOUR_CLEVER_APP_URL"; // e.g. https://my-date-backend.cleverapps.io

// ========== index / no/yes behavior ==========
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const sadMsg = document.getElementById('sadMsg');
let yesScale = 1;
const sadMessages = [
  "💔 Ouch... that stings.",
  "😢 Are you sure?",
  "🥺 Come on, please?",
  "😭 Don't break my heart...",
  "😔 I was really excited..."
];

if (noBtn) {
  noBtn.addEventListener('click', (e) => {
    // enlarge yes
    yesScale += 0.35;
    yesBtn.style.transform = `scale(${yesScale})`;
    if (yesScale > 4) yesBtn.innerText = "You HAVE to say YES 💘";

    // wiggle no and slightly move it so it's still pressable
    noBtn.classList.add('wiggle');
    setTimeout(()=> noBtn.classList.remove('wiggle'), 350);

    // small random shift (keeps button in viewport)
    const wrap = document.body;
    const maxShift = 120;
    const shiftX = Math.floor(Math.random() * maxShift) - maxShift/2;
    const shiftY = Math.floor(Math.random() * 80) - 40;
    noBtn.style.transform = `translate(${shiftX}px, ${shiftY}px)`;

    // random sad message
    sadMsg.innerText = sadMessages[Math.floor(Math.random()*sadMessages.length)];
  });
}

// ========== activities: send choice to backend ==========
document.querySelectorAll('.choice-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const choice = card.dataset.choice || card.innerText.trim();
    // save choice to backend (fire-and-forget)
    if (BACKEND_URL && BACKEND_URL !== "https://YOUR_CLEVER_APP_URL") {
      fetch(`${BACKEND_URL}/saveChoice`, {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ choice })
      }).catch(err => console.warn('saveChoice failed', err));
    } else {
      console.log('Choice:', choice);
    }
    // navigate to a local HTML page for that activity if you have one:
    // window.location.href = choicePageMap[choice] || 'activities.html';
    alert(`Saved choice: ${choice}`);
  });
});
