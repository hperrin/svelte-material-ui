<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-drawer-scrim': true,
    'smui-drawer-scrim__absolute': !fixed,
  })}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</svelte:component>

<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    dispatch,
  } from '@smui/common/internal';
  import type { SmuiElementMap, SmuiAttrs, SmuiSvgAttrs } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  type TagName = $$Generic<keyof SmuiElementMap>;
  type Component = $$Generic<typeof SvelteComponent>;
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    fixed?: boolean;
    component?: Component;
    tag?: TagName;
  };
  type $$Props = OwnProps &
    (
      | SmuiAttrs<keyof SmuiElementMap, OwnProps, 'getElement'>
      | SmuiSvgAttrs<OwnProps, 'getElement'>
    );

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fixed = true;

  let element: SvelteComponent;

  export let component: Component = SmuiElement as unknown as Component;
  export let tag: TagName | undefined = (
    component === (SmuiElement as unknown as Component) ? 'div' : undefined
  ) as TagName | undefined;

  function handleClick(event: MouseEvent) {
    dispatch(getElement(), 'SMUIDrawerScrim:click', event);
  }

  export function getElement(): HTMLElement {
    return element.getElement();
  }
</script>
