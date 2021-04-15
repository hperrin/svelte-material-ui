<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-text-field-helper-text': true,
    'mdc-text-field-helper-text--persistent': persistent,
    'mdc-text-field-helper-text--validation-msg': validationMsg,
    ...internalClasses,
  })}
  aria-hidden={persistent ? null : 'true'}
  {id}
  {...internalAttrs}
  {...$$restProps}
>
  {#if content == null}<slot />{:else}{content}{/if}
</div>

<script context="module">
  let counter = 0;
</script>

<script>
  import { MDCTextFieldHelperTextFoundation } from '@material/textfield/helper-text';
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
  export let id = 'SMUI-textfield-helper-text-' + counter++;
  export let persistent = false;
  export let validationMsg = false;

  let element;
  let instance;
  let internalClasses = {};
  let internalAttrs = {};
  let content = null;

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

    if (id.startsWith('SMUI-textfield-helper-text-')) {
      dispatch(getElement(), 'SMUI:textfield:helper-text:id', id);
    }
    dispatch(getElement(), 'SMUI:textfield:helper-text:mount', instance);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUI:textfield:helper-text:unmount', instance);

      instance.destroy();
    };
  });

  function hasClass(className) {
    return className in internalClasses
      ? internalClasses[className]
      : getElement().classList.contains(className);
  }

  function addClass(className) {
    if (!internalClasses[className]) {
      internalClasses[className] = true;
    }
  }

  function removeClass(className) {
    if (!(className in internalClasses) || internalClasses[className]) {
      internalClasses[className] = false;
    }
  }

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
