<script>
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let currentColor = getRandomColor();

  function newColor() {
    currentColor = getRandomColor();
  }
</script>

<style>
  main {
    background-color: var(--currentColor);
    text-align: center;
  }
  img {
    height: 200px;
  }
  button {
    font-size: 1em;
  }
</style>

<main style="--currentColor: {currentColor}">
  <img
    src="https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Disco-Ball-PNG-Transparent-Image.png"
    alt="Disco ball"
    on:click={newColor} />
  <br />
  <button on:click={newColor}>New Color!</button>
</main>
