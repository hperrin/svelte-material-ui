<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-form-field': true,
    'mdc-form-field--align-end': align === 'end',
    'mdc-form-field--nowrap': noWrap,
  })}
  on:SMUIGenericInput:mount={(event) => (input = event.detail)}
  on:SMUIGenericInput:unmount={() => (input = undefined)}
  {...exclude($$restProps, ['label$'])}
>
  <slot />
  <label
    bind:this={label}
    use:useActions={label$use}
    for={inputId}
    {...prefixFilter($$restProps, 'label$')}><slot name="label" /></label
  >
</div>

<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import { MDCFormFieldFoundation } from '@material/form-field';
  import { onMount, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { SMUIGenericInputAccessor } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let align: 'start' | 'end' = 'start';
  export let noWrap = false;
  export let inputId = 'SMUI-form-field-' + counter++;
  export let label$use: ActionArray = [];

  let element: HTMLDivElement;
  let instance: MDCFormFieldFoundation;
  let label: HTMLLabelElement;
  let input: SMUIGenericInputAccessor | undefined;

  setContext('SMUI:generic:input:props', { id: inputId });

  onMount(() => {
    instance = new MDCFormFieldFoundation({
      activateInputRipple: () => {
        if (input) {
          input.activateRipple();
        }
      },
      deactivateInputRipple: () => {
        if (input) {
          input.deactivateRipple();
        }
      },
      deregisterInteractionHandler: (evtType, handler) => {
        label.removeEventListener(evtType, handler);
      },
      registerInteractionHandler: (evtType, handler) => {
        label.addEventListener(evtType, handler);
      },
    });

    instance.init();

    return () => {
      instance.destroy();
    };
  });

  export function getElement() {
    return element;
  }
</script>
