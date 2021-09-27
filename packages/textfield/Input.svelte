<input
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-text-field__input': true,
  })}
  on:input={(e) => type !== 'file' && valueUpdater(e)}
  on:change={changeHandler}
  on:blur
  on:focus
  {type}
  {placeholder}
  {...valueProp}
  {...internalAttrs}
  {...$$restProps}
/>

<script lang="ts">
  import { onMount } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
    ActionArray,
  } from '@smui/common/internal/index.js';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let type = 'text';
  // Always having a placeholder fixes Safari's baseline alignment.
  // See: https://github.com/philipwalton/flexbugs/issues/270
  export let placeholder = ' ';
  export let value: string | number | null | undefined = '';
  export let files: FileList | null = null;
  export let dirty = false;
  export let invalid = false;
  export let updateInvalid = true;
  /** When the value of the input is "", set value prop to null. */
  export let emptyValueNull = value === null;
  /** When the value of the input is "", set value prop to undefined. */
  export let emptyValueUndefined = value === undefined;

  let element: HTMLInputElement;
  let internalAttrs: { [k: string]: string | undefined } = {};
  let valueProp: { value?: string | number } = {};

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

  function toNumber(value: string) {
    if (value === '') {
      const nan = new Number(Number.NaN);
      (nan as unknown as Array<any>).length = 0;
      return nan as number;
    }
    return +value;
  }

  function valueUpdater(
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) {
    if (type === 'file') {
      files = e.currentTarget.files;
      return;
    }
    if (e.currentTarget.value === '' && emptyValueNull) {
      value = null;
      return;
    }
    if (e.currentTarget.value === '' && emptyValueUndefined) {
      value = undefined;
      return;
    }
    switch (type) {
      case 'number':
      case 'range':
        value = toNumber(e.currentTarget.value);
        break;
      // Fall through.
      default:
        value = e.currentTarget.value;
        break;
    }
  }

  function changeHandler(
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) {
    if (type === 'file' || type === 'range') {
      valueUpdater(e);
    }
    dirty = true;
    if (updateInvalid) {
      invalid = element.matches(':invalid');
    }
  }

  export function getAttr(name: string) {
    return name in internalAttrs
      ? internalAttrs[name] ?? null
      : getElement().getAttribute(name);
  }

  export function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  export function removeAttr(name: string) {
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
