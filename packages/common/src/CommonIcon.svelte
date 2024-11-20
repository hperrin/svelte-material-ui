<svelte:options runes={false} />

<svelte:component
  this={component}
  {tag}
  bind:this={element}
  {use}
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

<script lang="ts" generics="TagName extends SmuiEveryElement = 'i'">
  import { getContext } from 'svelte';

  import type { ActionArray } from './internal/useActions.js';
  import { classMap } from './internal/index.js';
  import type {
    SmuiComponent,
    SmuiElementMap,
    SmuiEveryElement,
    SmuiAttrs,
  } from './smui.types.js';
  import { SmuiElement, Svg } from './index.js';

  type OwnProps = {
    use?: ActionArray;
    class?: string;
    on?: boolean;
    component?: SmuiComponent<SmuiElementMap[TagName]>;
    tag?: TagName;
  };
  type $$Props = OwnProps & SmuiAttrs<TagName, keyof OwnProps>;

  // Remember to update $$Props if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let on = false;

  let element: ReturnType<SmuiComponent<SmuiElementMap[TagName]>>;

  export let component: SmuiComponent<SmuiElementMap[TagName]> = SmuiElement;
  export let tag: SmuiEveryElement | undefined =
    component === SmuiElement ? 'i' : undefined;

  const svg = component === (Svg as SmuiComponent<SmuiElementMap['svg']>);
  const context = getContext<string | undefined>('SMUI:icon:context');

  export function getElement() {
    return element.getElement();
  }
</script>
