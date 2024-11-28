<div class="margins">
  <Textfield textarea bind:value label="Label">
    {#snippet helper()}
      <HelperText>Helper Text</HelperText>
    {/snippet}
  </Textfield>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  let value = $state('');
</script>
