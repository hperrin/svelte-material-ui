<div
  class="container"
  style="display: flex; flex-wrap: wrap; align-items: center;"
>
  <!--
    Note: the wrapper on a simple tooltip
    doesn't create any DOM elements.
  -->
  <Wrapper>
    <Button onclick={() => clicked++}>
      <Label>Button</Label>
    </Button>
    <!--
      Note: the toolip element in a simple
      tooltip is hoisted up to the body element.
    -->
    <Tooltip>
      <Label>Tooltip on a button.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Fab onclick={() => clicked++} mini>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
    <!-- The unbounded prop adds more gap between the tooltip and anchor. -->
    <Tooltip unbounded>
      <Label>Tooltip on a FAB.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Checkbox bind:checked />
    <Tooltip>
      <Label>Tooltip on a checkbox.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Radio bind:group={selected} value={'on'} />
    <Tooltip>
      <Label>Tooltip on a radio button.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <Radio bind:group={selected} value={'off'} />
    <Tooltip>
      <Label>Tooltip on another radio button.</Label>
    </Tooltip>
  </Wrapper>

  <Wrapper>
    <span tabindex="0" role="button">I'm a span element.</span>
    <Tooltip>
      <Label>Tooltip on a span.</Label>
    </Tooltip>
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
  <Tooltip>
    <Label>Tooltip on a div.</Label>
  </Tooltip>
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

  let clicked = $state(0);
  let checked = $state(false);
  let selected = $state('on');
</script>

<style>
  .container > :global(*) {
    margin: 15px;
  }
</style>
