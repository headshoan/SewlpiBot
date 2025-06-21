const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");

loginTab.addEventListener("click", () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
});

registerTab.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
});

// Optional: Handle form submissions (simulate)
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Login mit Discord würde jetzt ausgelöst werden.");
});

registerForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Account registriert (nur Frontend).");
});
