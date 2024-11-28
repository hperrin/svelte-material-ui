<div class="margins">
  <Textfield textarea input$maxlength={100} bind:value label="Label">
    {#snippet internalCounter()}
      <CharacterCounter>0 / 100</CharacterCounter>
    {/snippet}
  </Textfield>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import CharacterCounter from '@smui/textfield/character-counter';

  let value = $state('');
</script>
