<i
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-select__icon': true,
  })}
  {tabindex}
  aria-hidden={tabindex === -1 ? 'true' : 'false'}
  aria-disabled={role === 'button' ? (disabled ? 'true' : 'false') : undefined}
  {role}
  {...internalAttrs}
  {...$$restProps}
  >{#if content == null}<slot />{:else}{content}{/if}</i
>

<script lang="ts">
  import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    dispatch,
    ActionArray,
  } from '@smui/common/internal/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
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
      notifyIconAction: () => dispatch(getElement(), 'MDCSelect:icon'),
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
