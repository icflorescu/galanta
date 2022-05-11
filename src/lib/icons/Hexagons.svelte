<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-hexagons"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><path
    d="M4 18v-5l4-2 4 2v5l-4 2zm4-7V6l4-2 4 2v5m-4 2 4-2 4 2v5l-4 2-4-2"
  /></svg
>
