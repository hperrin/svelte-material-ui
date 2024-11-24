<svelte:options runes={false} />

<i
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-select__icon': true,
  })}
  aria-hidden={tabindex === -1 ? 'true' : 'false'}
  aria-disabled={role === 'button' ? (disabled ? 'true' : 'false') : undefined}
  {...roleProps}
  {...internalAttrs}
  {...$$restProps}
  >{#if content == null}<slot />{:else}{content}{/if}</i
>

<script lang="ts">
  import { MDCSelectIconFoundation } from '@material/select';
  import { onMount, getContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions, dispatch } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    role?: string | undefined;
    tabindex?: number;
    disabled?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'i', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let role: string | undefined = undefined;
  export let tabindex = role === 'button' ? 0 : -1;
  export let disabled = false;

  let element: HTMLElement;
  let instance: MDCSelectIconFoundation;
  let internalAttrs: { [k: string]: string | undefined } = {};
  let content: string | undefined = undefined;

  $: roleProps = {
    role,
    tabindex,
  };

  const SMUISelectLeadingIconMount = getContext<
    ((accessor: MDCSelectIconFoundation) => void) | undefined
  >('SMUI:select:leading-icon:mount');
  const SMUISelectLeadingIconUnmount = getContext<
    ((accessor: MDCSelectIconFoundation) => void) | undefined
  >('SMUI:select:leading-icon:unmount');

  onMount(() => {
    instance = new MDCSelectIconFoundation({
      getAttr,
      setAttr: addAttr,
      removeAttr,
      setContent: (value) => {
        content = value;
      },
      registerInteractionHandler: (evtType, handler) =>
        getElement().addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) =>
        getElement().removeEventListener(evtType, handler),
      notifyIconAction: () => dispatch(getElement(), 'SMUISelectIcon'),
    });

    SMUISelectLeadingIconMount && SMUISelectLeadingIconMount(instance);

    instance.init();

    return () => {
      SMUISelectLeadingIconUnmount && SMUISelectLeadingIconUnmount(instance);

      instance.destroy();
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
