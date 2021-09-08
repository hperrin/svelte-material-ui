<div class="margins">
  <Textfield textarea input$maxlength="100" bind:value label="Label">
    <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
  </Textfield>
</div>

<script>
  import Textfield from '@smui/textfield';
  import CharacterCounter from '@smui/textfield/character-counter/index';

  let value = '';
</script>
