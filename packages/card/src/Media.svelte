<div
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-card__media': true,
    'mdc-card__media--square': aspectRatio === 'square',
    'mdc-card__media--16-9': aspectRatio === '16x9',
  })}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    aspectRatio?: 'square' | '16x9' | undefined;
  };
  type $$Props = OwnProps & SmuiAttrs<'div', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let aspectRatio: 'square' | '16x9' | undefined = undefined;

  let element: HTMLDivElement;

  export function getElement() {
    return element;
  }
</script>
