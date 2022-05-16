<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Group from '$lib/Group.svelte';
  import Search from '$lib/icons/Search.svelte';
  import User from '$lib/icons/User.svelte';
  import Input from '$lib/Input.svelte';
</script>

<h1>Inputs</h1>

<form on:submit|preventDefault={console.log}>
  <Group>
    <Input label="First name" placeholder="John" squared="right" required />
    <Button icon squared="left" variant="primary" mt="label-height">
      <User />
    </Button>
  </Group>
  <Input
    label="Last name"
    placeholder="Snow"
    warning="This field has a warning, which can actually be a longer story"
  >
    <User slot="prefix" />
  </Input>
  <Input
    type="email"
    label="Email address"
    placeholder="me@gmail.com"
    required
    error="This field has an error"
  />
  <Button mt="label-height">Submit</Button>
  <div style:grid-column="1 / span 4">
    <Input label="Disabled search" placeholder="Search for items..." rounded disabled />
  </div>
  <div style:grid-column="1 / span 4">
    <Group>
      <Input label="Search" placeholder="Search for items..." rounded squared="right" />
      <Button icon rounded squared="left" mt="label-height">
        <Search />
      </Button>
    </Group>
  </div>
</form>

<style>
  form {
    gap: var(--gal-spacing);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) 100px;
  }
</style>
