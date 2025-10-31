<div class="columns margins">
  <div>
    <Textfield bind:value={valueA} label="Standard" input$maxlength={18}>
      {#snippet helper()}
        <CharacterCounter>0 / 18</CharacterCounter>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueA}</pre>
  </div>
  <div>
    <Textfield
      variant="filled"
      bind:value={valueB}
      label="Filled"
      input$maxlength={18}
    >
      {#snippet helper()}
        <CharacterCounter>0 / 18</CharacterCounter>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueB}</pre>
  </div>
  <div>
    <Textfield
      variant="outlined"
      bind:value={valueC}
      label="Outlined"
      input$maxlength={18}
    >
      {#snippet helper()}
        <CharacterCounter>0 / 18</CharacterCounter>
      {/snippet}
    </Textfield>

    <pre class="status">Value: {valueC}</pre>
  </div>
</div>

<script lang="ts">
  import Textfield from '@smui/textfield';
  import CharacterCounter from '@smui/textfield/character-counter';

  let valueA = $state('');
  let valueB = $state('');
  let valueC = $state('');
</script>
