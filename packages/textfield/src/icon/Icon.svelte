<svelte:options runes />

<i
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-text-field__icon': true,
    'mdc-text-field__icon--leading': leading,
    'mdc-text-field__icon--trailing': !leading,
  })}
  aria-hidden={tabindex === -1 ? 'true' : 'false'}
  aria-disabled={role === 'button' ? (disabled ? 'true' : 'false') : undefined}
  {...roleProps}
  {...internalAttrs}
  {...restProps}
  >{#if content == null}{@render children?.()}{:else}{content}{/if}</i
>

<script lang="ts">
  import { MDCTextFieldIconFoundation } from '@material/textfield';
  import type { Snippet } from 'svelte';
  import { onMount, getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    useActions,
    dispatch,
    SvelteEventManager,
  } from '@smui/common/internal';

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
     * The element's role.
     */
    role?: string | undefined;
    /**
     * The tab index.
     */
    tabindex?: number;
    /**
     * Whether the element is disabled.
     */
    disabled?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    role,
    tabindex = role === 'button' ? 0 : -1,
    disabled = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'i', keyof OwnProps> = $props();

  let element: HTMLElement;
  let instance: MDCTextFieldIconFoundation | undefined = $state();
  let eventManager = new SvelteEventManager();
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  const leadingStore = getContext<SvelteStore<boolean>>(
    'SMUI:textfield:icon:leading',
  );
  const leading = $leadingStore;
  let content: string | undefined = $state();

  const roleProps = $derived({
    role,
    tabindex,
  });

  const SMUITextfieldLeadingIconMount = getContext<
    ((accessor: MDCTextFieldIconFoundation) => void) | undefined
  >('SMUI:textfield:leading-icon:mount');
  const SMUITextfieldLeadingIconUnmount = getContext<
    ((accessor: MDCTextFieldIconFoundation) => void) | undefined
  >('SMUI:textfield:leading-icon:unmount');
  const SMUITextfieldTrailingIconMount = getContext<
    ((accessor: MDCTextFieldIconFoundation) => void) | undefined
  >('SMUI:textfield:trailing-icon:mount');
  const SMUITextfieldTrailingIconUnmount = getContext<
    ((accessor: MDCTextFieldIconFoundation) => void) | undefined
  >('SMUI:textfield:trailing-icon:unmount');

  onMount(() => {
    instance = new MDCTextFieldIconFoundation({
      getAttr,
      setAttr: addAttr,
      removeAttr,
      setContent: (value) => {
        content = value;
      },
      registerInteractionHandler: (evtType, handler) =>
        eventManager.on(getElement(), evtType, handler),
      deregisterInteractionHandler: (evtType, handler) =>
        eventManager.off(getElement(), evtType, handler),
      notifyIconAction: () => dispatch(getElement(), 'SMUITextFieldIcon'),
    });

    if (leading) {
      SMUITextfieldLeadingIconMount && SMUITextfieldLeadingIconMount(instance);
    } else {
      SMUITextfieldTrailingIconMount &&
        SMUITextfieldTrailingIconMount(instance);
    }

    instance.init();

    return () => {
      if (instance) {
        if (leading) {
          SMUITextfieldLeadingIconUnmount &&
            SMUITextfieldLeadingIconUnmount(instance);
        } else {
          SMUITextfieldTrailingIconUnmount &&
            SMUITextfieldTrailingIconUnmount(instance);
        }
      }

      instance?.destroy();
      eventManager.clear();
    };
  });

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
