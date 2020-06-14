<script>
  import Disco from "./Disco.svelte";
  import { db } from "./firebase";

  let currentColor = "black";

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  db.collection("rooms")
    .doc("RLvEctBd28CcMqYUETQy")
    .onSnapshot(doc => {
      currentColor = doc.data()["color"];
    });

  function handeUpdateColor() {
    db.collection("rooms")
      .doc("RLvEctBd28CcMqYUETQy")
      .update({ color: getRandomColor() });
  }
</script>

<style>
  main {
    background-color: var(--currentColor);
    transition: background-color 0.5s ease;
    text-align: center;
  }
</style>

<main style="--currentColor: {currentColor}">
  <Disco on:updateColor={handeUpdateColor} />
</main>
