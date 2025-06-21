// Simulierte Daten (später von API)
const servers = [
  { name: "CoolServer", status: "online", latency: 42, message: "✅ OK" },
  { name: "GamingCrew", status: "maintenance", latency: "-", message: "🛠 Scheduled" },
  { name: "ChillZone", status: "offline", latency: null, message: "❌ Bot wurde entfernt" },
  { name: "SpeedRun Squad", status: "laggy", latency: 330, message: "⚠️ Hohe Latenz" },
];

const tableBody = document.getElementById("server-table-body");
const serverCount = document.getElementById("server-count");
const issuesCount = document.getElementById("issues-count");
const maintenanceCount = document.getElementById("maintenance-count");

// Einträge erzeugen
servers.forEach(server => {
  const row = document.createElement("tr");

  const statusColor = {
    online: "lime",
    laggy: "orange",
    maintenance: "gold",
    offline: "red"
  };

  row.innerHTML = `
    <td>${server.name}</td>
    <td style="color: ${statusColor[server.status]}">${server.status.toUpperCase()}</td>
    <td>${server.latency !== null ? server.latency + " ms" : "-"}</td>
    <td>${server.message}</td>
  `;

  tableBody.appendChild(row);
});

// Zähler aktualisieren
serverCount.textContent = servers.length;
issuesCount.textContent = servers.filter(s => s.status === "laggy" || s.status === "offline").length;
maintenanceCount.textContent = servers.filter(s => s.status === "maintenance").length;
