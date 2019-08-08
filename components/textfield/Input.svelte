<input
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-text-field__input {className}"
  {type}
  {...valueProp}
  on:change={e => (type === 'file' || type === 'range') && valueUpdater(e)}
  on:input={e => type !== 'file' && valueUpdater(e)}
  on:change={changeHandler}
  {...exclude($$props, ['use', 'class', 'type', 'value'])}
/>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents.js';
  import {exclude} from '../exclude.js';
  import {useActions} from '../useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component, ['change', 'input']);

  export let use = [];
  let className = '';
  export {className as class};
  export let type = 'text';
  export let value = '';
  export let files = undefined;
  export let dirty = false;
  export let invalid = false;

  let element;
  let valueProp = {};

  $: if (type === 'file') {
    delete valueProp.value;
  } else {
    valueProp.value = value;
  }

  function toNumber(value) {
    return value === '' ? undefined : +value;
  }

  function valueUpdater(e) {
    switch (type) {
      case 'number':
      case 'range':
        value = toNumber(e.target.value);
        break;
      case 'file':
        files = e.target.files;
        // Fall through.
      default:
        value = e.target.value;
        break;
    }
  }

  function changeHandler(e) {
    dirty = true;
    invalid = element.matches(':invalid');
  }
</script>