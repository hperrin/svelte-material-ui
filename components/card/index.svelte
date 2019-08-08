<div
  use:useActions={use}
  use:forwardEvents
  class="mdc-card {className}"
  class:mdc-card--outlined={variant === 'outlined'}
  class:smui-card--padded={padded}
  {...exclude($$props, ['use', 'class', 'variant', 'padded'])}
><slot></slot></div>

<script context="module">
  import Content from './Content.svelte';
  import PrimaryAction from './PrimaryAction.svelte';
  import Media from './Media.svelte';
  import MediaContent from './MediaContent.svelte';
  import Actions from './Actions.svelte';
  import ActionButtons from './ActionButtons.svelte';
  import ActionIcons from './ActionIcons.svelte';
  import Button from './Button.svelte';
  import IconButton from './IconButton.svelte';

  export {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons, Button, IconButton};
</script>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let variant = '';
  export let padded = false;
</script>

<style lang="scss" global>
  @import "smui-theme";
  @import "@material/card/mdc-card";

  .smui-card--padded {
    padding: 16px;
  }
</style>