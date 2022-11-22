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
  import type { SmuiElementMap, SmuiAttrs } from './smui.types.js';

  type TagName = $$Generic<keyof SmuiElementMap>;
  type OwnProps = {
    use?: ActionArray;
    tag: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<keyof SmuiElementMap, OwnProps>;
  // Why doesn't this work?
  // Partial<
  //   Omit<svelteHTML.IntrinsicElements[TagName], keyof OwnProps>
  // >

  // Remember to update $$Props if you add/remove/rename props.
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

  let element: SmuiElementMap[TagName];

  export function getElement(): SmuiElementMap[TagName] {
    return element;
  }
</script>
