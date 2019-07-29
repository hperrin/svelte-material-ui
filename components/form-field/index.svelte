<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-form-field {className}"
  class:mdc-form-field--align-end={alignEnd}
  {...exclude($$props, ['use', 'class', 'alignEnd', 'inputId'])}
>
  <slot name="input"></slot>
  <label for={inputId}><slot name="label"></slot></label>
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import {MDCFormField} from '@material/form-field';
  import {onMount, onDestroy, setContext} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component);

  export let use = [];
  let className = '';
  export {className as class};
  export let alignEnd = false;
  export let inputId = 'SMUI-form-field-'+(counter++);

  let element;
  let formField;

  setContext('SMUI:formField', () => formField);
  setContext('SMUI:formField:props', {id: inputId});

  onMount(() => {
    formField = new MDCFormField(element);
  });

  onDestroy(() => {
    if (formField) {
      formField.destroy();
    }
  });
</script>

<style lang="scss" global>
  @import "@material/form-field/mdc-form-field";
</style>