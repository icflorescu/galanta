<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Group from '$lib/Group.svelte';
  import ChevronRight from '$lib/icons/ChevronRight.svelte';
  import Heart from '$lib/icons/Heart.svelte';

  let theme: 'light' | 'dark' = 'light';
</script>

<h1>Welcome to GALANTA</h1>
<h2>This is an H2</h2>
<h3>This is an H3</h3>
<Button on:click={() => (theme = theme === 'light' ? 'dark' : 'light')}>Change theme</Button>
<h3>BUTTONS</h3>
<h4>TYPES</h4>
<Button variant="primary" type="submit">Submit</Button>
<Button variant="primary" type="reset">Reset</Button>
<Button variant="primary">Button</Button>
<Button variant="primary" href="https://swapp.ro" target="_blank">Link</Button>
<h4>VARIANTS</h4>
<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button variant="primary" uppercase>Primary</Button>
<Button variant="primary" uppercase disabled>Disabled</Button>
<Button variant="outline">Outline</Button>
<Button variant="outline" disabled>Disabled</Button>
<Button variant="text" uppercase on:click>Text</Button>
<Button variant="text" uppercase disabled>Disabled</Button>
<br />
<br />
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>

<h4>FULL WIDTH, PREFIX, SUFFIX, OVERFLOW</h4>
<div class="full">
  <div style:width="760px">
    <Button variant="primary" fullWidth>
      <Heart slot="prefix" />
      <ChevronRight slot="suffix" />
      Full width with prefix and suffix
    </Button>
  </div>
  <div style:width="200px">
    <Button variant="primary" fullWidth>Full width with overflow</Button>
  </div>
</div>
<h4>GROUP, SQUARED, ROUNDED</h4>
<Group>
  <Button squared="right" uppercase>One</Button>
  <Button squared uppercase>Two</Button>
  <Button squared="left" uppercase>Three</Button>
</Group>
<Button squared="right" variant="primary">Squared right</Button>
<Button squared variant="primary">Squared</Button>
<Button squared="left" variant="primary">Squared left</Button>
<Button rounded squared="left" variant="primary">Rounded right</Button>
<Button rounded variant="primary">Rounded</Button>
<Button rounded squared="right" variant="primary">Rounded left</Button>

<h3>PARAGRAPHS</h3>
<div>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque pariatur fugit quasi
    quaerat, fugiat explicabo porro, ut est esse consequuntur ducimus suscipit harum, sequi autem
    magni fuga aliquid eaque!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque pariatur fugit quasi
    quaerat, fugiat explicabo porro, ut est esse consequuntur ducimus suscipit harum, sequi autem
    magni fuga aliquid eaque!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque pariatur fugit quasi
    quaerat, fugiat explicabo porro, ut est esse consequuntur ducimus suscipit harum, sequi autem
    magni fuga aliquid eaque!
  </p>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta veritatis quas expedita.
    Repellat beatae quis vel est eaque nisi perspiciatis, cumque reprehenderit, eius deserunt sit
    aliquam in officia? Atque temporibus consequatur dolore perspiciatis? Incidunt soluta cum
    explicabo vitae molestias, rerum nihil ab quia eveniet id modi voluptate recusandae nobis ad
    nostrum similique eaque veniam amet sapiente deleniti non atque.
  </p>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus necessitatibus nisi eos totam
    pariatur odio commodi adipisci quia vitae ipsum, sunt voluptas numquam corporis facere error
    dolorum obcaecati reiciendis repudiandae a voluptatum explicabo aliquam tempore voluptatem
    inventore. Ad quibusdam, amet doloremque nemo voluptate nostrum eligendi voluptatem repudiandae,
    facilis illo voluptas facere sapiente voluptatum odit? Quaerat incidunt similique ducimus beatae
    obcaecati dolorem error nam modi deserunt, repellat accusantium provident numquam blanditiis cum
    accusamus eos minus unde culpa, molestiae aliquam distinctio animi facilis voluptas? Velit vitae
    iste sunt nulla, commodi, cumque minima sit quia similique tenetur suscipit, mollitia sapiente
    officia nemo vel.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, adipisci alias fugiat maiores
    ex ab voluptatibus expedita. Voluptas culpa, reiciendis enim obcaecati reprehenderit perferendis
    dolorem facere voluptatem deleniti id sunt accusamus eveniet expedita rem adipisci fugit, nihil,
    deserunt rerum? Necessitatibus exercitationem vel repudiandae, consectetur ipsam aut ad
    voluptatum qui harum repellat, similique repellendus illo dolore ducimus nulla porro soluta
    accusantium voluptas dolorum, veritatis ullam quo. Amet exercitationem officiis voluptatibus non
    adipisci molestias cum ad tempore magni enim, velit obcaecati. Est, delectus! In ipsa culpa sunt
    ad cumque deleniti totam adipisci quaerat quibusdam atque inventore voluptatibus, necessitatibus
    non ex voluptates consequatur quis. Neque iste porro asperiores sit, hic magni aspernatur et ad
    consequatur illum velit ut dolor architecto optio suscipit doloremque quidem explicabo ipsum eum
    exercitationem reiciendis sint voluptas! Modi, quasi eum cumque ipsum neque id incidunt earum
    ipsam dolores ullam eligendi nulla pariatur aut explicabo molestiae iste deserunt dignissimos
    voluptatibus magni, sint quis. Temporibus tenetur alias velit asperiores ea quod exercitationem
    iusto laudantium reprehenderit. Placeat error eaque cupiditate, animi dignissimos veritatis
    nostrum inventore id excepturi architecto unde dolores dolor, nemo vitae dicta repudiandae
    minima ipsum a debitis quod corporis? Nemo similique doloribus sint repellendus neque ducimus
    eum voluptate corporis dolores iste, blanditiis dolor? Voluptatem recusandae dolorem quo velit
    quidem a ad vero molestiae excepturi, magni assumenda dolor quae distinctio animi nulla modi
    doloribus unde quas explicabo quos id odit placeat at? Ut cupiditate facilis in perspiciatis ab
    officia! Voluptates dolorem excepturi doloribus dignissimos at aut voluptate quibusdam sint!
    Reprehenderit, aliquam dicta. Tempore facilis iure magni hic ab magnam aperiam excepturi libero
    commodi ullam esse laborum eaque rerum, quod, temporibus nemo consequuntur voluptates harum
    voluptatum similique. Asperiores consequatur praesentium aliquam assumenda aut. Aperiam
    laboriosam culpa vel, distinctio, delectus assumenda quidem ex, nobis minima quis tenetur.
    Possimus veritatis repudiandae, temporibus voluptatibus ratione asperiores hic reiciendis, fuga
    quasi perferendis error exercitationem sint suscipit. Iusto rerum labore vitae consequatur
    suscipit ut placeat quisquam neque quam quaerat, dolorum distinctio qui id quasi nisi officia!
    Aperiam earum praesentium vel maxime, molestiae reprehenderit odio voluptatum perferendis quasi
    laboriosam rerum dicta eius ad corrupti deleniti, quam temporibus itaque ea quia veniam libero
    quidem dolorem numquam? Ad nobis dolores fugiat deleniti omnis rem. Deserunt, laudantium
    exercitationem. Cumque ipsa odio architecto dolor, quasi similique fuga? Sit, iste, velit vero
    atque suscipit aut culpa blanditiis, quas unde exercitationem deleniti delectus dicta
    necessitatibus? Ut illo dolor numquam unde, aliquid possimus, itaque consectetur dignissimos,
    dolore ab ducimus. Quam cupiditate quas molestiae et similique laborum temporibus ipsa eos
    tempora saepe ducimus consectetur pariatur tenetur officia repellat rerum autem facere ut vitae,
    corporis dolore impedit odit earum. Dolore nisi molestias mollitia alias odit perferendis quod
    omnis libero aut provident veritatis accusantium eius asperiores ratione beatae deleniti ad
    voluptate cum inventore iste natus a, magnam reiciendis velit? In aliquid perferendis voluptatem
    minus totam modi non, expedita sed quibusdam sit quis quae asperiores rem et sequi dicta
    possimus nemo, libero doloribus molestias delectus facere. Rem odit dolores blanditiis, modi
    autem possimus beatae fuga esse obcaecati quis sunt?
  </p>
</div>

<style>
  .full {
    display: flex;
    gap: var(--gal-spacing);
  }
</style>
