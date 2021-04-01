<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="
    mdc-form-field
    {className}
    {align === 'end'
    ? 'mdc-form-field--align-end'
    : ''}
  "
  {...exclude($$props, ['use', 'class', 'alignEnd', 'inputId', 'label$'])}
>
  <slot />
  <label
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
  import { MDCFormField } from '@material/form-field';
  import { onMount, onDestroy, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let align = 'start';
  export let inputId = 'SMUI-form-field-' + counter++;
  export let label$use = [];

  let element;
  let formField;

  let formFieldStore = writable(formField);
  $: $formFieldStore = formField;
  setContext('SMUI:form-field', formFieldStore);
  setContext('SMUI:generic:input:props', { id: inputId });

  onMount(() => {
    formField = new MDCFormField(element);
  });

  onDestroy(() => {
    formField && formField.destroy();
  });

  export function getElement() {
    return element;
  }
</script>
