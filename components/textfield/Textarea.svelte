<textarea
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-text-field__input {className}"
  bind:value
  on:change={changeHandler}
  {...exclude($$props, ['use', 'class', 'value'])}
/>

<script>
  import {current_component} from 'svelte/internal';
  import {forwardEventsBuilder} from '../forwardEvents';
  import {exclude} from '../exclude';
  import {useActions} from '../useActions';

  const forwardEvents = forwardEventsBuilder(current_component, ['change', 'input']);

  export let use = [];
  let className = '';
  export {className as class};
  export let value = '';
  export let dirty = false;
  export let invalid = false;

  let element;

  function changeHandler() {
    dirty = true;
    invalid = element.matches(':invalid');
  }
</script>