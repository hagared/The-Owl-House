const episodes = [
  // Google Drive видео
  { type: "vk", url: "https://vkvideo.ru/video_ext.php?oid=-229058224&id=456239038&hash=62c3faaa88d74a78&hd=3" },
  { type: "vk", url: "https://drive.google.com/file/d/1IFzG7hnPQb65tf7FuJp78O9ikP524W4s/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/15mryQlukqIfVpI6q44Db6sxkv9Y8KF6C/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1wi0qwrkwVAThnQaNcG-b2CV6xrZJ3TxU/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1aFnCwry2obcchcbH_1yDrXvTgLBlzWND/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/12Tgl1RFWByyzRHR4M2-msYFVeISREQvD/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1qCqkMuFg2QMqOtq-ZBg6bUuLN--CLAVl/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1cPjhav1743OtyziItBih5dEfxyGZm6ME/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1oabTAtlK5PfVuDswLSHmWDpjGKYUDdqY/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/19-SUIVjrSFO86etp5EiaZptaRzOr-k9K/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/11LMNCHGauEJ9B5xGx390fEaqQt4W6HB2/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1ZTHwKxWixIzJFyaizwyIVt2QTIazNRVe/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1wnw8VpdLCqaqVF4DXoomPX56mTpg1_CF/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1HoxInelW8coWywAe02VsVOrNI9hE_is8/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1EmPfwc92bGWgs-0_t2FfG8pVuYONcqHt/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1uIV0KKOHcpTHl55x15QdSnl7zlXZZsFW/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/11ndAbbOaIt1Hl3C4DDFEJq6boBOJaw_Y/preview" },
  { type: "vk", url: "https://drive.google.com/file/d/1PorD9Q9h6HqZaek1d90QWf9oMB7RhZhN/preview" },

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
