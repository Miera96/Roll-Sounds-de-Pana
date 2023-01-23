document.addEventListener("DOMContentLoaded", (event) => {
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
