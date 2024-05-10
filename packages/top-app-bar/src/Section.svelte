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
  {...$$restProps}
>
  <slot />
</section>

<script lang="ts">
  import { setContext } from 'svelte';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    align?: 'start' | 'end';
    toolbar?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'section', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let align: 'start' | 'end' = 'start';
  export let toolbar = false;

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
