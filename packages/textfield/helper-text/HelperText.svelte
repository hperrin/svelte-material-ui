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
  aria-hidden={persistent ? undefined : 'true'}
  {id}
  {...internalAttrs}
  {...$$restProps}
>
  {#if content == null}<slot />{:else}{content}{/if}
</div>

<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import { MDCTextFieldHelperTextFoundation } from '@material/textfield/helper-text/foundation.js';
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
  export let id = 'SMUI-textfield-helper-text-' + counter++;
  export let persistent = false;
  export let validationMsg = false;

  let element: HTMLDivElement;
  let instance: MDCTextFieldHelperTextFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let content: string | undefined = undefined;

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
      dispatch(getElement(), 'SMUITextfieldHelperText:id', id);
    }
    dispatch(getElement(), 'SMUITextfieldHelperText:mount', instance);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUITextfieldHelperText:unmount', instance);

      instance.destroy();
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
