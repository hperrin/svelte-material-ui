<DataTable style="max-width: 100%;">
  <Head>
    <Row>
      <Cell checkbox>
        <Checkbox />
      </Cell>
      <Cell>Name</Cell>
      <Cell>Description</Cell>
      <Cell numeric>Price</Cell>
    </Row>
  </Head>
  <Body>
    {#each options as option (option.name)}
      <Row>
        <Cell checkbox>
          <Checkbox
            bind:group={selected}
            value={option}
            valueKey={option.name}
          />
        </Cell>
        <Cell>{option.name}</Cell>
        <Cell>{option.description}</Cell>
        <Cell numeric>{option.price}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>

<pre class="status">Selected: {selected
    .map((option) => option.name)
    .join(', ')}</pre>
<pre class="status">Total: {selectedPrice}</pre>

<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
  import Checkbox from '@smui/checkbox';

  $: selectedPrice = selected.reduce(
    (total, option) => option.price + total,
    0,
  );

  let options = [
    {
      name: 'Broom',
      description: 'A wooden handled broom.',
      price: 15,
    },
    {
      name: 'Dust Pan',
      description: 'A plastic dust pan.',
      price: 8,
    },
    {
      name: 'Mop',
      description: 'A strong, durable mop.',
      price: 18,
    },
    {
      name: 'Horse',
      description: "She's got some miles on her.",
      price: 83,
    },
    {
      name: 'Bucket',
      description: 'A metal bucket.',
      price: 13,
    },
  ];
  let selected = [options[2]];
</script>
