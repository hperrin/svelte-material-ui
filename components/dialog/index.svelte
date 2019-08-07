<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-dialog {className}"
  role="alertdialog"
  aria-modal="true"
  {...exclude($$props, ['use', 'class'])}
>
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface">
      <slot></slot>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>

<script context="module">
  import Title from './Title';
  import Content from './Content';
  import Actions from './Actions';
  import Button from './Button';

  export {Title, Content, Actions, Button};
</script>

<script>
  import {MDCDialog} from '@material/dialog';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component, ['MDCDialog:opening', 'MDCDialog:opened', 'MDCDialog:closing', 'MDCDialog:closed']);

  export let use = [];
  let className = '';
  export {className as class};
  export let escapeKeyAction = 'close';
  export let scrimClickAction = 'close';
  export let autoStackButtons = true;

  let element;
  let dialog;

  $: dialog && (dialog.escapeKeyAction = escapeKeyAction);
  $: dialog && (dialog.scrimClickAction = scrimClickAction);
  $: dialog && (dialog.autoStackButtons = autoStackButtons);

  onMount(() => {
    dialog = new MDCDialog(element);
  });

  onDestroy(() => {
    dialog.destroy();
  });

  export function open() {
    return dialog.open();
  }

  export function close(action) {
    return dialog.close(action);
  }

  export function isOpen() {
    return dialog.isOpen();
  }

  export function layout() {
    return dialog.layout();
  }
</script>

<style lang="scss" global>
  @import "smui-theme";
  @import "@material/dialog/mdc-dialog";
</style>