<i
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-select__icon': true,
  })}
  {tabindex}
  aria-hidden={tabindex === '-1' ? 'true' : 'false'}
  aria-disabled={role === 'button' ? (disabled ? 'true' : 'false') : null}
  {role}
  {...internalAttrs}
  {...$$restProps}><slot /></i
>

<script>
  import { MDCSelectIconFoundation } from '@material/select/icon/foundation.js';
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
  export let role = null;
  export let tabindex = role === 'button' ? '0' : '-1';
  export let disabled = false;

  let element;
  let instance;
  let internalAttrs = {};

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

    dispatch(getElement(), 'SMUI:select:leading-icon:mount', instance);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUI:select:leading-icon:unmount', instance);

      instance.destroy();
    };
  });

  function getAttr(name) {
    return name in internalAttrs
      ? internalAttrs[name]
      : getElement().getAttribute(name);
  }

  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = undefined;
    }
  }

  export function getElement() {
    return element;
  }
</script>
