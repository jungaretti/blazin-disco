<script>
  export let currentColor;
  let colorIndex = 0;

  function newColor() {
    const possible = ["#FB6107", "#F3DE2C", "#7CB518"];
    currentColor = possible[++colorIndex % 3];
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
</style>

<main style="--currentColor: {currentColor}">
  <img
    src="http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Disco-Ball-PNG-Transparent-Image.png"
    alt="Disco ball"
    on:click={newColor} />
  <br />
  <button on:click={newColor}>New Color!</button>
</main>
