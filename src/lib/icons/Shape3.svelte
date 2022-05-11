<script lang="ts">
  export let size = 24;
  export let color = 'currentColor';
  export let strokeWidth = 2;
</script>

<svg
  class="icon icon-shape-3"
  width={size}
  height={size}
  stroke-width={strokeWidth}
  stroke={color}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  ><path d="M0 0h24v24H0z" stroke="none" /><circle cx="5" cy="5" r="2" /><circle
    cx="19"
    cy="19"
    r="2"
  /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><path
    d="M7 5h10M5 7v10M19 7v10"
  /></svg
>
