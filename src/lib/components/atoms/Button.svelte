<script>
  export let label
  export let handleClick
</script>

<button class="Button" on:click={handleClick}>{label}</button>

<style lang="scss">

  .Button {
    background: $primary-colour;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 0.5rem 1rem;

    &:hover {
      cursor: pointer;
      background-color: black;
    }
  }
</style>