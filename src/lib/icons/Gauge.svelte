<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-gauge"
  width={size}
  height={size}
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><circle cx="12" cy="12" r="9" /><circle
    cx="12"
    cy="12"
    r="1"
  /><path d="M13.41 10.59 16 8m-9 4a5 5 0 0 1 5-5" /></svg
>
