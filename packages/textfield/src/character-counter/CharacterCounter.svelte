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

<script lang="ts">
  import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield';
  import { onMount } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLDivElement;
  let instance: MDCTextFieldCharacterCounterFoundation;
  let content: string | undefined = undefined;

  onMount(() => {
    instance = new MDCTextFieldCharacterCounterFoundation({
      setContent: (value) => {
        content = value;
      },
    });

    dispatch(getElement(), 'SMUITextfieldCharacterCounter:mount', instance);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUITextfieldCharacterCounter:unmount', instance);

      instance.destroy();
    };
  });

  export function getElement() {
    return element;
  }
</script>
