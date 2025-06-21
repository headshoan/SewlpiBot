const languageSelect = document.getElementById("languageSelect");
const restartBtn = document.getElementById("restartBtn");
const restartStatus = document.getElementById("restartStatus");
const notifyToggle = document.getElementById("notifyToggle");

// Sprache speichern & laden (localStorage)
languageSelect.value = localStorage.getItem("botLanguage") || "de";

languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  localStorage.setItem("botLanguage", lang);
  alert(`Sprache geändert zu: ${lang.toUpperCase()}`);
  // Hier kannst du später i18n einbauen
});

// Bot Neustart simulieren
restartBtn.addEventListener("click", () => {
  restartStatus.textContent = "Starte Bot neu...";
  restartBtn.disabled = true;

  // Simulierte Verzögerung
  setTimeout(() => {
    restartStatus.textContent = "Bot erfolgreich neu gestartet ✅";
    restartBtn.disabled = false;
  }, 2500);
});

// Benachrichtigungen toggle speichern
notifyToggle.checked = localStorage.getItem("notifyEnabled") !== "false";

notifyToggle.addEventListener("change", () => {
  localStorage.setItem("notifyEnabled", notifyToggle.checked);
});
