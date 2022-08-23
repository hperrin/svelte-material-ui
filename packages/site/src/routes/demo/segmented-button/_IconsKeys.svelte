<div class="format-bar">
  <SegmentedButton
    segments={aligns}
    let:segment
    singleSelect
    bind:selected={align}
    key={(segment) => segment.name}
  >
    <Segment {segment} title={segment.name}>
      <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
        <path fill="currentColor" d={segment.icon} />
      </Icon>
    </Segment>
  </SegmentedButton>
  <SegmentedButton
    segments={formats}
    let:segment
    bind:selected={format}
    key={(segment) => segment.name}
  >
    <Segment {segment} title={segment.name}>
      <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
        <path fill="currentColor" d={segment.icon} />
      </Icon>
    </Segment>
  </SegmentedButton>
  <SegmentedButton segments={actions} let:segment>
    <Segment
      {segment}
      on:click$preventDefault={() => {
        segment.count++;
        actions = actions;
      }}
    >
      <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
        <path fill="currentColor" d={segment.icon} />
      </Icon>
      <Label>{segment.name}</Label>
    </Segment>
  </SegmentedButton>
</div>

<pre class="status">Aligned: {align.name}, Format: {format.length
    ? format.map((f) => f.name).join(' & ')
    : 'None'}, {actions
    .map(({ name, count }) => `${name}s: ${count}`)
    .join(', ')}</pre>

<script lang="ts">
  import SegmentedButton, {
    Segment,
    Icon,
    Label,
  } from '@smui/segmented-button';
  import {
    mdiFormatAlignLeft,
    mdiFormatAlignCenter,
    mdiFormatAlignRight,
    mdiFormatAlignJustify,
    mdiFormatBold,
    mdiFormatItalic,
    mdiFormatUnderline,
    mdiLink,
    mdiImage,
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
  type Format = { name: string; icon: string };
  const formats: Format[] = [
    { name: 'Bold', icon: mdiFormatBold },
    { name: 'Italic', icon: mdiFormatItalic },
    { name: 'Underline', icon: mdiFormatUnderline },
  ];
  let actions = [
    { name: 'Link', icon: mdiLink, count: 0 },
    { name: 'Image', icon: mdiImage, count: 0 },
  ];

  let align = aligns[0];
  let format: Format[] = [];
</script>

<style>
  .format-bar {
    display: flex;
    flex-wrap: wrap;
  }

  .format-bar > :global(*) {
    margin-right: 18px;
    margin-bottom: 18px;
  }

  .format-bar :global(svg:focus) {
    outline: 0;
  }
</style>
