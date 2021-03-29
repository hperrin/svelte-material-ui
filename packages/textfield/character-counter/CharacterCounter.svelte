<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class="mdc-text-field-character-counter {className}"
  {...exclude($$props, ['use', 'class'])}
>
  <slot />
</div>

<script>
  import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import {
    forwardEventsBuilder,
    exclude,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(createEventDispatcher());

  export let use = [];
  let className = '';
  export { className as class };

  let element;
  let characterCounter;

  onMount(() => {
    characterCounter = new MDCTextFieldCharacterCounter(element);
  });

  onDestroy(() => {
    characterCounter && characterCounter.destroy();
  });
</script>
