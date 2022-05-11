<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-wall"
  width={size}
  height={size}
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><rect x="4" y="4" width="16" height="16" rx="2" /><path
    d="M4 8h16m0 4H4m0 4h16M9 4v4m5 0v4m-6 0v4m8-4v4m-5 0v4"
  /></svg
>
