<DataTable table$aria-label="People list" style="max-width: 100%;">
  <Head>
    <Row>
      <Cell>Name</Cell>
      <Cell>Favorite Color</Cell>
      <Cell numeric>Favorite Number</Cell>
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

<script lang="ts">
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
</script>
