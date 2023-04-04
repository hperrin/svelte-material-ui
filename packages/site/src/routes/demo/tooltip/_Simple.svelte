<div
  class="container"
  style="display: flex; flex-wrap: wrap; align-items: center;"
>
  <!--
    Note: the wrapper on a simple tooltip
    doesn't create any DOM elements.
  -->
  <Wrapper>
    <Button on:click={() => clicked++}>
      <Label>Button</Label>
    </Button>
    <!--
      Note: the toolip element in a simple
      tooltip is hoisted up to the body element.
    -->
    <Tooltip>Tooltip on a button.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Fab on:click={() => clicked++} mini>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
    <Tooltip>Tooltip on a FAB.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Checkbox bind:checked />
    <Tooltip>Tooltip on a checkbox.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Radio bind:group={selected} value={'on'} />
    <Tooltip>Tooltip on a radio button.</Tooltip>
  </Wrapper>

  <Wrapper>
    <Radio bind:group={selected} value={'off'} />
    <Tooltip>Tooltip on another radio button.</Tooltip>
  </Wrapper>

  <Wrapper>
    <span tabindex="0" role="button">I'm a span element.</span>
    <!--
      For tooltips on things that don't have a
      visually declared boundary, like plain text,
      use the `unbounded` prop to remove the gap
      between the element and the tooltip.
    -->
    <Tooltip unbounded>Tooltip on a span.</Tooltip>
  </Wrapper>
</div>

<Wrapper>
  <div
    style="background-color: var(--mdc-theme-secondary); color: var(--mdc-theme-on-secondary); padding: 10px;"
    tabindex="0"
    role="button"
  >
    I'm a div element.
  </div>
  <!--
    This tooltip is for a div with a visually
    defined boundary (the background), so we do not
    use the `unbounded` prop.
  -->
  <Tooltip>Tooltip on a div.</Tooltip>
</Wrapper>

<pre
  class="status">Clicked: {clicked}, Checked: {checked}, Selected: {selected}</pre>

<script lang="ts">
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Button from '@smui/button';
  import Fab from '@smui/fab';
  import Checkbox from '@smui/checkbox';
  import Radio from '@smui/radio';
  import { Label, Icon } from '@smui/common';

  let clicked = 0;
  let checked = false;
  let selected = 'on';
</script>

<style>
  .container > :global(*) {
    margin: 15px;
  }
</style>
