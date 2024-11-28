<svelte:options runes />

<textarea
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-text-field__input': true,
  })}
  style={`${resizable ? '' : 'resize: none; '}${style}`}
  bind:value
  {...internalAttrs}
  {...restProps}
  onchange={(e) => {
    changeHandler();
    restProps.onchange?.(e);
  }}
></textarea>

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
     * A list of CSS styles.
     */
    style?: string;
    /**
     * The value of the input.
     */
    value?: string;
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
     * Whether the textarea should be user resizeable.
     */
    resizable?: boolean;
  };
  let {
    use = [],
    class: className = '',
    style = '',
    value = $bindable(''),
    dirty = $bindable(false),
    invalid = $bindable(false),
    updateInvalid = true,
    initialInvalid = false,
    resizable = true,
    ...restProps
  }: OwnProps & SmuiAttrs<'textarea', keyof OwnProps> = $props();

  let element: HTMLTextAreaElement;
  let internalAttrs: { [k: string]: string | undefined } = $state({});

  onMount(() => {
    if (updateInvalid && initialInvalid) {
      invalid = getElement().matches(':invalid');
    }
  });

  function changeHandler() {
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
