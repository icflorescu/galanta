<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-palette"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><path
    d="M12 21a9 9 0 1 1 0-18 9 8 0 0 1 9 8 4.5 4 0 0 1-4.5 4H14a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21"
  /><circle cx="7.5" cy="10.5" r=".5" fill="currentColor" /><circle
    cx="12"
    cy="7.5"
    r=".5"
    fill="currentColor"
  /><circle cx="16.5" cy="10.5" r=".5" fill="currentColor" /></svg
>
