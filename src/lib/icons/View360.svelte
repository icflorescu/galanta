<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-view-360"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><circle cx="12" cy="12" r="9" /><ellipse
    cx="12"
    cy="12"
    rx="4"
    ry="9"
  /><ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(90 12 12)" /></svg
>
