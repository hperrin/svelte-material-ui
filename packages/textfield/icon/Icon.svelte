<i
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-text-field__icon': true,
    'mdc-text-field__icon--leading': leading,
    'mdc-text-field__icon--trailing': !leading,
  })}
  {tabindex}
  aria-hidden={tabindex === '-1' ? 'true' : 'false'}
  aria-disabled={role === 'button' ? (disabled ? 'true' : 'false') : null}
  {role}
  {...internalAttrs}
  {...$$restProps}><slot /></i
>

<script>
  import { MDCTextFieldIconFoundation } from '@material/textfield/icon';
  import { onMount, getContext } from 'svelte';
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
  const leadingStore = getContext('SMUI:textfield:icon:leading');
  const leading = $leadingStore;

  onMount(() => {
    instance = new MDCTextFieldIconFoundation({
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
      notifyIconAction: () => dispatch(getElement(), 'MDCTextField:icon'),
    });

    dispatch(
      getElement(),
      leading
        ? 'SMUI:textfield:leading-icon:mount'
        : 'SMUI:textfield:trailing-icon:mount',
      instance
    );

    instance.init();

    return () => {
      dispatch(
        getElement(),
        leading
          ? 'SMUI:textfield:leading-icon:unmount'
          : 'SMUI:textfield:trailing-icon:unmount',
        instance
      );

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
