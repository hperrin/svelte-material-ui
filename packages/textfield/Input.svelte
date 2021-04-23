<input
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-text-field__input': true,
  })}
  on:change={(e) => (type === 'file' || type === 'range') && valueUpdater(e)}
  on:input={(e) => type !== 'file' && valueUpdater(e)}
  on:change={changeHandler}
  {type}
  {placeholder}
  {...valueProp}
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
  export let type = 'text';
  // Always having a placeholder fixes Safari's baseline alignment.
  // See: https://github.com/philipwalton/flexbugs/issues/270
  export let placeholder = ' ';
  export let value = '';
  export let files = undefined;
  export let dirty = false;
  export let invalid = false;
  export let updateInvalid = true;

  let element;
  let internalAttrs = {};
  let valueProp = {};

  $: if (type === 'file') {
    delete valueProp.value;
    valueProp = valueProp;
  } else {
    valueProp.value = value == null ? '' : value;
  }

  onMount(() => {
    if (updateInvalid) {
      invalid = element.matches(':invalid');
    }
  });

  function toNumber(value) {
    if (value === '') {
      const nan = new Number(Number.NaN);
      nan.length = 0;
      return nan;
    }
    return +value;
  }

  function valueUpdater(e) {
    switch (type) {
      case 'number':
      case 'range':
        value = toNumber(e.target.value);
        break;
      case 'file':
        files = e.target.files;
      // Fall through.
      default:
        value = e.target.value;
        break;
    }
  }

  function changeHandler(e) {
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
