<Set bind:chips={myChips} input>
  {#snippet chip(chip)}
    <Chip {chip}>
      <Text>{chip}</Text>
      <TrailingAction icon$class="material-icons">cancel</TrailingAction>
    </Chip>
  {/snippet}
</Set>
<Button onclick={addInputChip}><Label>Add</Label></Button>

<script lang="ts">
  import Chip, { Set, TrailingAction, Text } from '@smui/chips';
  import Button, { Label } from '@smui/button';

  let myChips = $state([1, 2, 3, 4]);

  function addInputChip() {
    if (myChips.length) {
      myChips.push(myChips[myChips.length - 1] + 1);
    } else {
      myChips.push(1);
    }
  }
</script>
