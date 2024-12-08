<svelte:options runes />

<input
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-text-field__input': true,
  })}
  {type}
  {placeholder}
  {...valueProp}
  {...internalAttrs}
  {...restProps}
  oninput={(e) => {
    if (type !== 'file') {
      valueUpdater(e);
    }
    restProps.oninput?.(e);
  }}
  onchange={(e) => {
    changeHandler(e);
    restProps.onchange?.(e);
  }}
/>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * A space separated list of CSS classes.
     */
    class?: string;
    /**
     * The input type.
     */
    type?: string;
    /**
     * A placeholder to show when the input is empty.
     */
    placeholder?: string;
    /**
     * The value of the input.
     */
    value?: string | number | null | undefined;
    /**
     * The selected files of the input if it is "file" type.
     */
    files?: FileList | null;
    /**
     * Whether the input has been changed.
     */
    dirty?: boolean;
    /**
     * Whether the input is invalid.
     */
    invalid?: boolean;
    /**
     * Set to false to prevent updating the value passed to invalid.
     */
    updateInvalid?: boolean;
    /**
     * Set to true to update the invalid state immediately on instantiation.
     */
    initialInvalid?: boolean;
    /**
     * When the value of the input is "", set value prop to null.
     */
    emptyValueNull?: boolean;
    /**
     * When the value of the input is "", set value prop to undefined.
     */
    emptyValueUndefined?: boolean;
  };
  let {
    use = [],
    class: className = '',
    type = 'text',
    // Always having a placeholder fixes Safari's baseline alignment.
    // See: https://github.com/philipwalton/flexbugs/issues/270
    placeholder = ' ',
    value = $bindable(),
    files = $bindable(null),
    dirty = $bindable(false),
    invalid = $bindable(false),
    updateInvalid = true,
    initialInvalid = false,
    emptyValueNull = value === null,
    emptyValueUndefined = value === undefined,
    ...restProps
  }: OwnProps & SmuiAttrs<'input', keyof OwnProps> = $props();

  let element: HTMLInputElement;
  let internalAttrs: { [k: string]: string | undefined } = $state({});
  let valueProp: { value?: string | number } = $state({});

  $effect(() => {
    if (type === 'file') {
      delete valueProp.value;
    } else {
      valueProp.value = value == null ? '' : value;
    }
  });

  onMount(() => {
    if (updateInvalid && initialInvalid) {
      invalid = getElement().matches(':invalid');
    }
  });

  function toNumber(value: string) {
    if (value === '') {
      return Number.NaN;
    }
    return +value;
  }

  function valueUpdater(
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
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
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    if (type === 'file' || type === 'range') {
      valueUpdater(e);
    }
    dirty = true;
    if (updateInvalid) {
      invalid = getElement().matches(':invalid');
    }
  }

  export function getAttr(name: string) {
    return name in internalAttrs
      ? (internalAttrs[name] ?? null)
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

  export function blur() {
    getElement().blur();
  }

  export function getElement() {
    return element;
  }
</script>
