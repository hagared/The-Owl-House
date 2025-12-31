const episodes = [
  // Google Drive видео
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239038&hash=62c3faaa88d74a78&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239019&hash=3c414f1d2f4f8b50&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239020&hash=bb094a37f531b670&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239021&hash=09a03fa28cc27fd1&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239022&hash=055b7991a53a700c&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239040&hash=99230916bebf970e&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239024&hash=8e45f419ca56617f&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239025&hash=7d6bc6b9134cd447&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239026&hash=ba3ce4dba4db1d47&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239027&hash=e20e07778c6bbe11&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239028&hash=abfc3e14328c791e&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239029&hash=8bc87ea0d8d91b38&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239041&hash=67d10abcf86e1b6a&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239042&hash=7b4f46262c48a365&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239032&hash=f6f8baed9362bb47&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239033&hash=28138c13be86590f&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239034&hash=b688adb1382d3879&hd=3" },
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239043&hash=c704e56e6ecc00c8&hd=3" },

  // ВК видео
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239017&hash=9e866861d1aa2112&hd=3" }
];

function goToSeasons() {
  document.getElementById("step-1").classList.add("hidden");
  document.getElementById("step-2").classList.remove("hidden");
}

function goToEpisodes() {
  document.getElementById("step-2").classList.add("hidden");
  document.getElementById("step-3").classList.remove("hidden");

  const episodesDiv = document.getElementById("episodes");
  const player = document.getElementById("player");
  const frame = document.getElementById("videoFrame");

  episodesDiv.innerHTML = "";
  frame.src = "";
  player.classList.add("hidden");

  episodes.forEach((ep, index) => {
    const btn = document.createElement("button");
    btn.className = "btn outline";
    btn.textContent = `${index + 1} серия`;

    btn.onclick = () => {
      frame.src = ep.url;       // вставляем ссылку из массива
      frame.width = "1280";     // размер iframe для всех видео
      frame.height = "720";
      frame.setAttribute("allowfullscreen", "");
      player.classList.remove("hidden");
    };

    episodesDiv.appendChild(btn);
  });
}
