<div
  bind:this={element}
  use:useActions={use}
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
  import { onMount, getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLDivElement;
  let instance: MDCTextFieldCharacterCounterFoundation;
  let content: string | undefined = undefined;

  const SMUITextfieldCharacterCounterMount = getContext<
    ((accessor: MDCTextFieldCharacterCounterFoundation) => void) | undefined
  >('SMUI:textfield:character-counter:mount');
  const SMUITextfieldCharacterCounterUnmount = getContext<
    ((accessor: MDCTextFieldCharacterCounterFoundation) => void) | undefined
  >('SMUI:textfield:character-counter:unmount');

  onMount(() => {
    instance = new MDCTextFieldCharacterCounterFoundation({
      setContent: (value) => {
        content = value;
      },
    });

    SMUITextfieldCharacterCounterMount &&
      SMUITextfieldCharacterCounterMount(instance);

    instance.init();

    return () => {
      SMUITextfieldCharacterCounterUnmount &&
        SMUITextfieldCharacterCounterUnmount(instance);

      instance.destroy();
    };
  });

  export function getElement() {
    return element;
  }
</script>
