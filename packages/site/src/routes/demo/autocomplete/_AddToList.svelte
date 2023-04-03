<div>
  <div class="status">
    <pre style="display: inline-block;">Selected:</pre>
    <Set style="display: inline-block;" bind:chips={selected} let:chip>
      <Chip {chip}>
        <Text tabindex={0}>{chip}</Text>
        <TrailingAction icon$class="material-icons">cancel</TrailingAction>
      </Chip>
    </Set>
  </div>

  <Autocomplete
    bind:this={selector}
    options={available}
    bind:value
    label="Fruit"
    on:SMUIAutocomplete:selected={handleSelection}
  />
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';

  import Chip, { Set, TrailingAction, Text } from '@smui/chips';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
  let selected: string[] = [];

  $: available = fruits.filter((value) => !selected.includes(value));

  let selector: Autocomplete;
  let value = '';

  function handleSelection(event: CustomEvent<string>) {
    // Don't actually select the item.
    event.preventDefault();

    // You could also set value back to '' here.
    selected.push(event.detail);
    // Make sure the chips get updated.
    selected = selected;

    selector.focus();
  }
</script>
