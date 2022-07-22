<SegmentedButton segments={choices} let:segment key={(segment) => segment.name}>
  <!--
    When the selected prop is provided, Segment will no longer fire a "selected"
    event.
  -->
  <Segment
    {segment}
    selected={segment.selected}
    on:click={() => {
      segment.selected = !segment.selected;
      // Remember to do this so Svelte knows that `choices` has changed.
      choices = choices;
    }}
  >
    <Label>{segment.name}</Label>
  </Segment>
</SegmentedButton>

<pre class="status">Selected: {choices
    .filter((choice) => choice.selected)
    .map((choice) => choice.name)
    .join(', ')}</pre>

<script lang="ts">
  import SegmentedButton, { Segment, Label } from '@smui/segmented-button';

  let choices = [
    {
      name: 'Shoes',
      selected: true,
    },
    {
      name: 'Pants',
      selected: false,
    },
    {
      name: 'Shirts',
      selected: true,
    },
    {
      name: 'Hats',
      selected: false,
    },
    {
      name: 'Coats',
      selected: true,
    },
  ];
</script>
