<textarea
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-text-field__input': true,
  })}
  style={`${resizable ? '' : 'resize: none; '}${style}`}
  on:change={changeHandler}
  bind:value
  {...internalAttrs}
  {...$$restProps}
/>

<script>
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  export let use = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let value = '';
  export let dirty = false;
  export let invalid = false;
  export let updateInvalid = true;
  export let resizable = true;

  let element;
  let internalAttrs = {};

  onMount(() => {
    if (updateInvalid) {
      invalid = element.matches(':invalid');
    }
  });

  function changeHandler() {
    dirty = true;
    if (updateInvalid) {
      invalid = element.matches(':invalid');
    }
  }

  export function getAttr(name) {
    return name in internalAttrs
      ? internalAttrs[name]
      : getElement().getAttribute(name);
  }

  export function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  export function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = undefined;
    }
  }

  export function focus() {
    getElement().focus();
  }

  export function getElement() {
    return element;
  }
</script>
