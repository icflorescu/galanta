<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-cone"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><ellipse
    transform="matrix(1 0 0 -1 0 34)"
    cx="12"
    cy="17"
    rx="7"
    ry="3"
  /><path d="M19 17v-.5L12 4 5 16.5v.5" /></svg
>
