{#if tag === 'svg'}
  <svg bind:this={element} use:useActions={use} {...$$restProps}><slot /></svg>
{:else if selfClosing}
  <svelte:element
    this={tag}
    bind:this={element}
    use:useActions={use}
    {...$$restProps}
  />
{:else}
  <svelte:element
    this={tag}
    bind:this={element}
    use:useActions={use}
    {...$$restProps}><slot /></svelte:element
  >
{/if}

<script lang="ts" generics="TagName extends SmuiEveryElement">
  import type { ActionArray } from './internal/useActions.js';
  import { useActions } from './internal/index.js';
  import type {
    SmuiAttrs,
    SmuiElementMap,
    SmuiEveryElement,
  } from './smui.types.js';

  type OwnProps = {
    use?: ActionArray;
    tag: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  export let tag: SmuiEveryElement;

  $: selfClosing =
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
    ].indexOf(tag) > -1;

  let element: SmuiElementMap[SmuiEveryElement];

  export function getElement(): SmuiElementMap[TagName] {
    return element as SmuiElementMap[TagName];
  }
</script>
