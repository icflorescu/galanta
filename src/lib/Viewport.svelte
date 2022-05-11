<script lang="ts">
  export let full = false;
</script>

<div class:full>
  <slot />
</div>

<style>
  div {
    font-family: var(--gal-font-family-default);
    font-size: var(--gal-font-size);
    color: var(--gal-color-text);
    background: var(--gal-color-background);
  }

  .full {
    min-height: 100vh;
    overflow: auto;
  }
</style>
