<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
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
  {...$$restProps}
>
  {#if content == null}<slot />{:else}{content}{/if}
</div>

<script context="module" lang="ts">
  let counter = 0;
</script>

<script lang="ts">
  import { MDCSelectHelperTextFoundation } from '@material/select';
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
    id?: string;
    persistent?: boolean;
    validationMsg?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let id = 'SMUI-select-helper-text-' + counter++;
  export let persistent = false;
  export let validationMsg = false;

  let element: HTMLDivElement;
  let instance: MDCSelectHelperTextFoundation;
  let internalClasses: { [k: string]: boolean } = {};
  let internalAttrs: { [k: string]: string | undefined } = {};
  let content: string | undefined = undefined;

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

    if (id.startsWith('SMUI-select-helper-text-')) {
      dispatch(getElement(), 'SMUISelectHelperText:id', id);
    }
    dispatch(getElement(), 'SMUISelectHelperText:mount', instance);

    instance.init();

    return () => {
      dispatch(getElement(), 'SMUISelectHelperText:unmount', instance);

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
