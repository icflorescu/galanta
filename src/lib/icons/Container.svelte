<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-container"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><path
    d="M20 4v.01M20 20v.01M20 16v.01M20 12v.01M20 8v.01"
  /><rect x="8" y="4" width="8" height="16" rx="1" /><path
    d="M4 4v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01"
  /></svg
>
