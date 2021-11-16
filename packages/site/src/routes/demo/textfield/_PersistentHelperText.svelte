<div class="columns margins">
  <div>
    <Textfield bind:value={valueA} label="Standard">
      <HelperText persistent slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield variant="filled" bind:value={valueB} label="Filled">
      <HelperText persistent slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield variant="outlined" bind:value={valueC} label="Outlined">
      <HelperText persistent slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let valueA = '';
  let valueB = '';
  let valueC = '';
</script>
