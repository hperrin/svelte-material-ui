<div class="columns margins">
  <div>
    <Textfield disabled value="" label="Standard">
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
  </div>
  <div>
    <Textfield variant="filled" disabled value="" label="Filled">
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
  </div>
  <div>
    <Textfield variant="outlined" disabled value="" label="Outlined">
      <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
</script>
