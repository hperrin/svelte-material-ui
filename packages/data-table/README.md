# Svelte Material UI - Data Table

A data table shows tabular information, and optionally allows the user to select rows.

# Installation

```sh
npm install --save-dev @smui/data-table
```

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<DataTable table$aria-label="Products">
  <Head>
    <Row>
      <Cell>Name</Cell>
      <Cell>Description</Cell>
      <Cell>Quantity</Cell>
    </Row>
  </Head>
  <Body>
    <Row>
      <Cell>Reds</Cell>
      <Cell>The red ones</Cell>
      <Cell numeric>45</Cell>
    </Row>
    <Row>
      <Cell>Blues</Cell>
      <Cell>The blue ones</Cell>
      <Cell numeric>37</Cell>
    </Row>
    <Row>
      <Cell>Yellows</Cell>
      <Cell>The yellow ones</Cell>
      <Cell numeric>32</Cell>
    </Row>
  </Body>
</DataTable>

<script>
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
</script>
```

# Demo

_in action:_ https://sveltematerialui.com/demo/data-table

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/data-table/

# Exports

todo...

# More Information

See [Data tables](https://material.io/components/data-tables) in the Material design spec.

See [Data Table](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-data-table) in MDC-Web for information about the upstream library's architecture.
