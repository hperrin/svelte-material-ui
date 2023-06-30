<ul
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-image-list': true,
    'mdc-image-list--masonry': masonry,
    'mdc-image-list--with-text-protection': withTextProtection,
  })}
  {...$$restProps}
>
  <slot />
</ul>

<script lang="ts">
  import { setContext } from 'svelte';
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';
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
    masonry?: boolean;
    withTextProtection?: boolean;
  };
  type $$Props = OwnProps & SmuiAttrs<'ul', keyof OwnProps>;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let masonry = false;
  export let withTextProtection = false;

  let element: HTMLUListElement;

  setContext('SMUI:label:context', 'image-list');

  export function getElement() {
    return element;
  }
</script>
