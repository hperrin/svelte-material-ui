<div class="margins">
  <Textfield
    style="width: 100%;"
    helperLine$style="width: 100%;"
    bind:value
    label="Label"
  >
    <HelperText slot="helper">Helper Text</HelperText>
  </Textfield>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let value = '';
</script>
