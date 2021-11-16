<div class="margins">
  <Textfield
    textarea
    bind:value
    label="Label"
    input$rows={4}
    input$cols={24}
    input$resizable={false}
  >
    <HelperText slot="helper">Helper Text</HelperText>
  </Textfield>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let value = '';
</script>
