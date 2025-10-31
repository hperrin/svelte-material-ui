<div class="columns margins">
  <div>
    <Textfield bind:value={valueA} label="Standard">
      {#snippet helper()}
        <HelperText persistent>Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield variant="filled" bind:value={valueB} label="Filled">
      {#snippet helper()}
        <HelperText persistent>Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield variant="outlined" bind:value={valueC} label="Outlined">
      {#snippet helper()}
        <HelperText persistent>Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let valueA = $state('');
  let valueB = $state('');
  let valueC = $state('');
</script>
