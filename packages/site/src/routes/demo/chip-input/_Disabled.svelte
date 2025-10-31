<!--
  Note: chips must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed chips.
-->
<div>
  <ChipInput
    bind:chips={tags}
    bind:value
    disabled
    autocomplete$disabled
    textfield$disabled
    chipTrailingAction$class="material-icons"
    chipTrailingAction$aria-label="Remove tag"
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
