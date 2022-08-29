{#if selfClosing}
  <svelte:element
    this={tag}
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    {...$$restProps}
  />
{:else}
  <svelte:element
    this={tag}
    bind:this={element}
    use:useActions={use}
    use:forwardEvents
    {...$$restProps}><slot /></svelte:element
  >
{/if}

<script lang="ts">
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from './internal/useActions.js';
  import { forwardEventsBuilder, useActions } from './internal/index.js';
  import type { SmuiElementTagNameMap } from './smui.types.js';

  type TagName = $$Generic<keyof SmuiElementTagNameMap>;
  type OwnProps = {
    use?: ActionArray;
    tag: TagName;
  };
  type $$Props = {
    [P in Exclude<
      keyof svelteHTML.IntrinsicElements[TagName],
      keyof OwnProps
    >]?: svelteHTML.IntrinsicElements[TagName][P];
  } & OwnProps;
  // Why doesn't this work?
  // Partial<
  //   Omit<svelteHTML.IntrinsicElements[TagName], keyof OwnProps>
  // >

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  export let tag: TagName;

  const forwardEvents = forwardEventsBuilder(get_current_component());

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

  let element: SmuiElementTagNameMap[TagName];

  export function getElement(): SmuiElementTagNameMap[TagName] {
    return element;
  }
</script>
