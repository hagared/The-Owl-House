const seasons = {
  s1: {
    title: "1 сезон",
    episodes: [] // ты уже сделал VK, сюда не лезем
  },

  s2p1: {
    title: "2 сезон — 1 часть",
    episodes: [
      // 🔽 сюда я потом вставлю 16 ссылок
    ]
  },

  s2p2: {
    title: "2 сезон — 2 часть",
    episodes: []
  },

  s2p3: {
    title: "2 сезон — 3 часть",
    episodes: []
  },

  s3: {
    title: "3 сезон",
    episodes: []
  }
};

function openSeason(key) {
  const season = seasons[key];

  if (!season || season.episodes.length === 0) {
    alert("Скоро будет 👀");
    return;
  }

  document.getElementById("step-2").classList.add("hidden");
  document.getElementById("step-3").classList.remove("hidden");

  document.querySelector("#step-3 h2").textContent = season.title;

  const episodesDiv = document.getElementById("episodes");
  const player = document.getElementById("player");
  const frame = document.getElementById("videoFrame");

  episodesDiv.innerHTML = "";
  frame.src = "";
  player.classList.add("hidden");

  season.episodes.forEach((url, index) => {
    const btn = document.createElement("button");
    btn.className = "btn outline";
    btn.textContent = `${index + 1} серия`;

    btn.onclick = () => {
      frame.src = url;
      player.classList.remove("hidden");
    };

    episodesDiv.appendChild(btn);
  });
}
