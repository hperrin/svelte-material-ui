<Paper
  bind:this={element}
  use={usePass}
  class={classMap({
    [className]: true,
    'smui-bottom-app-bar__section': true,
    'smui-bottom-app-bar__section--fab-inset': fabInset,
  })}
  color={$color}
  variant="unelevated"
  square
  {...$$restProps}><slot /></Paper
>

<script lang="ts">
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal';
  import Paper from '@smui/paper';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    fabInset?: boolean;
  };
  type $$Props = {
    [P in Exclude<
      keyof Paper['$$prop_def'],
      keyof OwnProps
    >]?: Paper['$$prop_def'][P];
  } & OwnProps & {
      color?: never;
      variant?: never;
      square?: never;
    };

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  $: usePass = [forwardEvents, ...use] as ActionArray;
  let className = '';
  export { className as class };
  export let fabInset = false;

  let element: Paper;

  const color = getContext<
    SvelteStore<'default' | 'primary' | 'secondary' | string>
  >('SMUI:bottom-app-bar:color');

  export function getElement() {
    return element.getElement();
  }
</script>
