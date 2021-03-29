<svelte:head>
  <title>Data Table - SMUI</title>
</svelte:head>

<section>
  <h2>Data Table</h2>

  <div>
    <DataTable table$aria-label="People list">
      <Head>
        <Row>
          <Cell>Name</Cell>
          <Cell>Favorite Color</Cell>
          <Cell>Favorite Number</Cell>
        </Row>
      </Head>
      <Body>
        <Row>
          <Cell>Steve</Cell>
          <Cell>Red</Cell>
          <Cell numeric>45</Cell>
        </Row>
        <Row>
          <Cell>Sharon</Cell>
          <Cell>Purple</Cell>
          <Cell numeric>5</Cell>
        </Row>
        <Row>
          <Cell>Rodney</Cell>
          <Cell>Orange</Cell>
          <Cell numeric>32</Cell>
        </Row>
        <Row>
          <Cell>Mack</Cell>
          <Cell>Blue</Cell>
          <Cell numeric>12</Cell>
        </Row>
      </Body>
    </DataTable>
  </div>

  <div>
    With Row Selection:

    <div>
      <DataTable>
        <Head>
          <Row>
            <Cell checkbox>
              <Checkbox />
            </Cell>
            <Cell>Name</Cell>
            <Cell>Description</Cell>
            <Cell>Price</Cell>
          </Row>
        </Head>
        <Body>
          {#each options as option (option.name)}
            <Row>
              <Cell checkbox>
                <Checkbox bind:group={selected} value={option} valueKey={option.name} />
              </Cell>
              <Cell>{option.name}</Cell>
              <Cell>{option.description}</Cell>
              <Cell numeric>{option.price}</Cell>
            </Row>
          {/each}
        </Body>
      </DataTable>
    </div>
  </div>

  <pre class="status">Selected: {selected.map(option => option.name).join(', ')}</pre>
  <pre class="status">Total: {selectedPrice}</pre>
</section>

<script>
  import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
  import Checkbox from '@smui/checkbox';

  $: selectedPrice = selected.reduce((total, option) => option.price + total, 0);

  let options = [
    {
      name: 'Broom',
      description: 'A wooden handled broom.',
      price: 15
    },
    {
      name: 'Dust Pan',
      description: 'A plastic dust pan.',
      price: 8
    },
    {
      name: 'Mop',
      description: 'A strong, durable mop.',
      price: 18
    },
    {
      name: 'Bucket',
      description: 'A metal bucket.',
      price: 13
    }
  ];
  let selected = [options[2]];
</script>