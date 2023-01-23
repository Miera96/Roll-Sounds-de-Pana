document.addEventListener("DOMContentLoaded", (event) => {
  orientationLock();
  const btnAllPlay = document.querySelectorAll(".sound-effect")
  btnAllPlay.forEach(element => {
    element.addEventListener('click', function(e) {
      playAudio(e.target)
    })
  });
});

function playAudio(element) {
  document.getElementById(element.dataset.audio).play()
}

const orientationLock = () => {
  if (screen.orientation.type.startsWith("portrait")) {
    screen.orientation.lock("landscape-primary")
        .then(() => console.log("Orientation locked"))
        .catch((err) => console.error(`Error locking orientation: ${err.message}`));
  }
}
