<svelte:options runes />

{#if $filter}
  <Checkmark
    bind:this={input}
    children={checkbox}
    {...prefixFilter(restProps, 'checkmark$')}
  />
{/if}
<span
  bind:this={element}
  use:useActions={use}
  role="gridcell"
  {...prefixFilter(restProps, 'container$')}
>
  {#if $nonInteractive}
    <span class="mdc-chip__text" {...prefixFilter(restProps, 'text$')}
      >{@render children?.()}</span
    >
  {:else}
    <span
      bind:this={primaryAction}
      class={classMap({
        'mdc-chip__primary-action': true,
        [className]: true,
      })}
      {...$filter || $choice
        ? { 'aria-selected': $isSelected ? 'true' : 'false' }
        : {}}
      {...roleProps}
      {...internalAttrs}
      {...exclude(restProps, ['checkmark$', 'container$', 'text$'])}
      ><span class="mdc-chip__text" {...prefixFilter(restProps, 'text$')}
        >{@render children?.()}</span
      ></span
    >
  {/if}
</span>

<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte';
  import { onMount, getContext, tick } from 'svelte';
  import type { SmuiAttrs, SmuiElementPropMap } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    classMap,
    exclude,
    prefixFilter,
    useActions,
  } from '@smui/common/internal';

  import type { SMUIChipsPrimaryActionAccessor } from './Text.types.js';
  import Checkmark from './Checkmark.svelte';

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
     * The tab index.
     */
    tabindex?: number;

    children?: Snippet;
    /**
     * A spot for the checkbox icon.
     *
     * You probably shouldn't customize this.
     */
    checkbox?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    tabindex = getContext<boolean>('SMUI:chips:chip:focusable') ? 0 : -1,
    children,
    checkbox,
    ...restProps
  }: OwnProps &
    SmuiAttrs<'span', keyof OwnProps> & {
      [k in keyof ComponentProps<
        typeof Checkmark
      > as `checkmark\$${k}`]?: ComponentProps<typeof Checkmark>[k];
    } & {
      [k in keyof SmuiElementPropMap['span'] as `container\$${k}`]?: SmuiElementPropMap['span'][k];
    } & {
      [k in keyof SmuiElementPropMap['span'] as `text\$${k}`]?: SmuiElementPropMap['span'][k];
    } = $props();

  let element: HTMLSpanElement;
  let input: Checkmark | undefined = undefined;
  let primaryAction: HTMLSpanElement | undefined = undefined;
  let internalAttrs: { [k: string]: string | undefined } = $state({});

  const nonInteractive = getContext<SvelteStore<boolean>>(
    'SMUI:chips:nonInteractive',
  );
  const choice = getContext<SvelteStore<boolean>>('SMUI:chips:choice');
  const filter = getContext<SvelteStore<boolean>>('SMUI:chips:filter');
  const isSelected = getContext<SvelteStore<boolean>>(
    'SMUI:chips:chip:isSelected',
  );

  const roleProps = $derived({
    role: $filter ? 'checkbox' : $choice ? 'radio' : 'button',
    tabindex,
  });

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
