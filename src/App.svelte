<script>
  import Disco from "./Disco.svelte";

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let currentColor = getRandomColor();

  function handeUpdateColor() {
    currentColor = getRandomColor();
  }
</script>

<style>
  main {
    background-color: var(--currentColor);
    text-align: center;
  }
</style>

<main style="--currentColor: {currentColor}">
  <Disco on:updateColor={handeUpdateColor} />
</main>
