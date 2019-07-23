<div
  use:useActions={use}
  use:forwardEvents
  class="mdc-card {className}"
  class:smui-card--padded={padded}
  class:mdc-card--outlined={outlined}
  {...exclude($$props, ['use', 'class', 'padded', 'outlined'])}
><slot></slot></div>

<script context="module">
  import Content from './Content';
  import PrimaryAction from './PrimaryAction';
  import Media from './Media';
  import MediaContent from './MediaContent';
  import Actions from './Actions';
  import ActionButtons from './ActionButtons';
  import ActionIcons from './ActionIcons';
  import Button from './Button';
  import IconButton from './IconButton';

  export {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons, Button, IconButton};
</script>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let padded = false;
  export let outlined = false;
</script>

<style lang="scss" global>
  @import "@material/card/mdc-card";

  .smui-card--padded {
    padding: 16px;
  }
</style>