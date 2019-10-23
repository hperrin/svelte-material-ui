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
  {...exclude($$props, ['use', 'class', 'type', 'value', 'files', 'dirty', 'invalid', 'updateInvalid'])}
/>

<script>
  import {onMount} from 'svelte';
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(current_component, ['change', 'input']);

  export let use = [];
  let className = '';
  export {className as class};
  export let type = 'text';
  export let value = '';
  export let files = undefined;
  export let dirty = false;
  export let invalid = false;
  export let updateInvalid = true;

  let element;
  let valueProp = {};
  let rawValue = '' + value;
  // Keep separate rawValue because MDCTextField expects to work with strings,
  // but we parse numbers and ranges for ease of use.

  $: if (type === 'file') {
    delete valueProp.value;
  } else {
    valueProp.value = rawValue;
  }

  onMount(() => {
    if (updateInvalid) {
      invalid = element.matches(':invalid');
    }
  });

  function toNumber(value) {
    return value === '' ? undefined : +value;
  }

  function valueUpdater(e) {
    rawValue = e.target.value;
    switch (type) {
      case 'number':
      case 'range':
        value = toNumber(rawValue);
        break;
      case 'file':
        files = e.target.files;
        // Fall through.
      default:
        value = rawValue;
        break;
    }
  }

  function changeHandler(e) {
    dirty = true;
    if (updateInvalid) {
      invalid = element.matches(':invalid');
    }
  }
</script>