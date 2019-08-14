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
    Your browser information:

    <DataTable table$aria-label="Client information">
      <Head>
        <Row>
          <Cell>Name</Cell>
          <Cell>Type</Cell>
          <Cell>Value</Cell>
        </Row>
      </Head>
      <Body>
        {#each Object.keys(window.navigator.__proto__).filter(key => ['object', 'function'].indexOf(typeof window.navigator[key]) === -1) as key}
          <Row>
            <Cell>{key}</Cell>
            <Cell>{typeof window.navigator[key]}</Cell>
            <Cell>{window.navigator[key]}</Cell>
          </Row>
        {/each}
      </Body>
    </DataTable>
  </div>
</section>

<script>
  import DataTable, {Head, Body, Row, Cell} from 'svelte-material-ui/components/data-table';
</script>