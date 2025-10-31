<svelte:options runes />

<Item
  bind:this={element}
  {use}
  data-value={value}
  {value}
  {selected}
  {...restProps}>{@render children?.()}</Item
>

<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte';
  import { onMount, onDestroy, getContext, setContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { ActionArray } from '@smui/common/internal';
  import { Item } from '@smui/list';

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
     * The value of the input.
     */
    value?: any;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    value = '',
    children,
    ...restProps
  }: OwnProps & Omit<ComponentProps<typeof Item>, keyof OwnProps> = $props();

  let element: Item;
  const selectedText = getContext<Writable<string>>('SMUI:select:selectedText');
  const selectedValue = getContext<SvelteStore<any>>('SMUI:select:value');

  setContext('SMUI:list:item:role', 'option');

  const selected = $derived(
    value != null && value !== '' && $selectedValue === value,
  );

  onMount(setSelectedText);

  onDestroy(setSelectedText);

  function setSelectedText() {
    if (selected && element) {
      $selectedText = element.getPrimaryText();
    }
  }

  export function getElement() {
    return element.getElement();
  }
</script>
