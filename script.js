const episodes = [
  // 1 серия
  { type: "drive", url: "https://drive.google.com/file/d/1HpvDwHbPywE7TqlN5bJsdFcTQYKNEts8/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1IFzG7hnPQb65tf7FuJp78O9ikP524W4s/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/15mryQlukqIfVpI6q44Db6sxkv9Y8KF6C/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1wi0qwrkwVAThnQaNcG-b2CV6xrZJ3TxU/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1aFnCwry2obcchcbH_1yDrXvTgLBlzWND/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/12Tgl1RFWByyzRHR4M2-msYFVeISREQvD/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1qCqkMuFg2QMqOtq-ZBg6bUuLN--CLAVl/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1cPjhav1743OtyziItBih5dEfxyGZm6ME/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1oabTAtlK5PfVuDswLSHmWDpjGKYUDdqY/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/19-SUIVjrSFO86etp5EiaZptaRzOr-k9K/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/11LMNCHGauEJ9B5xGx390fEaqQt4W6HB2/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1ZTHwKxWixIzJFyaizwyIVt2QTIazNRVe/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1wnw8VpdLCqaqVF4DXoomPX56mTpg1_CF/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1HoxInelW8coWywAe02VsVOrNI9hE_is8/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1EmPfwc92bGWgs-0_t2FfG8pVuYONcqHt/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1uIV0KKOHcpTHl55x15QdSnl7zlXZZsFW/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/11ndAbbOaIt1Hl3C4DDFEJq6boBOJaw_Y/preview" },
  { type: "drive", url: "https://drive.google.com/file/d/1PorD9Q9h6HqZaek1d90QWf9oMB7RhZhN/preview" },

  // ✅ 19 серия — Яндекс Диск
  { type: "drive", url: "https://drive.google.com/file/d/1DqwpWcluF7QlNUtVztxNTGaUG5vGu3bq/preview" }
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
      frame.src = ep.url;
      player.classList.remove("hidden");
    };

    episodesDiv.appendChild(btn);
  });
}
