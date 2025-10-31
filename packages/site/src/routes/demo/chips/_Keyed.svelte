<Set
  bind:chips={myChips}
  bind:selected
  key={(chip) => `${chip.i}`}
  filter
  input
>
  {#snippet chip(chip)}
    <Chip {chip}>
      <Text>{chip.label}</Text>
      <TrailingAction icon$class="material-icons">cancel</TrailingAction>
    </Chip>
  {/snippet}
</Set>
<Button onclick={addKeyedChip}><Label>Add</Label></Button>

<pre class="status">Selected: {selected && selected.length
    ? selected.map((chip) => JSON.stringify(chip)).join(', ')
    : 'None'}</pre>

<script lang="ts">
  import Chip, { Set, TrailingAction, Text } from '@smui/chips';
  import Button, { Label } from '@smui/button';

  type ChipObject = {
    i: number;
    label: string;
  };

  let myChips = $state([
    { i: 1, label: 'Apple' },
    { i: 2, label: 'Apple' },
    { i: 3, label: 'Apple' },
    { i: 4, label: 'Apple' },
  ]) as ChipObject[];
  let selected = $state() as ChipObject[] | undefined;

  function addKeyedChip() {
    if (myChips.length) {
      myChips.push({ i: myChips[myChips.length - 1].i + 1, label: 'Apple' });
    } else {
      myChips.push({ i: 1, label: 'Apple' });
    }
  }
</script>
