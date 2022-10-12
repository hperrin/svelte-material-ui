<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    [adjustClass]: true,
  })}
  style={Object.entries(internalStyles)
    .map(([name, value]) => `${name}: ${value};`)
    .concat([style])
    .join(' ')}
  {...$$restProps}
>
  <slot />
</svelte:component>

<script lang="ts">
  import type { ComponentType, SvelteComponent } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import { forwardEventsBuilder, classMap } from '@smui/common/internal';
  import type { SmuiElementMap, SmuiAttrs, SmuiSvgAttrs } from '@smui/common';
  import { SmuiElement } from '@smui/common';

  type TagName = $$Generic<keyof SmuiElementMap>;
  type Component = $$Generic<ComponentType<SvelteComponent>>;
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    style?: string;
    bottomAppBar: BottomAppBar;
    component?: Component;
    tag?: TagName;
  };
  type $$Props = OwnProps &
    (SmuiAttrs<keyof SmuiElementMap, OwnProps> | SmuiSvgAttrs<OwnProps>);

  import type BottomAppBar from './BottomAppBar.svelte';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let style = '';
  export let bottomAppBar: BottomAppBar;

  let element: SvelteComponent;

  export let component: Component = SmuiElement as unknown as Component;
  export let tag: TagName | undefined = (
    component === (SmuiElement as unknown as Component) ? 'main' : undefined
  ) as TagName | undefined;

  let internalStyles: { [k: string]: string } = {};
  $: propStore = bottomAppBar && bottomAppBar.getPropStore();
  $: adjustClass = (() => {
    if (!propStore || $propStore.variant === 'static') {
      return '';
    }

    addStyle(
      '--smui-bottom-app-bar--fab-offset',
      $propStore.adjustOffset + 'px'
    );

    return `smui-bottom-app-bar--${$propStore.variant}-adjust ${
      $propStore.withFab ? 'smui-bottom-app-bar--with-fab' : ''
    }`;
  })();

  function addStyle(name: string, value: string) {
    if (internalStyles[name] != value) {
      if (value === '' || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }

  export function getElement(): HTMLElement {
    return element.getElement();
  }
</script>
