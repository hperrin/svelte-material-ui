<div class="columns margins">
  <div>
    <Textfield disabled value="" label="Standard">
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
    </Textfield>
  </div>
  <div>
    <Textfield variant="filled" disabled value="" label="Filled">
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
    </Textfield>
  </div>
  <div>
    <Textfield variant="outlined" disabled value="" label="Outlined">
      {#snippet helper()}
        <HelperText>Helper Text</HelperText>
      {/snippet}
    </Textfield>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
</script>
