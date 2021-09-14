<div class="columns margins">
  <div>
    <Textfield
      bind:value={valueA}
      label="Standard"
      suffix="㎏"
      input$pattern="\d+"
    />

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield
      variant="filled"
      bind:value={valueB}
      label="Filled"
      suffix="㎏"
      input$pattern="\d+"
    />

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield
      variant="outlined"
      bind:value={valueC}
      label="Outlined"
      suffix="㎏"
      input$pattern="\d+"
    />

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';

  let valueA = '';
  let valueB = '';
  let valueC = '';
</script>
