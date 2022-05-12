<script lang="ts">
  export let gap: number | undefined = undefined;
</script>

<div style:gap={gap && `calc(var(--gal-spacing) * ${gap})`}>
  <slot />
</div>

<style>
  div {
    display: inline-flex;
  }
</style>
