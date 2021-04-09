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
  on:SMUI:generic:input:mount={(event) => (input = event.detail)}
  on:SMUI:generic:input:unmount={() => (input = undefined)}
  {...exclude($$props, [
    'use',
    'class',
    'align',
    'noWrap',
    'inputId',
    'label$',
  ])}
>
  <slot />
  <label
    bind:this={label}
    use:useActions={label$use}
    for={inputId}
    {...exclude(prefixFilter($$props, 'label$'), ['use'])}
    ><slot name="label" /></label
  >
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import { MDCFormFieldFoundation } from '@material/form-field';
  import { onMount, setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let align = 'start';
  export let noWrap = false;
  export let inputId = 'SMUI-form-field-' + counter++;
  export let label$use = [];

  let element;
  let instance;
  let label;
  let input;

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
