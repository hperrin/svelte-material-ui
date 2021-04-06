<div
  bind:this={container}
  use:useActions={line$use}
  use:forwardEvents
  class={classMap({
    [line$class]: true,
    'mdc-text-field-helper-line': true,
  })}
  {...exclude(prefixFilter($$props, 'line$'), ['use', 'class'])}
>
  <div
    bind:this={element}
    use:useActions={use}
    class={classMap({
      [className]: true,
      'mdc-text-field-helper-text': true,
      'mdc-text-field-helper-text--persistent': persistent,
      'mdc-text-field-helper-text--validation-msg': validationMsg,
    })}
    aria-hidden="true"
    {...exclude($$props, ['use', 'class', 'persistent', 'validationMsg'])}
  >
    <slot />
  </div>
  <slot name="character-counter" />
</div>

<script>
  import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
  import { onMount, onDestroy } from 'svelte';
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
  export let persistent = false;
  export let validationMsg = false;
  export let line$use = [];
  export let line$class = '';

  let container;
  let element;
  let helperText;

  onMount(() => {
    helperText = new MDCTextFieldHelperText(element);
  });

  onDestroy(() => {
    helperText && helperText.destroy();
  });

  export function getElement() {
    return container;
  }
</script>
