<div class="format-bar">
  <SegmentedButton
    segments={aligns}
    singleSelect
    bind:selected={align}
    key={(segment) => segment.name}
  >
    {#snippet segment(segment)}
      <Segment {segment} title={segment.name}>
        <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={segment.icon} />
        </Icon>
      </Segment>
    {/snippet}
  </SegmentedButton>
  <SegmentedButton
    segments={formats}
    bind:selected={format}
    key={(segment) => segment.name}
  >
    {#snippet segment(segment)}
      <Segment {segment} title={segment.name}>
        <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={segment.icon} />
        </Icon>
      </Segment>
    {/snippet}
  </SegmentedButton>
  <SegmentedButton segments={actions} key={(segment) => segment.name}>
    {#snippet segment(segment)}
      <Segment
        {segment}
        onclick={preventDefault(() => {
          segment.count += 1;
        })}
      >
        <Icon tag="svg" style="width: 1em; height: auto;" viewBox="0 0 24 24">
          <path fill="currentColor" d={segment.icon} />
        </Icon>
        <Label>{segment.name}</Label>
      </Segment>
    {/snippet}
  </SegmentedButton>
</div>

<pre class="status">Aligned: {align.name}, Format: {format.length
    ? format.map((f) => f.name).join(' & ')
    : 'None'}, {actions
    .map(({ name, count }) => `${name}s: ${count}`)
    .join(', ')}</pre>

<script lang="ts">
  import { preventDefault } from '@smui/common/events';
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
  let actions = $state([
    { name: 'Link', icon: mdiLink, count: 0 },
    { name: 'Image', icon: mdiImage, count: 0 },
  ]);

  let align = $state(aligns[0]);
  let format: Format[] = $state([]);
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
