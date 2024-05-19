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
  >
    <svelte:fragment slot="chipTrailingAction">cancel</svelte:fragment>
    <svelte:fragment slot="label">Tags</svelte:fragment>
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let tags = ['great', 'awesome', 'wonderful'];
  let value = '';
</script>
