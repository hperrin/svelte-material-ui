<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-text-field-helper-text': true,
    'mdc-text-field-helper-text--persistent': persistent,
    'mdc-text-field-helper-text--validation-msg': validationMsg,
    ...internalClasses,
  })}
  aria-hidden={persistent ? undefined : 'true'}
  {id}
  {...internalAttrs}
  {...restProps}
>
  {#if content == null}{@render children?.()}{:else}{content}{/if}
</div>

<script module lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import { MDCTextFieldHelperTextFoundation } from '@material/textfield';
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
    /**
     * The ID of the element.
     */
    id?: string;
    /**
     * Whether the validation helper text persists even if the input is valid.
     *
     * If it is, it will be displayed in the normal (grey) color.
     */
    persistent?: boolean;
    /**
     * Whether the helper text acts as a validation message.
     */
    validationMsg?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    id = 'SMUI-textfield-helper-text-' + counter++,
    persistent = false,
    validationMsg = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let instance: MDCTextFieldHelperTextFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let content: string | undefined = $state();

  const SMUITextfieldHelperTextId = getContext<
    ((accessor: string) => void) | undefined
  >('SMUI:textfield:helper-text:id');
  const SMUITextfieldHelperTextMount = getContext<
    ((accessor: MDCTextFieldHelperTextFoundation) => void) | undefined
  >('SMUI:textfield:helper-text:mount');
  const SMUITextfieldHelperTextUnmount = getContext<
    ((accessor: MDCTextFieldHelperTextFoundation) => void) | undefined
  >('SMUI:textfield:helper-text:unmount');

  onMount(() => {
    instance = new MDCTextFieldHelperTextFoundation({
      addClass,
      removeClass,
      hasClass,
      getAttr,
      setAttr: addAttr,
      removeAttr,
      setContent: (value) => {
        content = value;
      },
    });

    SMUITextfieldHelperTextId && SMUITextfieldHelperTextId(id);
    SMUITextfieldHelperTextMount && SMUITextfieldHelperTextMount(instance);

    instance.init();

    return () => {
      if (SMUITextfieldHelperTextUnmount && instance) {
        SMUITextfieldHelperTextUnmount(instance);
      }

      instance?.destroy();
    };
  });

  function hasClass(className: string) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className: string) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className: string) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

  function getAttr(name: string) {
    return name in internalAttrs
      ? (internalAttrs[name] ?? null)
      : getElement().getAttribute(name);
  }

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function removeAttr(name: string) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = undefined;
    }
  }

  export function getElement() {
    return element;
  }
</script>
