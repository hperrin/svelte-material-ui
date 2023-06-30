<svg bind:this={element} use:useActions={use} use:forwardEvents {...$$restProps}
  ><slot /></svg
>

<script lang="ts">
  // @ts-ignore Need to use internal Svelte function
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from './internal/useActions.js';
  import { forwardEventsBuilder, useActions } from './internal/index.js';
  import type { SmuiAttrs } from './smui.types.js';

  if (console && console.warn) {
    console.warn(
      'The @smui/common Svg component is deprecated. You can use `tag="svg"` now.'
    );
  }

  type OwnProps = {
    use?: ActionArray;
  };
  type $$Props = OwnProps & SmuiAttrs<'svg', keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];

  const forwardEvents = forwardEventsBuilder(get_current_component());

  let element: SVGSVGElement;

  export function getElement() {
    return element;
  }
</script>
