<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-chip {className}"
  class:mdc-chip--selected={selected}
  on:MDCChip:selection={handleSelection}
  {...exclude($$props, ['use', 'class', 'ripple', 'selected', 'shouldRemoveOnTrailingIconClick'])}
><slot></slot></div>

<script context="module">
  import Set from './Set';
  import Checkmark from './Checkmark';
  import Icon from '../common/Icon';
  import Text from '../common/Label';

  export {Set, Icon, Checkmark, Text};
</script>

<script>
  import {MDCChip} from '@material/chips';
  import {onMount, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCChip:interaction', 'MDCChip:selection', 'MDCChip:removal', 'MDCChip:trailingIconInteraction']);

  export let use = [];
  let className = '';
  export {className as class};
  export let ripple = true;
  export let selected = false;
  export let shouldRemoveOnTrailingIconClick = true;

  setContext('SMUI:labelContext', 'chips');
  setContext('SMUI:iconContext', 'chips');

  let element;
  let chip;

  let previousSelected = selected;
  $: if (chip && previousSelected !== selected) {
    if (selected !== chip.selected) {
      chip.selected = selected;
    }
    previousSelected = selected;
  }

  $: if (chip && chip.shouldRemoveOnTrailingIconClick !== shouldRemoveOnTrailingIconClick) {
    chip.shouldRemoveOnTrailingIconClick = shouldRemoveOnTrailingIconClick;
  }

  onMount(() => {
    element.setChip = setChip;
  });

  function setChip(component) {
    chip = component;
    if (!ripple) {
      chip.ripple.destroy();
    }
  }

  function handleSelection(e) {
    selected = e.detail.selected;
  }
</script>

<style lang="scss" global>
  @import "smui-theme";
  @import "@material/chips/mdc-chips";
</style>