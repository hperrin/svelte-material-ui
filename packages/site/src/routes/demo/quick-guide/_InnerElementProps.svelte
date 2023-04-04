<div class="margins">
  <Textfield
    style="width: 100%; max-width: 300px;"
    helperLine$style="width: 100%; max-width: 300px;"
    input$autocomplete="name"
    input$name="name"
    bind:value
    label="Name"
  >
    <HelperText slot="helper"
      >This field should autocomplete with your name.</HelperText
    >
  </Textfield>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let value = '';
</script>
