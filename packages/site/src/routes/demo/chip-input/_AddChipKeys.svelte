<!--
  Note: chips must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed chips.
-->
<div>
  <ChipInput
    bind:chips={tags}
    bind:value
    autocomplete$combobox
    chipTrailingAction$class="material-icons"
    chipTrailingAction$aria-label="Remove tag"
    addChipKeys={[' ', ',', '-', '+']}
  >
    {#snippet chipTrailingAction()}cancel{/snippet}
    {#snippet label()}
      Tags
    {/snippet}
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let tags = $state(['great', 'awesome', 'wonderful']);
  let value = $state('');
</script>
