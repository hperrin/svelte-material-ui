<svelte:component
  this={component}
  {tag}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    'mdc-button__icon': context === 'button',
    'mdc-fab__icon': context === 'fab',
    'mdc-icon-button__icon': context === 'icon-button',
    'mdc-icon-button__icon--on': context === 'icon-button' && on,
    'mdc-tab__icon': context === 'tab',
    'mdc-banner__icon': context === 'banner',
    'mdc-segmented-button__icon': context === 'segmented-button',
  })}
  aria-hidden="true"
  {...svg ? { focusable: 'false', tabindex: '-1' } : {}}
  {...$$restProps}><slot /></svelte:component
>

<script lang="ts">
  import type { ComponentType, SvelteComponent } from 'svelte';
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from './internal/useActions.js';
  import { forwardEventsBuilder, classMap } from './internal/index.js';
  import type {
    SmuiElementMap,
    SmuiAttrs,
    SmuiSvgAttrs,
  } from './smui.types.js';
  import { SmuiElement, Svg } from './index.js';

  type TagName = $$Generic<keyof SmuiElementMap>;
  type Component = $$Generic<ComponentType<SvelteComponent>>;
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    on?: boolean;
    component?: Component;
    tag?: TagName;
  };
  type $$Props = OwnProps &
    (SmuiAttrs<keyof SmuiElementMap, OwnProps> | SmuiSvgAttrs<OwnProps>);

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let on = false;

  let element: SvelteComponent;

  export let component: Component = SmuiElement as unknown as Component;
  export let tag: TagName | undefined = (
    component === (SmuiElement as unknown as Component) ? 'i' : undefined
  ) as TagName | undefined;

  const svg = component === (Svg as unknown as Component);
  const context = getContext<string | undefined>('SMUI:icon:context');

  export function getElement(): HTMLElement {
    return element.getElement();
  }
</script>
