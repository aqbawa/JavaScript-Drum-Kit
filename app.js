// Main function to play the sound on keydown event
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  // to rewind the sound if key presses repeatedly
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};
// function to remove the playing class after the transition is finished
const removeTransition = (e) => {
  if (e.propertyName !== "transform") {
    return;
  }
  e.target.classList.remove("playing");
};
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
// Main event listener
window.addEventListener("keydown", playSound);
