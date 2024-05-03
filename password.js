const failureMessages = [
  "Oops! You entered the wrong password.",
  "Access denied! Try again with the correct password.",
  "Sorry, that's not the right password. Give it another shot!",
  "Okey 1 attempt left",
  "Just kidding, Keep going!",
  "Try the developers name",
  "Or maybe he's crush's name",
  "That might be not he's crush name",
  "It starts with the letter P!",
  "Naaah Just kidding, it's not the password.",
  "This is what it feels like when you play Geometry Dash :)",
  "Focus",
  "Try Harder!",
  "Faster!!! I mean, just try until you succeed!",
  "Okey Just try he's crush's name again",
  "Wrong Crush Name!",
  "Or May be she's not really he's crush. have any Idea?",
  "Still not working.",
  "Hmmm Have you tried your course and year?",
  "No still not._.",
  "There some clues somewhere in the developers Facebook account, maybe you should check it out.",
  "Giving up is not a key, It's just a word with action of failures.",
  "Okey and 3",
  "2",
  "1",
  "The Password Is (comptech2023) HAHAHA",
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
