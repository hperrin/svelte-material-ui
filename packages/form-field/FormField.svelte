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
    use:useActions={label$use}
    for={inputId}
    {...exclude(prefixFilter($$props, 'label$'), ['use'])}
  ><slot name="label"></slot></label>
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import {MDCFormField} from '@material/form-field';
  import {onMount, onDestroy, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@svelte-material-ui/common/forwardEvents.js';
  import {exclude} from '@svelte-material-ui/common/exclude.js';
  import {prefixFilter} from '@svelte-material-ui/common/prefixFilter.js';
  import {useActions} from '@svelte-material-ui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let align = 'start';
  export let inputId = 'SMUI-form-field-'+(counter++);
  export let label$use = [];

  let element;
  let formField;

  setContext('SMUI:form-field', () => formField);
  setContext('SMUI:generic:input:props', {id: inputId});

  onMount(() => {
    formField = new MDCFormField(element);
  });

  onDestroy(() => {
    if (formField) {
      formField.destroy();
    }
  });
</script>