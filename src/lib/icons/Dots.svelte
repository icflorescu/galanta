<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-dots"
  width={size}
  height={size}
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><circle cx="5" cy="12" r="1" /><circle
    cx="12"
    cy="12"
    r="1"
  /><circle cx="19" cy="12" r="1" /></svg
>
