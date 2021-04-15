<div class="columns margins">
  <div>
    <Textfield
      bind:value={valueA}
      label="Standard"
      prefix="$"
      input$pattern={'\\d+(\\.\\d{2})?'}
    />

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield
      variant="filled"
      bind:value={valueB}
      label="Filled"
      prefix="$"
      input$pattern={'\\d+(\\.\\d{2})?'}
    />

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield
      variant="outlined"
      bind:value={valueC}
      label="Outlined"
      prefix="$"
      input$pattern={'\\d+(\\.\\d{2})?'}
    />

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<script>
  import Textfield from '@smui/textfield';

  let valueA = '';
  let valueB = '';
  let valueC = '';
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .columns > * {
    flex-basis: 0;
    min-width: 218px;
  }

  .columns :global(.mdc-text-field) {
    width: 218px;
  }

  .columns .status {
    width: auto;
    word-break: break-all;
    overflow-wrap: break-word;
  }
</style>
