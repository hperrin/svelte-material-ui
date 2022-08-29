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
  {...tag === 'svg' ? { focusable: 'false', tabindex: '-1' } : {}}
  {...$$restProps}><slot /></svelte:component
>

<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { getContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from './internal/useActions.js';
  import { forwardEventsBuilder, classMap } from './internal/index.js';
  import type { SmuiComponent, SmuiElementTagNameMap } from './smui.types.js';
  import { SmuiElement } from './index.js';

  type TagName = $$Generic<keyof SmuiElementTagNameMap>;
  type Component = $$Generic<SmuiComponent<TagName>>;
  type OwnProps = {
    use?: ActionArray;
    class?: string;
    on?: boolean;
    component?: ComponentType<Component>;
    tag?: TagName;
  };
  type $$Props = {
    [P in Exclude<
      keyof svelteHTML.IntrinsicElements[TagName],
      keyof OwnProps
    >]?: svelteHTML.IntrinsicElements[TagName][P];
  } & OwnProps;

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let on = false;

  let element: Component;

  export let component: ComponentType<Component> =
    SmuiElement as ComponentType<Component>;
  export let tag: TagName | undefined = (
    component === SmuiElement ? 'svg' : undefined
  ) as TagName | undefined;

  const context = getContext<string | undefined>('SMUI:icon:context');

  export function getElement() {
    return element.getElement();
  }
</script>
