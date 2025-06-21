// ----------- LOGIN-CHECK -----------

const loggedIn = localStorage.getItem("isLoggedIn") === "true";
const currentPath = window.location.pathname;
const publicPages = ["/index.html", "/login.html", "/register.html", "/"];

// Ohne Login weiterleiten
if (!loggedIn && !publicPages.some(p => currentPath.endsWith(p))) {
  window.location.href = "/index.html"; // Login-Seite
}

// ----------- LOGIN-FORM -----------

function showNotify(msg, error = false) {
  let notify = document.getElementById("notify");
  if (!notify) {
    notify = document.createElement("div");
    notify.id = "notify";
    document.body.appendChild(notify);
  }
  notify.textContent = msg;
  notify.style.backgroundColor = error ? "#f44336" : "#00c853";
  notify.classList.add("show");
  setTimeout(() => {
    notify.classList.remove("show");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginArea = document.getElementById("loginArea");
  const userArea = document.getElementById("userArea");
  const logoutBtn = document.getElementById("logoutBtn");

  // Falls schon eingeloggt, Bereich anzeigen
  if (loggedIn) {
    if (loginArea) loginArea.style.display = "none";
    if (userArea) userArea.style.display = "block";
  }

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = loginForm.elements["username"].value.trim();
      const password = loginForm.elements["password"].value.trim();
      if (username && password) {
        localStorage.setItem("isLoggedIn", "true");
        showNotify("Login erfolgreich!");
        if (loginArea) loginArea.style.display = "none";
        if (userArea) userArea.style.display = "block";
      } else {
        showNotify("Bitte Benutzername und Passwort eingeben!", true);
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      showNotify("Logout erfolgreich.");
      if (loginArea) loginArea.style.display = "block";
      if (userArea) userArea.style.display = "none";
    });
  }
});

// ----------- COOKIE BANNER -----------

const cookieBanner = document.getElementById("cookieBanner");
const cookieConsent = localStorage.getItem("cookieConsent");

function hideCookieBanner() {
  if (cookieBanner) cookieBanner.style.display = "none";
}

if (cookieConsent === "accepted" || cookieConsent === "declined") {
  hideCookieBanner();
}

if (cookieBanner) {
  document.getElementById("acceptCookies").onclick = () => {
    localStorage.setItem("cookieConsent", "accepted");
    hideCookieBanner();
    showNotify("Cookies akzeptiert ✅");
  };

  document.getElementById("declineCookies").onclick = () => {
    localStorage.setItem("cookieConsent", "declined");
    hideCookieBanner();
    showNotify("Cookies abgelehnt ❌");
  };
}
