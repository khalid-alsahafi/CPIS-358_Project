function handleSubmit(event) {
  event.preventDefault();

  const pointsMap = {
    q1: { monthly: 2, yearly: 1, never: 0 },
    q2: { never: 2, sometimes: 1, always: 0 },
    q3: { sender: 2, ignore: 1, click: 0 },
    q4: { always: 2, sometimes: 1, never: 0 },
    q5: { immediately: 2, delay: 1, ignore: 0 }
  };

  let totalQuestions = 5;
  let maxPoints = totalQuestions * 2;
  let pointsEarned = 0;

  for (let key in pointsMap) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected) {
      pointsEarned += pointsMap[key][selected.value];
    }
  }

  const awarenessScore = ((pointsEarned / maxPoints) * 100).toFixed(1);

  const results = {
    totalQuestions,
    pointsEarned,
    maxPoints,
    awarenessScore
  };

  localStorage.setItem("quizResults", JSON.stringify(results));
  window.location.href = "/Home/Results"
  return false;
}

  async function submitScore(finalScore) {
    // 1. Read the antiforgery token from the hidden field
    const token = document.querySelector('input[name="__RequestVerificationToken"]').value;  
    // 2. POST JSON using Fetch
    const response = await fetch('/Account/UpdateScores', {
      method: 'POST',                                              // HTTP POST :contentReference[oaicite:2]{index=2}
      headers: {
        'Content-Type': 'application/json',                        // JSON payload :contentReference[oaicite:3]{index=3}
        'RequestVerificationToken': token                          // CSRF token header :contentReference[oaicite:4]{index=4}
      },
      body: JSON.stringify({ score: finalScore })                   // send { "score": 42 } :contentReference[oaicite:5]{index=5}
    });

    // 3. Check for success
    if (!response.ok) {                                             // check response.ok before parsing :contentReference[oaicite:6]{index=6}
      console.error('Save failed:', await response.text());
    } else {
      const data = await response.json();
      console.log('Last score:', data.last, 'Best score:', data.best);
    }
  }

  // Hook into your result display logic
  const data = JSON.parse(localStorage.getItem("quizResults"));
  if (data) {
    document.getElementById("score").textContent = `${data.awarenessScore}%`;
    submitScore(data.pointsEarned);  // send to server instead of auto?submitting the form
  }


const data = JSON.parse(localStorage.getItem("quizResults"));

if (data) {
  document.getElementById("score").textContent = `${data.awarenessScore}%`;
  document.getElementById("totalQuestions").textContent = data.totalQuestions;
  document.getElementById("pointsEarned").textContent = data.pointsEarned;
  document.getElementById("maxPoints").textContent = data.maxPoints;
  submitScore(data.pointsEarned);
}

const score = parseFloat(data.awarenessScore);
document.getElementById("score").textContent = `${score}%`;

const progressCircle = document.querySelector(".circular-progress");
if (progressCircle) {
  progressCircle.style.background = `conic-gradient(#007acc ${score}%,rgb(205, 205, 205) ${score}%)`;
}

