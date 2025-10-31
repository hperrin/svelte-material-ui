<SegmentedButton segments={choices} bind:selected>
  {#snippet segment(segment)}
    <Segment {segment}>
      <Label>{segment}</Label>
    </Segment>
  {/snippet}
</SegmentedButton>

<pre class="status">Selected: {selected.join(', ')}</pre>

<script lang="ts">
  import SegmentedButton, { Segment, Label } from '@smui/segmented-button';

  let choices = ['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats'];
  let selected = $state(['Shoes', 'Shirts', 'Coats']);
</script>
