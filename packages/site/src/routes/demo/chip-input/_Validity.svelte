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
    {#snippet chipTrailingAction()}cancel{/snippet}
    {#snippet label()}
      Letters
    {/snippet}
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let letters = $state(['a', 'b', 'c']);
  let value = $state('');
</script>
