<Set chips={keyed} let:chip key={(chip) => chip.k} input>
  <Chip {chip}>
    <Text>{chip.v}</Text>
    <TrailingAction icon$class="material-icons">cancel</TrailingAction>
  </Chip>
</Set>
<Button on:click={addKeyedChip}><Label>Add</Label></Button>

<script lang="ts">
  import Chip, { Set, TrailingAction, Text } from '@smui/chips';
  import Button, { Label } from '@smui/button';

  let keyed = [
    { k: 1, v: 'Apple' },
    { k: 2, v: 'Apple' },
    { k: 3, v: 'Apple' },
    { k: 4, v: 'Apple' },
  ];

  function addKeyedChip() {
    if (keyed.length) {
      keyed.push({ k: keyed[keyed.length - 1].k + 1, v: 'Apple' });
      keyed = keyed;
    } else {
      keyed.push({ k: 1, v: 'Apple' });
      keyed = keyed;
    }
  }
</script>
