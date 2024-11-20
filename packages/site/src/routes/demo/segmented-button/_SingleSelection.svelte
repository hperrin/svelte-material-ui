<svelte:options runes={false} />

<!--
  Note: segments must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed segments.
-->
<SegmentedButton segments={choices} let:segment singleSelect bind:selected>
  <!-- Note: the `segment` property is required! -->
  <Segment {segment}>
    <Label>{segment}</Label>
  </Segment>
</SegmentedButton>

<div style="margin-top: 1em;">Programmatically select:</div>
<Button onclick={() => (selected = 'Morning')}>
  <Label>Morning</Label>
</Button>
<Button onclick={() => (selected = 'Afternoon')}>
  <Label>Afternoon</Label>
</Button>
<Button onclick={() => (selected = 'Evening')}>
  <Label>Evening</Label>
</Button>
<Button onclick={() => (selected = 'Night')}>
  <Label>Night</Label>
</Button>

<pre class="status">Selected: {selected}</pre>

<script lang="ts">
  import SegmentedButton, { Segment } from '@smui/segmented-button';
  import Button from '@smui/button';
  import { Label } from '@smui/common';

  let choices = ['Morning', 'Afternoon', 'Evening', 'Night'];
  let selected = 'Morning';
</script>
