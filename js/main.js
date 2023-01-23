document.addEventListener("DOMContentLoaded", (event) => {
  const btnAllPlay = document.querySelectorAll(".sound-effect")
  btnAllPlay.forEach(element => {
    element.addEventListener('click', function(e) {
      playAudio(e.target)
    })
  });
});

function playAudio(element) {
  var x = document.getElementById(element.dataset.audio)
  x.play()
} 