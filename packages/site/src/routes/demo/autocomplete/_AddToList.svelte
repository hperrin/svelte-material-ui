<div>
  <div class="status">
    <pre style="display: inline-block;">Selected:</pre>
    <Set style="display: inline-block;" bind:chips={selected}>
      {#snippet chip(chip)}
        <Chip {chip}>
          <Text tabindex={0}>{chip}</Text>
          <TrailingAction icon$class="material-icons">cancel</TrailingAction>
        </Chip>
      {/snippet}
    </Set>
  </div>

  <Autocomplete
    bind:this={selector}
    options={available}
    label="Fruit"
    showMenuWithNoInput
    onSMUIAutocompleteSelected={handleSelection}
  />
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';

  import Chip, { Set, TrailingAction, Text } from '@smui/chips';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
  let selected: string[] = $state([]);

  const available = $derived(
    fruits.filter((value) => !selected.includes(value)),
  );

  let selector: Autocomplete;

  function handleSelection(event: CustomEvent<string>) {
    // Don't actually select the item.
    event.preventDefault();
    selected.push(event.detail);
  }
</script>
