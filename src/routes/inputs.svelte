<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Group from '$lib/Group.svelte';
  import Input from '$lib/Input.svelte';
</script>

<h1>Inputs</h1>

<div class="form">
  <Group>
    <Input label="First name" placeholder="John" squared="right" required />
    <Input label="Last name" placeholder="Snow" squared="left" />
  </Group>
  <Input label="Email address" placeholder="me@gmail.com" />
  <Button>Submit</Button>
  <div style:grid-column="1 / span 3">
    <Input label="Search" placeholder="Search for items..." rounded disabled />
  </div>
</div>

<style>
  .form {
    gap: var(--gal-spacing);
    display: grid;
    align-items: flex-end;
    grid-template-columns: 5fr 3fr 100px;
  }
</style>
