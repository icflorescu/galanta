<script lang="ts">
  export let alignBottom = false;
  export let gap: number | undefined = undefined;
</script>

<div class:alignBottom style:gap={gap && `calc(var(--gal-spacing) * ${gap})`}>
  <slot />
</div>

<style>
  div {
    display: inline-flex;
  }

  .alignBottom {
    align-items: flex-end;
  }
</style>
