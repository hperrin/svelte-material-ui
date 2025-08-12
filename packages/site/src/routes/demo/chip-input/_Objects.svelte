<!--
  Note: chips must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed chips.
-->
<div>
  <ChipInput
    bind:chips={items}
    bind:value
    key={(item) => item.id}
    getChipLabel={(item) => item.text}
    getChipText={(item) => item.text}
    chipTrailingAction$class="material-icons"
    chipTrailingAction$aria-label="Remove item"
    autocomplete$combobox
    onSMUIChipInputEntry={handleChipInputEntry}
  >
    {#snippet chipTrailingAction()}cancel{/snippet}
    {#snippet label()}
      Shopping List
    {/snippet}
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let items = $state([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Milk' },
    { id: 3, text: 'Lemonade' },
  ]);
  let value = $state('');

  function handleChipInputEntry(event: CustomEvent<{ text: string }>) {
    // This prevents the text itself from being pushed onto the array.
    event.preventDefault();

    // And we can push our own object containing the text.
    items.push({
      id: items.length ? Math.max(...items.map((tag) => tag.id)) + 1 : 1,
      text: event.detail.text,
    });
    value = '';
  }
</script>
