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

<script>
  import {MDCDialog} from '@material/dialog';
  import {onMount, onDestroy} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

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
    dialog && dialog.destroy()
  });

  export function open(...args) {
    return dialog.open(...args);
  }

  export function close(...args) {
    return dialog.close(...args);
  }

  export function isOpen(...args) {
    return dialog.isOpen;
  }

  export function layout(...args) {
    return dialog.layout(...args);
  }
</script>
