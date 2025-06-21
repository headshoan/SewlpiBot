const channelList = document.getElementById("channelList");
const refreshBtn = document.getElementById("refreshBtn");
const filter = document.getElementById("filter");

// Simulierte Channels
let channels = [
  { id: 1, name: "general", type: "text", active: true },
  { id: 2, name: "music", type: "voice", active: false },
  { id: 3, name: "📢 announcements", type: "text", active: true },
  { id: 4, name: "Mods Only", type: "category", active: false },
  { id: 5, name: "Chill Talk", type: "voice", active: true },
];

function renderChannels() {
  channelList.innerHTML = "";
  const selected = filter.value;
  const filtered = selected === "all" ? channels : channels.filter(c => c.type === selected);

  filtered.forEach(channel => {
    const card = document.createElement("div");
    card.className = "channel-card";

    const icon = channel.type === "text" ? "💬" : channel.type === "voice" ? "🎤" : "📂";

    card.innerHTML = `
      <div class="left">
        <i>${icon}</i>
        <div>${channel.name}</div>
      </div>
      <div class="right">
        <input type="checkbox" ${channel.active ? "checked" : ""} onchange="toggleChannel(${channel.id})" />
      </div>
    `;
    channelList.appendChild(card);
  });
}

function toggleChannel(id) {
  const channel = channels.find(c => c.id === id);
  if (channel) channel.active = !channel.active;
}

refreshBtn.onclick = () => {
  // Simuliert neue Channels
  channels.push({ id: Date.now(), name: "new-channel-" + Date.now(), type: "text", active: false });
  renderChannels();
};

filter.onchange = renderChannels;

renderChannels();
