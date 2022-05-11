<script lang="ts">
  import Button from '$lib/Button.svelte';
  import '$lib/normalize.css';
  import Viewport from '$lib/Viewport.svelte';

  let theme: 'light' | 'dark' = 'light';
</script>

<Viewport
  fullHeight
  themes={[
    { name: 'light' },
    {
      name: 'dark',
      color: { background: '#282C34', text: '#ced4da' }
      // color: { background: '#211720', text: 'yellow' }
    }
  ]}
  currentTheme={theme}
>
  <header>
    <nav class="header-content">
      <ul>
        <li><a href="/">Buttons</a></li>
        <li><a href="/icons">Icons</a></li>
      </ul>
      <Button on:click={() => (theme = theme === 'light' ? 'dark' : 'light')}>Change theme</Button>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</Viewport>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    display: flex;
    height: 50px;
    width: 100%;
    background: hsla(
      var(--gal-color-background-h),
      var(--gal-color-background-s),
      var(--gal-color-background-l),
      0.75
    );
    box-shadow: 0 1px 2px rgba(black, 0.25);
    backdrop-filter: blur(3px);
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    padding: 0;
    display: flex;
  }

  li {
    display: inline;
    &:not(:first-child)::before {
      content: '•';
      margin: 0 10px;
    }
  }

  main {
    margin-top: 80px;
  }

  main,
  nav {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 960px;
  }
</style>
