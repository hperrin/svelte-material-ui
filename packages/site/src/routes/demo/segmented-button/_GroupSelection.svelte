<SegmentedButton segments={choices} let:segment bind:selected>
  <Segment {segment}>
    <Label>{segment}</Label>
  </Segment>
</SegmentedButton>

<pre class="status">Selected: {selected.join(', ')}</pre>

<script lang="ts">
  import SegmentedButton, { Segment, Label } from '@smui/segmented-button';

  let choices = ['Shoes', 'Pants', 'Shirts', 'Hats', 'Coats'];
  let selected = ['Shoes', 'Shirts', 'Coats'];
</script>
