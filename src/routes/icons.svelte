<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Login from '$lib/icons/Login.svelte';
  import NormalizeCSS from '$lib/NormalizeCSS.svelte';
  import ThemeProvider from '$lib/ThemeProvider.svelte';
  import Viewport from '$lib/Viewport.svelte';
</script>

<NormalizeCSS>
  <ThemeProvider>
    <Viewport full>
      <Button variant="primary">
        <Login slot="prefix" />
        Login
      </Button>
    </Viewport>
  </ThemeProvider>
</NormalizeCSS>
