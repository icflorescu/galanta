<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Group from '$lib/Group.svelte';
  import Search from '$lib/icons/Search.svelte';
  import User from '$lib/icons/User.svelte';
  import Input from '$lib/Input.svelte';
</script>

<h1>Inputs</h1>

<form>
  <Group alignBottom>
    <Input label="First name" placeholder="John" squared="right" required />
    <Button icon squared="left" variant="primary">
      <User />
    </Button>
  </Group>
  <Input label="Last name" placeholder="Snow" />
  <Input label="Email address" placeholder="me@gmail.com" required />
  <Button>Submit</Button>
  <div style:grid-column="1 / span 4">
    <Input label="Disabled search" placeholder="Search for items..." rounded disabled />
  </div>
  <div style:grid-column="1 / span 4">
    <Group alignBottom>
      <Input label="Search" placeholder="Search for items..." rounded squared="right" />
      <Button icon rounded squared="left">
        <Search />
      </Button>
    </Group>
  </div>
</form>

<style>
  form {
    gap: var(--gal-spacing);
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr 1fr 1fr 100px;
  }
</style>
