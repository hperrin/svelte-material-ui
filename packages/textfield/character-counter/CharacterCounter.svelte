<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-text-field-character-counter': true,
  })}
  {...$$restProps}
>
  {#if content == null}<slot />{:else}{content}{/if}
</div>

<script>
  import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield/character-counter';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };

  let element;
  let instance;
  let content = null;

  onMount(() => {
    instance = new MDCTextFieldCharacterCounterFoundation({
      setContent: (value) => {
        content = value;
      },
    });

    dispatch(getElement(), 'SMUI:textfield:character-counter:mount', instance);

    instance.init();

    return () => {
      dispatch(
        getElement(),
        'SMUI:textfield:character-counter:unmount',
        instance
      );

      instance.destroy();
    };
  });

  export function getElement() {
    return element;
  }
</script>
