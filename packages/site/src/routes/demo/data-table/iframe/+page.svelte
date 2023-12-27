<DataTable stickyHeader table$aria-label="User list" style="width: 100%;">
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
</DataTable>

<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
  };
  let items: User[] = [];

  if (typeof fetch !== 'undefined') {
    fetch(
      'https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/users.json',
    )
      .then((response) => response.json())
      .then((json) => (items = json));
  }
</script>

<style>
  /* Reset some of the demo app styles that interfere. */
  :global(body),
  :global(html) {
    height: auto;
    width: auto;
    position: static;
  }
  :global(#smui-app) {
    display: block;
    height: auto;
    overflow: auto;
  }
</style>
