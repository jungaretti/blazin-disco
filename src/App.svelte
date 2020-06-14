<script>
  const possible = ["#fbda0e", "#f65c83", "#0467ac", "#a35887", "#cd9fc5", "#497260"];
  let currentIndex = 0;
  $: currentColor = possible[currentIndex % possible.length];

  function newColor() {
    currentIndex++;
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
    src="https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Disco-Ball-PNG-Transparent-Image.png"
    alt="Disco ball"
    on:click={newColor} />
  <br />
  <button on:click={newColor}>New Color!</button>
</main>
