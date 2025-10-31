<DataTable table$aria-label="Todo list" style="width: 100%;">
  <Head>
    <Row>
      <Cell numeric>ID</Cell>
      <Cell style="width: 100%;">Title</Cell>
      <Cell>Completed</Cell>
      <Cell numeric>User ID</Cell>
    </Row>
  </Head>
  <Body>
    {#each slice as item (item.id)}
      <Row>
        <Cell numeric>{item.id}</Cell>
        <Cell>{item.title}</Cell>
        <Cell>{item.completed ? 'Yes' : 'No'}</Cell>
        <Cell numeric>{item.userId}</Cell>
      </Row>
    {/each}
  </Body>

  {#snippet paginate()}
    <Pagination>
      {#snippet rowsPerPage()}
        <Label>Rows Per Page</Label>
        <Select variant="outlined" bind:value={perPage} noLabel>
          <Option value={10}>10</Option>
          <Option value={25}>25</Option>
          <Option value={100}>100</Option>
        </Select>
      {/snippet}
      {#snippet total()}
        {start + 1}-{end} of {items.length}
      {/snippet}

      <IconButton
        class="material-icons"
        action="first-page"
        title="First page"
        onclick={() => (currentPage = 0)}
        disabled={currentPage === 0}>first_page</IconButton
      >
      <IconButton
        class="material-icons"
        action="prev-page"
        title="Prev page"
        onclick={() => currentPage--}
        disabled={currentPage === 0}>chevron_left</IconButton
      >
      <IconButton
        class="material-icons"
        action="next-page"
        title="Next page"
        onclick={() => currentPage++}
        disabled={currentPage === lastPage}>chevron_right</IconButton
      >
      <IconButton
        class="material-icons"
        action="last-page"
        title="Last page"
        onclick={() => (currentPage = lastPage)}
        disabled={currentPage === lastPage}>last_page</IconButton
      >
    </Pagination>
  {/snippet}
</DataTable>

<script lang="ts">
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Pagination,
  } from '@smui/data-table';
  import Select, { Option } from '@smui/select';
  import IconButton from '@smui/icon-button';
  import { Label } from '@smui/common';

  type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
  };
  let items: Todo[] = $state([]);
  let perPage = $state(10);
  let currentPage = $state(0);

  const start = $derived(currentPage * perPage);
  const end = $derived(Math.min(start + perPage, items.length));
  const slice = $derived(items.slice(start, end));
  const lastPage = $derived(Math.max(Math.ceil(items.length / perPage) - 1, 0));

  $effect(() => {
    if (currentPage > lastPage) {
      currentPage = lastPage;
    }
  });

  if (typeof fetch !== 'undefined') {
    // Slice a few off the end to show how the
    // last page looks when it's not full.
    fetch(
      'https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/todos.json',
    )
      .then((response) => response.json())
      .then((json) => (items = json.slice(0, 197)));
  }
</script>
