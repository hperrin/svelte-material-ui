<!--
  Note: chips must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed chips.
-->
<div>
  <ChipInput
    bind:chips={tags}
    bind:value
    autocomplete$combobox
    chipTrailingAction$aria-label="Remove tag"
  >
    {#snippet chipTrailingAction()}
      <svg style="display: block;" viewBox="0 0 24 24">
        <path fill="currentColor" d={mdiBomb} />
      </svg>
    {/snippet}
    {#snippet label()}
      Tags
    {/snippet}
  </ChipInput>
</div>

<script lang="ts">
  import { mdiBomb } from '@mdi/js';
  import ChipInput from '@smui-extra/chip-input';

  let tags = $state(['great', 'awesome', 'wonderful']);
  let value = $state('');
</script>
