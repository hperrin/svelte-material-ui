<svelte:options runes />

{#if tag === 'svg'}
  <svg bind:this={element} use:useActions={use} {...restProps}
    >{@render children?.()}</svg
  >
{:else if selfClosing}
  <svelte:element
    this={tag}
    bind:this={element}
    use:useActions={use}
    {...restProps}
  />
{:else}
  <svelte:element
    this={tag}
    bind:this={element}
    use:useActions={use}
    {...restProps}>{@render children?.()}</svelte:element
  >
{/if}

<script lang="ts" generics="TagName extends SmuiEveryElement">
  import type { Snippet } from 'svelte';
  import type { ActionArray } from './internal/useActions.js';
  import { useActions } from './internal/index.js';
  import type {
    SmuiAttrs,
    SmuiElementMap,
    SmuiEveryElement,
  } from './smui.types.js';

  type OwnProps = {
    /**
     * An array of Action or [Action, ActionProps] to be applied to the element.
     */
    use?: ActionArray;
    /**
     * The tag name of the element to create.
     */
    tag?: TagName;

    children?: Snippet;
  };
  let {
    use = [],
    tag = 'div' as TagName,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<TagName, keyof OwnProps> = $props();

  const selfClosing = $derived(
    [
      'area',
      'base',
      'br',
      'col',
      'embed',
      'hr',
      'img',
      'input',
      'link',
      'meta',
      'param',
      'source',
      'track',
      'wbr',
    ].indexOf(tag) > -1,
  );

  let element: SmuiElementMap[SmuiEveryElement];

  export function getElement() {
    return element as SmuiElementMap[TagName];
  }
</script>
