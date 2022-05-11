<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-zoom-pan"
  width={size}
  height={size}
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><circle cx="12" cy="12" r="3" /><path
    d="m17 17-2.5-2.5M10 5l2-2 2 2m5 5 2 2-2 2M5 10l-2 2 2 2m5 5 2 2 2-2"
  /></svg
>
