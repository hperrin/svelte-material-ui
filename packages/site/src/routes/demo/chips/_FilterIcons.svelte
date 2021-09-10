<Set chips={choices} let:chip filter bind:selected>
  <Chip {chip} touch>
    <LeadingIcon class="material-icons">checkroom</LeadingIcon>
    <Text>{chip}</Text>
  </Chip>
</Set>

<pre class="status">Selected: {selected.join(', ')}</pre>

<script lang="ts">
  import Chip, { Set, LeadingIcon, Text } from '@smui/chips';

  let choices = ['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats'];
  let selected = ['Shoes', 'Shirts', 'Coats'];
</script>
