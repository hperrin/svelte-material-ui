<svelte:options runes={false} />

<span bind:this={element} use:useActions={use} role="gridcell">
  <i
    class={classMap({
      [className]: true,
      'mdc-chip__icon': true,
      'mdc-chip__icon--trailing': true,
    })}
    {...$$restProps}><slot /></i
  >
</span>

<script lang="ts">
  import type { SmuiAttrs } from '@smui/common';
  import type { ActionArray } from '@smui/common/internal';
  import { classMap, useActions } from '@smui/common/internal';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
  };
  type $$Props = OwnProps & SmuiAttrs<'i', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: HTMLSpanElement;

  export function getElement() {
    return element;
  }
</script>
