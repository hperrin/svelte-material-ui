<SegmentedButton
  segments={aligns}
  let:segment
  singleSelect
  bind:selected={align}
  key={(segment) => segment.name}
>
  <Wrapper>
    <Segment {segment} touch title={segment.name}>
      <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
        <path fill="currentColor" d={segment.icon} />
      </Icon>
    </Segment>
  </Wrapper>
</SegmentedButton>

<pre class="status">Aligned: {align.name}</pre>

<script lang="ts">
  import SegmentedButton, { Segment, Icon } from '@smui/segmented-button';
  import Wrapper from '@smui/touch-target';
  import {
    mdiFormatAlignLeft,
    mdiFormatAlignCenter,
    mdiFormatAlignRight,
    mdiFormatAlignJustify,
  } from '@mdi/js';

  const aligns = [
    {
      name: 'Left',
      icon: mdiFormatAlignLeft,
    },
    {
      name: 'Center',
      icon: mdiFormatAlignCenter,
    },
    {
      name: 'Right',
      icon: mdiFormatAlignRight,
    },
    {
      name: 'Justify',
      icon: mdiFormatAlignJustify,
    },
  ];

  let align = aligns[0];
</script>
