<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function updateColor() {
    dispatch("updateColor");
  }
</script>

<style>
  img {
    width: 400px;
    max-width: 95%;
    display: block;
    margin: 16px auto;
  }
  p {
    text-align: center;
  }
  button {
    padding: 0.5em 1em;
    font-size: 1.5em;
  }
</style>

<img src="/img/disco-ball.png" alt="Disco ball" on:click={updateColor} />
<p>
  <button on:click={updateColor}>New Color!</button>
</p>
