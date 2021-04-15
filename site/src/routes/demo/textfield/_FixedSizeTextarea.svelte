<div class="margins">
  <Textfield
    textarea
    bind:value
    label="Label"
    input$rows="6"
    input$cols="18"
    input$resizable={false}
  >
    <HelperText slot="helper">Helper Text</HelperText>
  </Textfield>
</div>

<script>
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text/index';

  let value = '';
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }
</style>
