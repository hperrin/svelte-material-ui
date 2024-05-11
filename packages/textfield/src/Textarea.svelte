<svelte:options runes={false} />

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
  {...$$restProps}
  onchange={(e) => {
    changeHandler();
    $$restProps.onchange?.(e);
  }}
></textarea>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    value?: string;
    dirty?: boolean;
    invalid?: boolean;
    updateInvalid?: boolean;
    resizable?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'textarea', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let value = '';
  export let dirty = false;
  export let invalid = false;
  export let updateInvalid = true;
  export let resizable = true;

  let element: HTMLTextAreaElement;
  let internalAttrs: { [k: string]: string | undefined } = {};

  onMount(() => {
    if (updateInvalid) {
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

  export function blur() {
    getElement().blur();
  }

  export function getElement() {
    return element;
  }
</script>
