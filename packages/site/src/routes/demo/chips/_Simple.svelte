<!--
  Note: chips must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed chips.
-->
<Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>
  <!-- Note: the `chip` property is required! -->
  <Chip
    {chip}
    shouldRemoveOnTrailingIconClick={false}
    on:click={() => clicked++}
  >
    {#if chip === 'four'}
      <LeadingIcon class="material-icons">book</LeadingIcon>
    {/if}
    <Text tabindex={0}>{chip}</Text>
    {#if chip === 'five'}
      <TrailingIcon class="material-icons">commute</TrailingIcon>
    {/if}
  </Chip>
</Set>

<pre class="status">Clicked: {clicked}</pre>

<script lang="ts">
  import Chip, { Set, LeadingIcon, TrailingIcon, Text } from '@smui/chips';

  let clicked = 0;
</script>
