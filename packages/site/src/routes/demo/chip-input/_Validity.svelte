<svelte:options runes={false} />

<!--
  Note: chips must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed chips.
-->
<div>
  <ChipInput
    bind:chips={letters}
    bind:value
    chipTrailingAction$class="material-icons"
    chipTrailingAction$aria-label="Remove letter"
    autocomplete$combobox
    input$maxlength={1}
    input$pattern="[a-zA-Z]"
  >
    <svelte:fragment slot="chipTrailingAction">cancel</svelte:fragment>
    <svelte:fragment slot="label">Letters</svelte:fragment>
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let letters = ['a', 'b', 'c'];
  let value = '';
</script>
