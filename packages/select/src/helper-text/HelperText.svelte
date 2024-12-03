<svelte:options runes />

<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-select-helper-text': true,
    'mdc-select-helper-text--validation-msg': validationMsg,
    'mdc-select-helper-text--validation-msg-persistent': persistent,
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
  import { MDCSelectHelperTextFoundation } from '@material/select';
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
    id = 'SMUI-select-helper-text-' + counter++,
    persistent = false,
    validationMsg = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'div', keyof OwnProps> = $props();

  let element: HTMLDivElement;
  let instance: MDCSelectHelperTextFoundation | undefined = $state();
  let internalClasses: { [k: string]: boolean } = $state({});
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let content: string | undefined = $state();

  const SMUISelectHelperTextId = getContext<
    ((accessor: string) => void) | undefined
  >('SMUI:select:helper-text:id');
  const SMUISelectHelperTextMount = getContext<
    ((accessor: MDCSelectHelperTextFoundation) => void) | undefined
  >('SMUI:select:helper-text:mount');
  const SMUISelectHelperTextUnmount = getContext<
    ((accessor: MDCSelectHelperTextFoundation) => void) | undefined
  >('SMUI:select:helper-text:unmount');

  onMount(() => {
    instance = new MDCSelectHelperTextFoundation({
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

    SMUISelectHelperTextId && SMUISelectHelperTextId(id);
    SMUISelectHelperTextMount && SMUISelectHelperTextMount(instance);

    instance.init();

    return () => {
      if (SMUISelectHelperTextUnmount && instance) {
        SMUISelectHelperTextUnmount(instance);
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
