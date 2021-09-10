<Set chips={input} let:chip input>
  <Chip {chip}>
    <Text>{chip}</Text>
    <TrailingAction icon$class="material-icons">cancel</TrailingAction>
  </Chip>
</Set>
<Button on:click={addInputChip}><Label>Add</Label></Button>

<script lang="ts">
  import Chip, { Set, TrailingAction, Text } from '@smui/chips';
  import Button, { Label } from '@smui/button';

  let input = [1, 2, 3, 4];

  function addInputChip() {
    if (input.length) {
      input.push(input[input.length - 1] + 1);
      input = input;
    } else {
      input.push(1);
      input = input;
    }
  }
</script>
