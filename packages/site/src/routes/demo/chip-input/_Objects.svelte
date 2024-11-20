<svelte:options runes={false} />

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
    chipTrailingAction$class="material-icons"
    chipTrailingAction$aria-label="Remove item"
    autocomplete$combobox
    onSMUIChipInputEntry={handleChipInputEntry}
  >
    <svelte:fragment slot="chipTrailingAction">cancel</svelte:fragment>
    <svelte:fragment slot="label">Shopping List</svelte:fragment>
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let items = [
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Milk' },
    { id: 3, text: 'Lemonade' },
  ];
  let value = '';

  function handleChipInputEntry(event: CustomEvent<{ text: string }>) {
    // This prevents the text itself from being pushed onto the array.
    event.preventDefault();

    // And we can push our own object containing the text.
    items.push({
      id: Math.max(...items.map((tag) => tag.id)) + 1,
      text: event.detail.text,
    });
    items = items;
    value = '';
  }
</script>
