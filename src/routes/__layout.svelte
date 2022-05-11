<script lang="ts">
  import Button from '$lib/Button.svelte';
  import NormalizeCss from '$lib/NormalizeCSS.svelte';
  import ThemeProvider from '$lib/ThemeProvider.svelte';
  import Viewport from '$lib/Viewport.svelte';

  let theme: 'light' | 'dark' = 'light';
</script>

<NormalizeCss>
  <ThemeProvider
    themes={[
      {
        name: 'light'
      },
      {
        name: 'dark',
        color: { background: '#282C34', text: '#ced4da' }
        // color: { background: '#211720', text: 'yellow' }
      }
    ]}
    currentThemeName={theme}
  >
    <Viewport full>
      <header>
        <nav>
          <li><a href="/">Buttons</a></li>
          <li><a href="/icons">Icons</a></li>
        </nav>
        <Button on:click={() => (theme = theme === 'light' ? 'dark' : 'light')}>Change theme</Button
        >
      </header>
      <main>
        <slot />
      </main>
    </Viewport>
  </ThemeProvider>
</NormalizeCss>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    display: flex;
    height: 50px;
    box-shadow: 0 1px 2px rgba(black, 0.5);
  }

  main {
    margin: 0 auto;
    max-width: 960px;
  }
</style>
