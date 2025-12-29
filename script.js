const episodesLinks = [
  "https://drive.google.com/file/d/1HpvDwHbPywE7TqlN5bJsdFcTQYKNEts8/preview",
  "https://drive.google.com/file/d/1IFzG7hnPQb65tf7FuJp78O9ikP524W4s/preview",
  "https://drive.google.com/file/d/15mryQlukqIfVpI6q44Db6sxkv9Y8KF6C/preview",
  "https://drive.google.com/file/d/1wi0qwrkwVAThnQaNcG-b2CV6xrZJ3TxU/preview",
  "https://drive.google.com/file/d/1aFnCwry2obcchcbH_1yDrXvTgLBlzWND/preview",
  "https://drive.google.com/file/d/12Tgl1RFWByyzRHR4M2-msYFVeISREQvD/preview",
  "https://drive.google.com/file/d/1qCqkMuFg2QMqOtq-ZBg6bUuLN--CLAVl/preview",
  "https://drive.google.com/file/d/1cPjhav1743OtyziItBih5dEfxyGZm6ME/preview",
  "https://drive.google.com/file/d/1oabTAtlK5PfVuDswLSHmWDpjGKYUDdqY/preview",
  "https://drive.google.com/file/d/19-SUIVjrSFO86etp5EiaZptaRzOr-k9K/preview",
  "https://drive.google.com/file/d/11LMNCHGauEJ9B5xGx390fEaqQt4W6HB2/preview",
  "https://drive.google.com/file/d/1ZTHwKxWixIzJFyaizwyIVt2QTIazNRVe/preview",
  "https://drive.google.com/file/d/1wnw8VpdLCqaqVF4DXoomPX56mTpg1_CF/preview",
  "https://drive.google.com/file/d/1HoxInelW8coWywAe02VsVOrNI9hE_is8/preview",
  "https://drive.google.com/file/d/1EmPfwc92bGWgs-0_t2FfG8pVuYONcqHt/preview",
  "https://drive.google.com/file/d/1uIV0KKOHcpTHl55x15QdSnl7zlXZZsFW/preview",
  "https://drive.google.com/file/d/11ndAbbOaIt1Hl3C4DDFEJq6boBOJaw_Y/preview",
  "https://drive.google.com/file/d/1PorD9Q9h6HqZaek1d90QWf9oMB7RhZhN/preview",
  "https://drive.google.com/file/d/1Vr56lXA2ljh8zsWew2oSPzrZtURoJbzA/preview"
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

  episodesLinks.forEach((link, index) => {
    const btn = document.createElement("button");
    btn.className = "btn outline";
    btn.textContent = `${index + 1} серия`;

    btn.onclick = () => {
      frame.src = link;
      player.classList.remove("hidden");
    };

    episodesDiv.appendChild(btn);
  });
}
