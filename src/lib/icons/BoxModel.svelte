<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-box-model"
  width={size}
  height={size}
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><path d="M8 8h8v8H8z" /><rect
    x="4"
    y="4"
    width="16"
    height="16"
    rx="2"
  /><path d="m16 16 3.3 3.3M16 8l3.3-3.3M8 8 4.7 4.7M8 16l-3.3 3.3" /></svg
>
