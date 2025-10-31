<SegmentedButton segments={choices} key={(segment) => segment.name}>
  {#snippet segment(segment)}
    <!--
      When the selected prop is provided, Segment will no longer fire a "selected"
      event.
    -->
    <Segment
      {segment}
      selected={segment.selected}
      onclick={() => {
        segment.selected = !segment.selected;
      }}
    >
      <Label>{segment.name}</Label>
    </Segment>
  {/snippet}
</SegmentedButton>

<pre class="status">Selected: {choices
    .filter((choice) => choice.selected)
    .map((choice) => choice.name)
    .join(', ')}</pre>

<script lang="ts">
  import SegmentedButton, { Segment, Label } from '@smui/segmented-button';

  let choices = $state([
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
  ]);
</script>
