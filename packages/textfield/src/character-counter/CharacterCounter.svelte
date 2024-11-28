<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-text-field-character-counter': true,
  })}
  {...restProps}
>
  {#if content == null}{@render children?.()}{:else}{content}{/if}
</div>

<script lang="ts">
  import { MDCTextFieldCharacterCounterFoundation } from '@material/textfield';
  import type { Snippet } from 'svelte';
  import { onMount, getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let instance: MDCTextFieldCharacterCounterFoundation | undefined = $state();
  let content: string | undefined = $state();

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
      if (SMUITextfieldCharacterCounterUnmount && instance) {
        SMUITextfieldCharacterCounterUnmount(instance);
      }

      instance?.destroy();
    };
  });

  export function getElement() {
    return element;
  }
</script>
