# Svelte Material UI - Data Table

A data table shows tabular information, and optionally allows the user to select rows.

See [MDC Data Table](https://material.io/develop/web/components/data-tables/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-data-table/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/data-table
```

# Basic Usage

```html
<script>
  import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
</script>

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
```

# Demo

*in action:* https://sveltematerialui.com/demo/data-table

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/data-table.svelte

# Exports

todo...