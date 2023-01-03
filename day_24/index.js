const player = document.getElementById("player");

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;

  // Add selected css on button
  const buttons = document.querySelectorAll("button");
  buttons.forEach((b) => b.classList.remove("selected"));
  for (const button of buttons) {
    button.addEventListener(
      "click",
      function handleClick() {
        button.classList.add("selected");
      },
      { passive: true }
    );
  }
}
