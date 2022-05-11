<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Login from '$lib/icons/Login.svelte';
</script>

<Button variant="primary">
  <Login slot="prefix" />
  Login
</Button>
