<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function updateColor() {
    dispatch("updateColor");
  }
</script>

<style>
  div {
    text-align: center;
  }
  img {
    width: 300px;
    max-width: 95%;
  }
  button {
    font-size: 1em;
  }
</style>

<div>
  <img
    src="https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Disco-Ball-PNG-Transparent-Image.png"
    alt="Disco ball"
    on:click={updateColor} />
  <br />
  <button on:click={updateColor}>New Color!</button>
</div>
