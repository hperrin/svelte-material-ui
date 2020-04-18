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
  import {get_current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
  import {exclude} from '@smui/common/exclude.js';
  import {useActions} from '@smui/common/useActions.js';

  const forwardEvents = forwardEventsBuilder(get_current_component(), ['change', 'input']);

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

  $: if (type === 'file') {
    delete valueProp.value;
  } else {
    valueProp.value = value === undefined ? '' : value;
  }

  onMount(() => {
    if (updateInvalid) {
      invalid = element.matches(':invalid');
    }
  });

  function toNumber(value) {
    if (value === '') {
      const nan = new Number(Number.NaN);
      nan.length = 0;
      return nan;
    }
    return +value;
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
    if (updateInvalid) {
      invalid = element.matches(':invalid');
    }
  }
</script>
