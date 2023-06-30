<span
  bind:this={element}
  use:useActions={use}
  class={classMap({
    [className]: true,
    'mdc-chip__checkmark': true,
  })}
  {...$$restProps}
>
  <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
    <path
      class="mdc-chip__checkmark-path"
      fill="none"
      stroke="black"
      d="M1.73,12.91 8.1,19.28 22.79,4.59"
    />
  </svg>
</span>

<script lang="ts">
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
  };
  type $$Props = OwnProps & SmuiAttrs<'span', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLSpanElement;

  export function getElement() {
    return element;
  }
</script>
