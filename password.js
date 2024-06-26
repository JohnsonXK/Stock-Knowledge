const failureMessages = [
  "Oops! You entered the wrong password.",
  "Access denied! Try again with the correct password.",
  "Sorry, that's not the right password. Give it another shot!",
  "Okay, 1 attempt left.",
  "Just kidding, keep going!",
  "Try the developer's name.",
  "Or maybe his crush's name?",
  "That might not be his crush's name.",
  "It starts with the letter P!",
  "Nah, just kidding, it's not the password.",
  "This is what it feels like when you play Geometry Dash :)",
  "Focus.",
  "Try harder!",
  "Faster!!! I mean, just try until you succeed!",
  "Okay, just try his crush's name again.",
  "Wrong crush name!",
  "Or maybe she's not really his crush. Any ideas?",
  "Still not working.",
  "Hmm, have you tried your course and year?",
  "No, still not working.",
  "There are some clues somewhere in the developer's Facebook account; maybe you should check it out.",
  "Giving up is not a key, it's just a word with the action of failures.",
  "Okay, and 3...",
  "2...",
  "1...",
  "Neehhhh... Just try again",
  "Don't give up!",
  // Add more failure messages as needed
];

let failureMessageIndex = 0;

function displayNextFailureMessage() {
  document.getElementById("failureMessage").textContent = failureMessages[failureMessageIndex];
  failureMessageIndex = (failureMessageIndex + 1) % failureMessages.length;
}

function displaySuccessMessage() {
  document.getElementById("failureMessage").textContent = "Success! Redirecting...";
  let countdown = 5; // 5-second countdown
  const countdownElement = document.getElementById("countdown");
  const countdownInterval = setInterval(() => {
    countdownElement.textContent = `Redirecting in ${countdown} seconds...`;
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  const password = document.getElementById("passwordInput").value;
  if (password === "comptech2023") {
    displaySuccessMessage(); // Display success message with countdown
    setTimeout(() => {
      window.location.href = "mainpage.html"; // Redirect to index.html after countdown
    }, 5000); // 5 seconds delay before redirection
  } else {
    displayNextFailureMessage(); // Display next failure message
  }
});

