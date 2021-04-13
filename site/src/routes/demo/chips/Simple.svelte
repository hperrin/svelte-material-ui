<!-- Note that chips must be unique. (They cannot === each other.) -->
<Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>
  <!-- Notice that the `chip` property is required! -->
  <Chip {chip} shouldRemoveOnTrailingIconClick={false}>
    {#if chip === 'four'}
      <LeadingIcon class="material-icons">book</LeadingIcon>
    {/if}
    <Text tabindex="-1">{chip}</Text>
    {#if chip === 'five'}
      <TrailingIcon class="material-icons">commute</TrailingIcon>
    {/if}
  </Chip>
</Set>

<script>
  import Chip, { Set, LeadingIcon, TrailingIcon, Text } from '@smui/chips';
</script>
