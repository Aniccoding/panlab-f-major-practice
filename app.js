"use strict";

// Keep the native audio controls; playing one track pauses the others.
document.addEventListener("play", (event) => {
  if (!(event.target instanceof HTMLAudioElement)) return;
  document.querySelectorAll("audio").forEach((player) => {
    if (player !== event.target) player.pause();
  });
}, true);
