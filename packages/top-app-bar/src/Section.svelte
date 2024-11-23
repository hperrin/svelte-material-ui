<svelte:options runes={true} />

<section
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-top-app-bar__section': true,
    'mdc-top-app-bar__section--align-start': align === 'start',
    'mdc-top-app-bar__section--align-end': align === 'end',
  })}
  {...toolbar ? { role: 'toolbar' } : {}}
  {...restProps}
>
  {#if children}{@render children()}{/if}
</section>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
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
     * Where to align the element.
     */
    align?: 'start' | 'end';
    /**
     * Whether this section acts as a toolbar.
     */
    toolbar?: boolean;

    children?: Snippet;
  };
  let {
    use = [],
    class: className = '',
    align = 'start',
    toolbar = false,
    children,
    ...restProps
  }: OwnProps & SmuiAttrs<'section', keyof OwnProps> = $props();

  let element: HTMLElement;

  setContext(
    'SMUI:icon-button:context',
    toolbar ? 'top-app-bar:action' : 'top-app-bar:navigation',
  );
  setContext(
    'SMUI:button:context',
    toolbar ? 'top-app-bar:action' : 'top-app-bar:navigation',
  );

  export function getElement() {
    return element;
  }
</script>
