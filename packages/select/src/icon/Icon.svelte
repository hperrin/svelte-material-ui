<i
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
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
    role?: string | undefined;
    tabindex?: number;
    disabled?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'i', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

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
      notifyIconAction: () =>
        dispatch(getElement(), 'SMUISelect:icon', undefined, undefined, true),
    });

    dispatch(getElement(), 'SMUISelectLeadingIcon:mount', instance);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUISelectLeadingIcon:unmount', instance);

      instance.destroy();
    };
  });

  function getAttr(name: string) {
    return name in internalAttrs
      ? internalAttrs[name] ?? null
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
