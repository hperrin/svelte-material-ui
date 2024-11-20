<svelte:options runes={false} />

<!--
  Note: chips must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed chips.
-->
<div>
  <ChipInput
    bind:chips={colors}
    bind:value
    key={(color) => color.id}
    getChipLabel={(color) => color.text}
    chipTrailingAction$class="material-icons"
    chipTrailingAction$aria-label="Remove color"
    autocomplete$combobox
    autocomplete$options={colorList}
    onSMUIChipInputEntry={handleChipInputEntry}
    onSMUIChipInputSelect={handleChipInputSelect}
  >
    <svelte:fragment slot="chipTrailingAction">cancel</svelte:fragment>
    <svelte:fragment slot="label">Color Mix</svelte:fragment>
  </ChipInput>
</div>

<script lang="ts">
  import ChipInput from '@smui-extra/chip-input';

  let colors = [
    { id: 1, text: 'red' },
    { id: 2, text: 'green' },
    { id: 3, text: 'blue' },
  ];
  let value = '';

  function handleChipInputEntry(event: CustomEvent<{ text: string }>) {
    // This prevents the text itself from being pushed onto the array.
    event.preventDefault();

    // And we can push our own object containing the text.
    colors.push({
      id: Math.max(...colors.map((color) => color.id)) + 1,
      text: event.detail.text,
    });
    colors = colors;
    value = '';
  }

  async function handleChipInputSelect(event: CustomEvent<string>) {
    // This prevents the text itself from being pushed onto the array.
    event.preventDefault();

    // And we can push our own object containing the text.
    colors.push({
      id: Math.max(...colors.map((color) => color.id)) + 1,
      text: event.detail,
    });
    colors = colors;

    // // Wait a tick before clearing the value.
    // await tick();
    value = '';
  }

  const colorList = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'purple',
    'pink',
    'cyan',
    'magenta',
  ];
</script>
