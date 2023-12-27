<div style="margin-bottom: 1em;">
  <Button on:click={() => loadThings(true)}>Do Pretend Loading</Button>
</div>

<DataTable table$aria-label="User list" style="width: 100%;">
  <Head>
    <Row>
      <Cell numeric>ID</Cell>
      <Cell style="width: 100%;">Name</Cell>
      <Cell>Username</Cell>
      <Cell>Email</Cell>
    </Row>
  </Head>
  <Body>
    {#each items as item (item.id)}
      <Row>
        <Cell numeric>{item.id}</Cell>
        <Cell>{item.name}</Cell>
        <Cell>{item.username}</Cell>
        <Cell>{item.email}</Cell>
      </Row>
    {/each}
  </Body>

  <LinearProgress
    indeterminate
    bind:closed={loaded}
    aria-label="Data is being loaded..."
    slot="progress"
  />
</DataTable>

<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import LinearProgress from '@smui/linear-progress';
  import Button from '@smui/button';

  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
  };
  let items: User[] = [];
  let loaded = false;

  loadThings(false);

  function loadThings(wait: boolean) {
    if (typeof fetch !== 'undefined') {
      loaded = false;

      fetch(
        'https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/users.json',
      )
        .then((response) => response.json())
        .then((json) =>
          setTimeout(
            () => {
              items = json;
              loaded = true;
            },
            // Simulate a long load time.
            wait ? 2000 : 0,
          ),
        );
    }
  }
</script>
