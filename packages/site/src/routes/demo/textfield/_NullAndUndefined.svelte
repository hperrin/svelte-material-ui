<div class="columns margins">
  <div>
    <Textfield bind:value={valueNull} label="Empty as Null">
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {JSON.stringify(valueNull)}</pre>
  </div>
  <div>
    <!--
      Notice that for undefined, the input$emptyValueUndefined prop is required.
    -->
    <Textfield
      bind:value={valueUndefined}
      label="Empty as Undefined"
      input$emptyValueUndefined
    >
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {JSON.stringify(valueUndefined)}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let valueNull: string | null = $state(null);
  let valueUndefined: string | undefined = $state(undefined);
</script>
