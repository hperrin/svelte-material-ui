<ChipSet chips={choices} filter bind:selected>
  {#snippet chip(chip)}
    <Chip {chip} touch>
      <LeadingIcon class="material-icons">checkroom</LeadingIcon>
      <Text>{chip}</Text>
    </Chip>
  {/snippet}
</ChipSet>

<pre class="status">Selected: {selected.join(', ')}</pre>

<script lang="ts">
  import Chip, { ChipSet, LeadingIcon, Text } from '@smui/chips';

  let choices = ['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats'];
  let selected = $state(['Shoes', 'Shirts', 'Coats']);
</script>
