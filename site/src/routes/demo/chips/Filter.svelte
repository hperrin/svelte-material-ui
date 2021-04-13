<h6 class="demo-title">Filter chips with increased touch target</h6>

<Set chips={choices} let:chip filter bind:selected>
  <Chip {chip} touch>
    <Text>{chip}</Text>
  </Chip>
</Set>

<pre class="status">Selected: {selected.join(', ')}</pre>

<script>
  import Chip, { Set, Text } from '@smui/chips';

  let choices = ['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats'];
  let selected = ['Shoes', 'Shirts', 'Coats'];
</script>
