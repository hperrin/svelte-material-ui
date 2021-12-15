<div class="columns margins">
  <div>
    <Textfield bind:value={valueNull} label="Empty as Null">
      <HelperText slot="helper">Helper Text</HelperText>
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
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">Value: {JSON.stringify(valueUndefined)}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let valueNull: string | null = null;
  let valueUndefined: string | undefined = undefined;
</script>
