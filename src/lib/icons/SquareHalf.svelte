<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-square-half"
  width={size}
  height={size}
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><path d="M12 4v16" /><rect
    x="4"
    y="4"
    width="16"
    height="16"
    rx="2"
  /><path d="m12 13 7.5-7.5M12 18l8-8m-5 10 5-5m-8-7 4-4" /></svg
>
