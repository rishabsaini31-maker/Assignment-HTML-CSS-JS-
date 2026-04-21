const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginMsg = document.getElementById("loginMsg");
const signupMsg = document.getElementById("signupMsg");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  loginMsg.textContent = "Login successful (demo message).";
  loginForm.reset();
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  signupMsg.textContent = "Sign up successful (demo message).";
  signupForm.reset();
});
