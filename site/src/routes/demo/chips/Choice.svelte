<h6 class="demo-title">Choice chips</h6>

<Set chips={choices} let:chip choice bind:selected>
  <Chip {chip}>
    <Text>{chip}</Text>
  </Chip>
</Set>

<div>Programmatically select:</div>
<Button on:click={() => (selected = 'Morning')}>
  <Label>Morning</Label>
</Button>
<Button on:click={() => (selected = 'Afternoon')}>
  <Label>Afternoon</Label>
</Button>
<Button on:click={() => (selected = 'Evening')}>
  <Label>Evening</Label>
</Button>
<Button on:click={() => (selected = 'Night')}>
  <Label>Night</Label>
</Button>

<pre class="status">Selected: {selected}</pre>

<script>
  import Chip, { Set, Text } from '@smui/chips';
  import Button, { Label } from '@smui/button';

  let choices = ['Morning', 'Afternoon', 'Evening', 'Night'];
  let selected = 'Morning';
</script>
