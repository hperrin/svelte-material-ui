<svelte:options runes={false} />

{#if $filter}
  <Checkmark bind:this={input} />
{/if}
<span bind:this={element} use:useActions={use} role="gridcell">
  {#if $nonInteractive}
    <span class="mdc-chip__text"><slot /></span>
  {:else}
    <span
      bind:this={primaryAction}
      class={classMap({
        [className]: true,
        'mdc-chip__primary-action': true,
      })}
      {...$filter || $choice
        ? { 'aria-selected': $isSelected ? 'true' : 'false' }
        : {}}
      {...roleProps}
      {...internalAttrs}
      {...$$restProps}><span class="mdc-chip__text"><slot /></span></span
    >
  {/if}
</span>

<script lang="ts">
  import { onMount, getContext, tick } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  import type { SMUIChipsPrimaryActionAccessor } from './Text.types.js';
  import Checkmark from './Checkmark.svelte';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    tabindex?: number;
  };
  type $$Props = OwnProps & SmuiAttrs<'span', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let tabindex = getContext<boolean>('SMUI:chips:chip:focusable')
    ? 0
    : -1;

  let element: HTMLSpanElement;
  let input: Checkmark | undefined = undefined;
  let primaryAction: HTMLSpanElement | undefined = undefined;
  let internalAttrs: { [k: string]: string | undefined } = {};

  const nonInteractive = getContext<SvelteStore<boolean>>(
    'SMUI:chips:nonInteractive',
  );
  const choice = getContext<SvelteStore<boolean>>('SMUI:chips:choice');
  const filter = getContext<SvelteStore<boolean>>('SMUI:chips:filter');
  const isSelected = getContext<SvelteStore<boolean>>(
    'SMUI:chips:chip:isSelected',
  );

  $: roleProps = {
    role: $filter ? 'checkbox' : $choice ? 'radio' : 'button',
    tabindex,
  };

  const SMUIChipsPrimaryActionMount = getContext<
    ((accessor: SMUIChipsPrimaryActionAccessor) => void) | undefined
  >('SMUI:chips:primary-action:mount');
  const SMUIChipsPrimaryActionUnmount = getContext<
    ((accessor: SMUIChipsPrimaryActionAccessor) => void) | undefined
  >('SMUI:chips:primary-action:unmount');

  onMount(() => {
    let accessor: SMUIChipsPrimaryActionAccessor = {
      focus,
      addAttr,
    };

    SMUIChipsPrimaryActionMount && SMUIChipsPrimaryActionMount(accessor);

    return () => {
      SMUIChipsPrimaryActionUnmount && SMUIChipsPrimaryActionUnmount(accessor);
    };
  });

  function addAttr(name: string, value: string) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }

  function waitForTabindex(fn: () => void) {
    if (internalAttrs['tabindex'] !== getElement().getAttribute('tabindex')) {
      tick().then(fn);
    } else {
      fn();
    }
  }

  export function focus() {
    // Let the tabindex change propagate.
    waitForTabindex(() => {
      primaryAction && primaryAction.focus();
    });
  }

  export function getInput() {
    return input && input.getElement();
  }

  export function getElement() {
    return element;
  }
</script>
