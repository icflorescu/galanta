<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-polygon"
  width={size}
  height={size}
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><circle cx="12" cy="5" r="2" /><circle
    cx="19"
    cy="8"
    r="2"
  /><circle cx="5" cy="11" r="2" /><circle cx="15" cy="19" r="2" /><path
    d="m6.5 9.5 3.5-3m4-1L17 7m1.5 3L16 17m-2.5.5-7-5"
  /></svg
>
