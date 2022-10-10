<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'smui-bottom-app-bar': true,
    'smui-bottom-app-bar--fixed': variant === 'fixed',
  })}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { Subscriber } from 'svelte/store';
  import { readable, writable } from 'svelte/store';
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    color?: 'default' | 'primary' | 'secondary' | string;
    variant?: 'fixed' | 'static';
  };
  type $$Props = OwnProps & SmuiAttrs<'div', OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let color: 'default' | 'primary' | 'secondary' | string = 'primary';
  export let variant: 'fixed' | 'static' = 'fixed';

  let element: HTMLDivElement;

  const colorStore = writable(color);
  $: $colorStore = color;
  setContext('SMUI:bottom-app-bar:color', colorStore);

  let propStoreSet: Subscriber<{
    variant: 'fixed' | 'static';
  }>;
  let propStore = readable({ variant }, (set) => {
    propStoreSet = set;
  });
  $: if (propStoreSet) {
    propStoreSet({
      variant,
    });
  }

  export function getPropStore() {
    return propStore;
  }

  export function getElement() {
    return element;
  }
</script>
