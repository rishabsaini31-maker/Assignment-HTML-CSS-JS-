const addButtons = document.querySelectorAll(".add");
const countText = document.getElementById("count");
const totalText = document.getElementById("total");
const resetBtn = document.getElementById("reset");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginMsg = document.getElementById("loginMsg");
const signupMsg = document.getElementById("signupMsg");

let itemCount = 0;
let itemTotal = 0;

if (addButtons.length && countText && totalText && resetBtn) {
  addButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const price = Number(btn.dataset.price);
      itemCount += 1;
      itemTotal += price;

      countText.textContent = String(itemCount);
      totalText.textContent = String(itemTotal);
    });
  });

  resetBtn.addEventListener("click", function () {
    itemCount = 0;
    itemTotal = 0;
    countText.textContent = "0";
    totalText.textContent = "0";
  });
}

if (loginForm && loginMsg) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginMsg.textContent = "Login successful (prototype message).";
    loginForm.reset();
  });
}

if (signupForm && signupMsg) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    signupMsg.textContent = "Sign up successful (prototype message).";
    signupForm.reset();
  });
}
