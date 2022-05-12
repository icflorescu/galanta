<script lang="ts">
  import Button from '$lib/Button.svelte';
  import '$lib/galanta.css';
  import Group from '$lib/Group.svelte';
  import MoodNervous from '$lib/icons/MoodNervous.svelte';
  import Moon from '$lib/icons/Moon.svelte';
  import Sun from '$lib/icons/Sun.svelte';
  import ThemeProvider from '$lib/ThemeProvider.svelte';

  let theme: 'light' | 'dark' = 'light';
  let flashThemeTimeout: number | undefined;

  const handleFlashThemeClick = () => {
    if (flashThemeTimeout) {
      clearInterval(flashThemeTimeout);
      flashThemeTimeout = undefined;
    } else {
      flashThemeTimeout = setInterval(() => {
        theme = theme === 'dark' ? 'light' : 'dark';
      }, 50) as unknown as number;
    }
  };
</script>

<ThemeProvider
  themes={[
    { name: 'light' },
    {
      name: 'dark',
      color: { background: '#282C34', text: '#ced4da' }
    }
  ]}
  currentTheme={theme}
/>

<header>
  <nav class="header-content">
    <ul>
      <li><a href="/">Buttons</a></li>
      <li><a href="/icons">Icons</a></li>
      <li><a href="/inputs">Inputs</a></li>
    </ul>
    <Group gap={1}>
      <Button variant={'outline'} on:click={() => (theme = theme === 'light' ? 'dark' : 'light')}>
        <svelte:fragment slot="prefix">
          {#if theme === 'light'}
            <Moon />
          {:else}
            <Sun />
          {/if}
        </svelte:fragment>
        Change theme
      </Button>
      <Button variant="danger" on:click={handleFlashThemeClick}>
        <MoodNervous slot="prefix" />
        Flash theme
      </Button>
    </Group>
  </nav>
</header>
<main>
  <slot />
</main>

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
      0.8
    );
    box-shadow: 0 1px 2px rgba(black, 0.25);
    backdrop-filter: blur(5px);
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
