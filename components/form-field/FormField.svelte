<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-form-field {className}"
  class:mdc-form-field--align-end={align === 'end'}
  {...exclude($$props, ['use', 'class', 'alignEnd', 'inputId', 'label$'])}
>
  <slot></slot>
  <label
    for={inputId}
    {...prefixFilter($$props, 'label$')}
  ><slot name="label"></slot></label>
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import {MDCFormField} from '@material/form-field';
  import {onMount, onDestroy, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {prefixFilter} from '../prefixFilter.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let align = 'start';
  export let inputId = 'SMUI-form-field-'+(counter++);

  let element;
  let formField;

  setContext('SMUI:form-field', () => formField);
  setContext('SMUI:form-field:props', {id: inputId});

  onMount(() => {
    formField = new MDCFormField(element);
  });

  onDestroy(() => {
    if (formField) {
      formField.destroy();
    }
  });
</script>